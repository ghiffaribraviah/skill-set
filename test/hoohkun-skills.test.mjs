import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { test } from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const cliPath = path.join(repoRoot, "bin", "hoohkun-skills.mjs");

test("installs a namespaced skill directory and private lockfile", async () => {
  const target = await fs.mkdtemp(path.join(os.tmpdir(), "hoohkun-skills-test-"));

  const result = runCli(["install", "grilling", "--target", target]);
  assert.equal(result.status, 0, result.stderr);

  const skillPath = path.join(target, ".agents", "skills", "hoohkun-grilling", "SKILL.md");
  const lockPath = path.join(target, ".agents", "skills", "hoohkun-skills-lock.json");
  const installedSkill = await fs.readFile(skillPath, "utf8");
  const lock = JSON.parse(await fs.readFile(lockPath, "utf8"));

  assert.match(installedSkill, /^name: hoohkun-grilling$/m);
  assert.equal(lock.source, "ghiffaribraviah/skill-set");
  assert.equal(lock.skills["hoohkun-grilling"].sourceName, "grilling");
  assert.equal(lock.skills["hoohkun-grilling"].targetPath, ".agents/skills/hoohkun-grilling");

  const secondInstall = runCli(["install", "grilling", "--target", target]);
  assert.notEqual(secondInstall.status, 0, JSON.stringify(secondInstall, null, 2));
});

function runCli(args) {
  return spawnSync(process.execPath, [cliPath, ...args], {
    cwd: repoRoot,
    encoding: "utf8"
  });
}
