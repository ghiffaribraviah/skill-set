const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

function parseCatalogSource(value) {
  const match = /^([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)(?:#(.+))?$/.exec(value);
  if (!match) {
    throw new Error(`Invalid catalog source "${value}". Expected owner/repo or owner/repo#ref.`);
  }

  return {
    source: `${match[1]}/${match[2]}`,
    sourceType: "github",
    owner: match[1],
    repo: match[2],
    ref: match[3] || null,
  };
}

async function fetchCatalog(sourceValue) {
  const parsed = parseCatalogSource(sourceValue);
  const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), "skill-set-"));
  const archivePath = path.join(tempRoot, "catalog.tar.gz");
  const extractRoot = path.join(tempRoot, "catalog");

  try {
    const resolvedRef = parsed.ref || await fetchDefaultBranch(parsed);
    await fs.mkdir(extractRoot, { recursive: true });
    await downloadArchive(parsed, resolvedRef, archivePath);
    await extractArchive(archivePath, extractRoot);

    return {
      catalogRoot: extractRoot,
      sourceInfo: {
        source: parsed.source,
        sourceType: parsed.sourceType,
        ref: parsed.ref || resolvedRef,
        resolvedRef,
      },
      cleanup: () => fs.rm(tempRoot, { recursive: true, force: true }),
    };
  } catch (error) {
    await fs.rm(tempRoot, { recursive: true, force: true });
    throw error;
  }
}

async function fetchDefaultBranch(parsed) {
  const url = `https://api.github.com/repos/${parsed.owner}/${parsed.repo}`;
  const response = await fetch(url, {
    headers: {
      "user-agent": "@ghiffaribraviah/skill-set",
      "accept": "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to resolve default branch for ${parsed.source}: ${response.status} ${response.statusText}`);
  }

  const body = await response.json();
  if (!body.default_branch) {
    throw new Error(`GitHub did not return a default branch for ${parsed.source}.`);
  }

  return body.default_branch;
}

async function downloadArchive(parsed, ref, destination) {
  const url = `https://codeload.github.com/${parsed.owner}/${parsed.repo}/tar.gz/${encodeURI(ref)}`;
  const response = await fetch(url, {
    headers: {
      "user-agent": "@ghiffaribraviah/skill-set",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download ${parsed.source}#${ref}: ${response.status} ${response.statusText}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(destination, bytes);
}

function extractArchive(archivePath, destination) {
  return new Promise((resolve, reject) => {
    const child = spawn("tar", ["-xzf", archivePath, "-C", destination, "--strip-components=1"], {
      stdio: ["ignore", "ignore", "pipe"],
    });

    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Failed to extract catalog archive.${stderr ? `\n${stderr.trim()}` : ""}`));
      }
    });
  });
}

module.exports = {
  fetchCatalog,
  parseCatalogSource,
};
