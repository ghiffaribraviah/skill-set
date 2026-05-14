function parseSkillFrontmatter(content, filename = "SKILL.md") {
  if (!content.startsWith("---\n")) {
    throw new Error(`${filename} is missing YAML frontmatter.`);
  }

  const end = content.indexOf("\n---", 4);
  if (end === -1) {
    throw new Error(`${filename} has unterminated YAML frontmatter.`);
  }

  const frontmatter = content.slice(4, end).trim();
  const metadata = {};

  for (const line of frontmatter.split("\n")) {
    const match = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
    if (!match) {
      continue;
    }

    const key = match[1];
    const value = unquote(match[2].trim());
    metadata[key] = value;
  }

  if (!metadata.name) {
    throw new Error(`${filename} frontmatter must include a name.`);
  }

  return metadata;
}

function unquote(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

module.exports = {
  parseSkillFrontmatter,
};
