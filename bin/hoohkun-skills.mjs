#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(repoRoot, "install-manifest.json");
const projectSkillTarget = path.join(".agents", "skills");

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});

async function main() {
  const { command, args, options } = parseArgs(process.argv.slice(2));
  const manifest = await readJson(manifestPath);

  if (!command || command === "help" || options.help) {
    printHelp();
    return;
  }

  if (command === "list") {
    listSkills(manifest);
    return;
  }

  if (command === "install") {
    await installSkills(manifest, args, options);
    return;
  }

  throw new Error(`Unknown command: ${command}`);
}

function parseArgs(argv) {
  const positional = [];
  const options = {
    force: false,
    target: process.cwd(),
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--force") {
      options.force = true;
    } else if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else if (arg === "--target") {
      const value = argv[index + 1];
      if (!value) throw new Error("--target requires a path");
      options.target = path.resolve(value);
      index += 1;
    } else if (arg.startsWith("--target=")) {
      options.target = path.resolve(arg.slice("--target=".length));
    } else if (arg.startsWith("-")) {
      throw new Error(`Unknown option: ${arg}`);
    } else {
      positional.push(arg);
    }
  }

  return {
    command: positional[0],
    args: positional.slice(1),
    options
  };
}

function printHelp() {
  console.log(`hoohkun-skills

Usage:
  hoohkun-skills list
  hoohkun-skills install <skill...> [--target <repo>] [--force]

Installs curated Daily Skills from this private repo into:
  <target>/${projectSkillTarget}/hoohkun-{skill-name}/
`);
}

function listSkills(manifest) {
  for (const [name, skill] of Object.entries(manifest.skills)) {
    const group = [skill.category, skill.group].filter(Boolean).join("/");
    console.log(`${name}\t${group}\t${skill.description}`);
  }
}

async function installSkills(manifest, selectedNames, options) {
  if (selectedNames.length === 0) {
    throw new Error("Install requires at least one skill name.");
  }

  const installPlan = resolveInstallPlan(manifest, selectedNames);
  const targetRoot = path.resolve(options.target);
  const skillsRoot = path.join(targetRoot, projectSkillTarget);
  const installed = [];

  await fs.mkdir(skillsRoot, { recursive: true });

  for (const sourceName of installPlan) {
    const skill = manifest.skills[sourceName];
    const installedName = `${manifest.namespace}${sourceName}`;
    const sourceDir = path.join(repoRoot, skill.path);
    const targetDir = path.join(skillsRoot, installedName);

    await assertSourceSkill(sourceName, sourceDir);
    await copySkillDirectory(sourceDir, targetDir, options.force);
    await rewriteInstalledSkillName(path.join(targetDir, "SKILL.md"), installedName);

    installed.push({
      sourceName,
      installedName,
      sourcePath: skill.path,
      targetPath: path.relative(targetRoot, targetDir),
      category: skill.category,
      group: skill.group,
      description: skill.description,
      dependencies: skill.dependencies ?? [],
      installedHash: await hashDirectory(targetDir)
    });
  }

  await updateTargetInstallRecord(manifest, skillsRoot, installed);

  for (const skill of installed) {
    console.log(`Installed ${skill.sourceName} -> ${skill.targetPath}`);
  }
}

function resolveInstallPlan(manifest, selectedNames) {
  const plan = [];
  const visiting = new Set();
  const visited = new Set();

  const visit = (name, stack = []) => {
    const skill = manifest.skills[name];
    if (!skill) {
      throw new Error(`Unknown skill: ${name}`);
    }
    if (visited.has(name)) return;
    if (visiting.has(name)) {
      throw new Error(`Dependency cycle: ${[...stack, name].join(" -> ")}`);
    }

    visiting.add(name);
    for (const dependency of skill.dependencies ?? []) {
      visit(dependency, [...stack, name]);
    }
    visiting.delete(name);
    visited.add(name);
    plan.push(name);
  };

  for (const name of selectedNames) {
    visit(name);
  }

  return plan;
}

async function assertSourceSkill(sourceName, sourceDir) {
  const stat = await fs.stat(sourceDir).catch(() => null);
  if (!stat?.isDirectory()) {
    throw new Error(`Source directory for ${sourceName} does not exist: ${sourceDir}`);
  }

  const skillFile = path.join(sourceDir, "SKILL.md");
  const skillText = await fs.readFile(skillFile, "utf8").catch(() => null);
  if (!skillText) {
    throw new Error(`Source skill is missing SKILL.md: ${sourceDir}`);
  }
}

async function copySkillDirectory(sourceDir, targetDir, force) {
  const targetExists = await exists(targetDir);
  if (targetExists && !force) {
    throw new Error(`Skill already exists: ${targetDir}\nUse --force to replace it.`);
  }

  if (targetExists) {
    await fs.rm(targetDir, { recursive: true, force: true });
  }

  await fs.cp(sourceDir, targetDir, {
    recursive: true,
    errorOnExist: true,
    force: false,
    filter: (source) => path.basename(source) !== ".gitkeep"
  });
}

async function rewriteInstalledSkillName(skillFile, installedName) {
  const text = await fs.readFile(skillFile, "utf8");
  const match = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    throw new Error(`SKILL.md is missing YAML frontmatter: ${skillFile}`);
  }

  const frontmatter = match[1];
  if (!/^name:\s*.+$/m.test(frontmatter)) {
    throw new Error(`SKILL.md frontmatter is missing name: ${skillFile}`);
  }

  const rewrittenFrontmatter = frontmatter.replace(/^name:\s*.+$/m, `name: ${installedName}`);
  await fs.writeFile(skillFile, text.replace(match[0], `---\n${rewrittenFrontmatter}\n---\n`));
}

async function updateTargetInstallRecord(manifest, skillsRoot, installedSkills) {
  const lockPath = path.join(skillsRoot, manifest.targetLockfile);
  const lock = (await readJson(lockPath).catch(() => null)) ?? {
    version: 1,
    source: manifest.source ?? "ghiffaribraviah/skill-set",
    sourceType: "private-github",
    namespace: manifest.namespace,
    skills: {}
  };

  lock.version = 1;
  lock.source = manifest.source ?? "ghiffaribraviah/skill-set";
  lock.sourceType = "private-github";
  lock.namespace = manifest.namespace;
  lock.updatedAt = new Date().toISOString();
  lock.skills ??= {};

  for (const skill of installedSkills) {
    lock.skills[skill.installedName] = {
      sourceName: skill.sourceName,
      installedName: skill.installedName,
      sourcePath: skill.sourcePath,
      targetPath: skill.targetPath,
      category: skill.category,
      group: skill.group,
      description: skill.description,
      dependencies: skill.dependencies.map((dependency) => `${manifest.namespace}${dependency}`),
      installedHash: skill.installedHash,
      installedAt: lock.skills[skill.installedName]?.installedAt ?? new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }

  await fs.writeFile(lockPath, `${JSON.stringify(lock, null, 2)}\n`);
}

async function hashDirectory(directory) {
  const hash = crypto.createHash("sha256");
  const files = await listFiles(directory);

  for (const file of files) {
    const relative = path.relative(directory, file).split(path.sep).join("/");
    hash.update(relative);
    hash.update("\0");
    hash.update(await fs.readFile(file));
    hash.update("\0");
  }

  return hash.digest("hex");
}

async function listFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listFiles(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files.sort();
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, "utf8"));
}

async function exists(filePath) {
  return fs.access(filePath).then(() => true, () => false);
}
