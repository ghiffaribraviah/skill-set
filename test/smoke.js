const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { discoverSkills } = require("../src/catalog");
const { installSkills } = require("../src/install");

async function run() {
  const repoRoot = path.resolve(__dirname, "..");
  const targetRoot = await fs.mkdtemp(path.join(os.tmpdir(), "skill-set-smoke-"));

  try {
    const skills = await discoverSkills(repoRoot);
    assert.deepEqual(skills.map((skill) => skill.name), ["cdd"]);

    const sourceInfo = {
      source: "ghiffaribraviah/skill-set",
      sourceType: "github",
      ref: "main",
      resolvedRef: "main",
    };

    await installSkills({
      catalogRoot: repoRoot,
      targetRoot,
      sourceInfo,
      skills,
      requestedSkillNames: ["cdd"],
      force: false,
    });

    const installedSkill = path.join(targetRoot, ".agents", "skills", "cdd", "SKILL.md");
    const lockfile = path.join(targetRoot, ".agents", "skills-lock.json");
    assert.match(await fs.readFile(installedSkill, "utf8"), /name: cdd/);
    assert.equal(JSON.parse(await fs.readFile(lockfile, "utf8")).skills.cdd.source, "ghiffaribraviah/skill-set");

    await installSkills({
      catalogRoot: repoRoot,
      targetRoot,
      sourceInfo,
      skills,
      requestedSkillNames: ["cdd"],
      force: false,
    });

    await fs.appendFile(installedSkill, "\nlocal edit\n");
    await assert.rejects(
      () => installSkills({
        catalogRoot: repoRoot,
        targetRoot,
        sourceInfo,
        skills,
        requestedSkillNames: ["cdd"],
        force: false,
      }),
      /Install conflict/
    );

    await installSkills({
      catalogRoot: repoRoot,
      targetRoot,
      sourceInfo,
      skills,
      requestedSkillNames: ["cdd"],
      force: true,
    });
  } finally {
    await fs.rm(targetRoot, { recursive: true, force: true });
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
