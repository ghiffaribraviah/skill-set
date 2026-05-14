const fs = require("node:fs/promises");
const path = require("node:path");
const { parseSkillFrontmatter } = require("./frontmatter");

async function discoverSkills(catalogRoot) {
  const skillsRoot = path.join(catalogRoot, "skills");
  const entries = await readdirOrEmpty(skillsRoot);
  const skills = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const skillDir = path.join(skillsRoot, entry.name);
    const skillFile = path.join(skillDir, "SKILL.md");
    const content = await readFileOrNull(skillFile);
    if (content === null) {
      continue;
    }

    const metadata = parseSkillFrontmatter(content, skillFile);
    if (!metadata.name) {
      continue;
    }

    skills.push({
      name: metadata.name,
      description: metadata.description || "",
      sourcePath: path.relative(catalogRoot, skillDir),
      skillPath: path.relative(catalogRoot, skillFile),
      absolutePath: skillDir,
    });
  }

  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

async function readdirOrEmpty(dir) {
  try {
    return await fs.readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function readFileOrNull(file) {
  try {
    return await fs.readFile(file, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

module.exports = {
  discoverSkills,
};
