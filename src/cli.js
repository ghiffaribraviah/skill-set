const { fetchCatalog } = require("./source");
const { discoverSkills } = require("./catalog");
const { installSkills } = require("./install");

const usage = `Usage:
  skill-set list <owner/repo[#ref]>
  skill-set add <owner/repo[#ref]> [skill...] [--force]

Examples:
  skill-set list ghiffaribraviah/skill-set
  skill-set add ghiffaribraviah/skill-set cdd
  skill-set add ghiffaribraviah/skill-set#main --force`;

async function main(argv) {
  const [command, ...rest] = argv;

  if (!command || command === "--help" || command === "-h") {
    console.log(usage);
    return;
  }

  if (command === "list") {
    await listCommand(rest);
    return;
  }

  if (command === "add") {
    await addCommand(rest);
    return;
  }

  throw new Error(`Unknown command "${command}".\n\n${usage}`);
}

async function listCommand(args) {
  const source = args[0];
  if (!source || args.length > 1) {
    throw new Error(`Expected exactly one catalog source.\n\n${usage}`);
  }

  await withCatalog(source, async ({ catalogRoot }) => {
    const skills = await discoverSkills(catalogRoot);
    if (skills.length === 0) {
      console.log("No published skills found.");
      return;
    }

    for (const skill of skills) {
      const description = skill.description ? ` - ${skill.description}` : "";
      console.log(`${skill.name}${description}`);
    }
  });
}

async function addCommand(args) {
  const force = args.includes("--force");
  const withoutFlags = args.filter((arg) => arg !== "--force");
  const [source, ...requestedSkills] = withoutFlags;

  if (!source) {
    throw new Error(`Expected a catalog source.\n\n${usage}`);
  }

  await withCatalog(source, async ({ catalogRoot, sourceInfo }) => {
    const skills = await discoverSkills(catalogRoot);
    const result = await installSkills({
      catalogRoot,
      targetRoot: process.cwd(),
      sourceInfo,
      skills,
      requestedSkillNames: requestedSkills,
      force,
    });

    for (const installed of result.installed) {
      console.log(`Installed ${installed.name} -> ${installed.installedPath}`);
    }

    if (result.installed.length > 0) {
      console.log("Updated .agents/skills-lock.json");
    }
  });
}

async function withCatalog(source, callback) {
  const catalog = await fetchCatalog(source);
  try {
    return await callback(catalog);
  } finally {
    await catalog.cleanup();
  }
}

module.exports = {
  main,
};
