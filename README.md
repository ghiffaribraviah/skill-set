# Skill Set

This repository is my personal agent skill collection. It exists to collect, study, modify, and grow the skills I want to use across my daily work.

The output of this repo is not a public marketplace or a generic skill pack. The output is a private set of practical agent skills that I can install into other repositories when I want those agents to work with the same habits, workflows, and project conventions.

## Purpose

This repo is a working collection for:

- keeping reference-installed skills in one place
- modifying existing skills to fit my workflow
- creating new skills from patterns I use repeatedly
- tracking where skills came from and how they change
- installing curated private skills into other repos

Some skills may be original. Others may be modified versions of existing skills. The important thing is that each skill earns its place by being useful in my daily agent workflow.

## Repository Shape

Curated Daily Skills live under:

```text
skills/
```

Reference-installed skills and upstream source material live under:

```text
.agents/skills/
```

The skills under `.agents/skills/` are not installable output from this repo. They are working material for learning from existing skill structure and deciding which skills should become part of my daily set.

The installable catalog is declared in:

```text
install-manifest.json
```

That manifest is the source of truth for which Daily Skills can be installed into other repositories.

Source metadata is tracked in:

```text
skills-lock.json
```

That file records where installed skills came from and helps preserve provenance when a skill is copied from, modified from, or inspired by an upstream source.

## Installation Goal

The installer is private and similar in spirit to `skills.sh`: from another repository, I can discover and install selected skills from this collection without publishing the collection publicly.

The target flow is:

1. Keep this repository private.
2. Select one or more Daily Skills from `install-manifest.json`.
3. Install those skills into another repo's `.agents/skills/` directory.
4. Use those skills from that repo's agent environment.

## Private Installer

This repo includes a small private installer for curated Daily Skills:

```bash
npx github:ghiffaribraviah/skill-set list
npx github:ghiffaribraviah/skill-set install grilling
npx github:ghiffaribraviah/skill-set install prototyping --target /path/to/repo
```

The installer reads `install-manifest.json`, copies the whole skill directory into the target repo's `.agents/skills/` directory, and applies the private `hoohkun-` namespace:

```text
.agents/skills/hoohkun-grilling/
.agents/skills/hoohkun-prototyping/
.agents/skills/hoohkun-skills-lock.json
```

It refuses to replace an existing private skill directory unless `--force` is passed. The private lockfile is intentionally separate from public `skills.sh` lockfiles so private installs can coexist with skills installed from the public ecosystem.

## Installable Skills

These are the current Daily Skills exposed by `install-manifest.json`:

| Skill | Installed as | Group | What it does |
| --- | --- | --- | --- |
| `grilling` | `hoohkun-grilling` | `engineering/planning` | Challenges a plan against the repo's domain language and docs, asks design questions in dependency order, and records resolved terms in `CONTEXT.md`. |
| `prototyping` | `hoohkun-prototyping` | `engineering/planning` | Builds temporary logic, UI, or workflow prototypes so options are concrete before choosing a direction. |

Run this to see the manifest-backed list from the CLI:

```bash
npx github:ghiffaribraviah/skill-set list
```

## What Belongs Here

This repo should contain skills that are worth reusing across projects, especially when they encode:

- engineering workflows I want agents to follow
- diagnosis, review, planning, or implementation habits
- project setup conventions
- documentation and issue-management workflows
- opinionated agent behavior that I want to carry between repos

Skills that are one-off, project-specific, or experimental should only stay here if they are likely to become reusable.

## Privacy

This is a private personal skill source. It may contain preferences, workflows, and modified skill material that are intended for my own repos, not for public distribution.
