const crypto = require("node:crypto");
const fs = require("node:fs/promises");
const path = require("node:path");

async function hashDirectory(root) {
  const files = await listFiles(root);
  const hash = crypto.createHash("sha256");

  for (const file of files) {
    const relativePath = path.relative(root, file).split(path.sep).join("/");
    hash.update(relativePath);
    hash.update("\0");
    hash.update(await fs.readFile(file));
    hash.update("\0");
  }

  return hash.digest("hex");
}

async function listFiles(root) {
  const entries = await fs.readdir(root, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(absolutePath)));
    } else if (entry.isFile()) {
      files.push(absolutePath);
    }
  }

  return files.sort();
}

module.exports = {
  hashDirectory,
};
