# Skill Set

Skill Set is a GitHub-hosted catalog of installable agent skills. It currently publishes the `cdd` skill for component-driven frontend implementation, and includes a small npm CLI for installing skills into other repositories.

## Published Skills

- `cdd` - component-driven development for frontend UI/UX implementation.

Published skills live under:

```text
skills/<skill-name>/SKILL.md
```

Each skill directory can include supporting files such as `references/`, `scripts/`, or `assets/`.

## Usage

List published skills:

```bash
npx @ghiffaribraviah/skill-set list ghiffaribraviah/skill-set
```

Install one skill:

```bash
npx @ghiffaribraviah/skill-set add ghiffaribraviah/skill-set cdd
```

Install all published skills:

```bash
npx @ghiffaribraviah/skill-set add ghiffaribraviah/skill-set
```

Install from a branch, tag, or commit:

```bash
npx @ghiffaribraviah/skill-set add ghiffaribraviah/skill-set#main cdd
```

## Install Behavior

Installed skills are copied into the target repository:

```text
.agents/skills/<skill-name>/
```

Install metadata is written to:

```text
.agents/skills-lock.json
```

If an installed skill has local changes, the CLI refuses to overwrite it. Use `--force` when you intentionally want to replace the local copy.

```bash
npx @ghiffaribraviah/skill-set add ghiffaribraviah/skill-set cdd --force
```

The CLI does not modify `AGENTS.md`, `CLAUDE.md`, or other agent instruction files.

## Development

Run syntax checks:

```bash
npm run check
```

Run the local smoke test:

```bash
npm run smoke
```

Preview the npm package contents:

```bash
npm pack --dry-run
```
