const fs = require("node:fs/promises");
const path = require("node:path");
const { hashDirectory } = require("./hash");

const lockfileRelativePath = path.join(".agents", "skills-lock.json");

async function installSkills(options) {
  const {
    catalogRoot,
    targetRoot,
    sourceInfo,
    skills,
    requestedSkillNames,
    force,
  } = options;

  const selectedSkills = selectSkills(skills, requestedSkillNames);
  const lockfilePath = path.join(targetRoot, lockfileRelativePath);
  const lockfile = await readLockfile(lockfilePath);
  const installed = [];

  for (const skill of selectedSkills) {
    const installedRelativePath = path.join(".agents", "skills", skill.name);
    const installedPath = path.join(targetRoot, installedRelativePath);
    const existingEntry = lockfile.skills[skill.name];

    if (await exists(installedPath)) {
      const currentHash = await hashDirectory(installedPath);
      const expectedHash = existingEntry && existingEntry.computedHash;

      if (currentHash !== expectedHash && !force) {
        throw new Error(
          `Install conflict for ${skill.name}: ${installedRelativePath} has local changes or was not installed by this CLI. Re-run with --force to overwrite.`
        );
      }

      await fs.rm(installedPath, { recursive: true, force: true });
    }

    await copyDirectory(path.join(catalogRoot, skill.sourcePath), installedPath);
    const computedHash = await hashDirectory(installedPath);

    lockfile.skills[skill.name] = {
      source: sourceInfo.source,
      sourceType: sourceInfo.sourceType,
      ref: sourceInfo.ref,
      resolvedRef: sourceInfo.resolvedRef,
      skillPath: skill.skillPath,
      installedPath: installedRelativePath.split(path.sep).join("/"),
      computedHash,
    };

    installed.push({
      name: skill.name,
      installedPath: installedRelativePath.split(path.sep).join("/"),
    });
  }

  await writeLockfile(lockfilePath, lockfile);
  return { installed };
}

function selectSkills(skills, requestedSkillNames) {
  if (requestedSkillNames.length === 0) {
    return skills;
  }

  const byName = new Map(skills.map((skill) => [skill.name, skill]));
  const selected = [];
  const missing = [];

  for (const name of requestedSkillNames) {
    const skill = byName.get(name);
    if (skill) {
      selected.push(skill);
    } else {
      missing.push(name);
    }
  }

  if (missing.length > 0) {
    const available = skills.map((skill) => skill.name).join(", ") || "none";
    throw new Error(`Unknown skill(s): ${missing.join(", ")}. Available skills: ${available}.`);
  }

  return selected;
}

async function readLockfile(lockfilePath) {
  try {
    const content = await fs.readFile(lockfilePath, "utf8");
    const parsed = JSON.parse(content);
    return {
      version: 1,
      skills: parsed.skills || {},
    };
  } catch (error) {
    if (error.code === "ENOENT") {
      return { version: 1, skills: {} };
    }
    throw error;
  }
}

async function writeLockfile(lockfilePath, lockfile) {
  await fs.mkdir(path.dirname(lockfilePath), { recursive: true });
  await fs.writeFile(lockfilePath, `${JSON.stringify(lockfile, null, 2)}\n`);
}

async function copyDirectory(source, destination) {
  await fs.mkdir(destination, { recursive: true });
  const entries = await fs.readdir(source, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(sourcePath, destinationPath);
    } else if (entry.isFile()) {
      await fs.copyFile(sourcePath, destinationPath);
    }
  }
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

module.exports = {
  installSkills,
  selectSkills,
};
