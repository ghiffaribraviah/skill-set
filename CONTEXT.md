# Skill Set

This repository is a personal collection for shaping, storing, and reusing agent skills across other repositories.

## Language

**Agent Skill Collection**:
A personal repository of agent skill instructions and supporting files used to build a reusable daily workflow.
_Avoid_: skill library, skill marketplace

**Reference Skill**:
An installed upstream skill kept in this repository as source material for learning, modification, or reuse.
_Avoid_: final skill, published skill

**Daily Skill**:
A skill in this collection that the owner expects to use regularly across work.
_Avoid_: example skill, demo skill

**Daily Skill Category**:
A top-level domain grouping for curated Daily Skills.
_Avoid_: temporary folder, reference folder

**Engineering Skill Group**:
A job-oriented subgroup inside the engineering Daily Skill Category.
_Avoid_: lifecycle phase, implementation stage

**Working Collection**:
A repository state where skills are curated, studied, modified, and prepared before being reused elsewhere.
_Avoid_: polished skill pack, package registry

**Private Skill Source**:
A private installable source for selected skills that can be used from other repositories without publishing the collection publicly.
_Avoid_: public marketplace, open registry

**Installer Experience**:
A `skills.sh`-style flow for discovering and installing selected skills from the private collection into another repository.
_Avoid_: manual copy instructions as the primary workflow

**Repo-Local Installer**:
An installer command that lives inside this private repository and installs Daily Skills into another repository without requiring a separately published package.
_Avoid_: npm package, public CLI

**Install Manifest**:
A curated catalog that declares which Daily Skills are installable and where their source directories live.
_Avoid_: lockfile, filesystem scan as source of truth

**Skill Source Directory**:
The complete directory for one Daily Skill, including `SKILL.md` and any supporting files it references.
_Avoid_: standalone skill file

**Protected Skill Install**:
An installer behavior that refuses to replace an existing target skill directory unless the user explicitly opts into replacement.
_Avoid_: silent overwrite

**Target Install Record**:
A lockfile in a target repository that records which Daily Skills were installed from the Private Skill Source.
_Avoid_: reference provenance lockfile

**Private Install Namespace**:
A target-repository naming convention that prefixes private installed skill directories so they do not collide with skills installed from public ecosystems.
_Avoid_: public skill namespace, unprefixed install name

**Installed Skill Name**:
The skill name written into the target repository after applying the Private Install Namespace.
_Avoid_: source skill name

**Source Skill Name**:
The unprefixed Daily Skill name used inside the Agent Skill Collection while authoring and curating skills.
_Avoid_: installed skill name

**Project Skill Target**:
The target repository's project-local `.agents/skills/` directory where private Daily Skills are installed.
_Avoid_: global skill install, agent-specific target matrix

**Daily Skill Dependency**:
A declared relationship where installing one Daily Skill also requires installing another Daily Skill first.
_Avoid_: package dependency resolver

**Local Planning Workflow**:
A markdown-file-based workflow for PRDs, issues, and triage inside the repository.
_Avoid_: GitHub Issues clone, remote issue tracker

**Proof Model**:
The primary kind of evidence a development skill uses to decide whether work is done.
_Avoid_: test strategy, validation method

**Prototyping Skill**:
A Daily Skill for creating exploratory, throwaway artifacts that help the user compare possibilities before committing to an implementation direction.
_Avoid_: prototype Reference Skill, production implementation skill

**Prototype Option Shape**:
A reusable presentation shape that makes exploratory options consistent enough for the user to compare.
_Avoid_: restrictive workflow branch, implementation rule

**Skill Workflow Prototype**:
A Prototype Option Shape for exploring how an agent skill should behave during a session, usually through example prompts, expected agent behavior, and user decision points.
_Avoid_: production skill implementation, static documentation only

**Session Behavior**:
The observable way an agent skill conducts a user session, including when it asks questions, when it acts, what artifacts it creates, how it reports progress, and where it records decisions.
_Avoid_: prose quality, static skill text

**Way of Working**:
A process, collaboration style, planning flow, handoff flow, or agent behavior pattern that can be compared before being adopted.
_Avoid_: UI layout, business state model

**Workflow Prototype Trace**:
A temporary workspace artifact that presents multiple Skill Workflow Prototype options against the same scenario so their Session Behavior can be compared.
_Avoid_: durable documentation, final skill docs, new skill, implementation checklist

**Workflow Prototype Template**:
A reusable template inside the Prototyping Skill directory that defines how Workflow Prototype Traces should be written.
_Avoid_: completed workflow trace, generated prototype output

**Prototype Shape Selector**:
The top-level Prototyping Skill instruction that chooses between logic, UI, and workflow Prototype Option Shapes before delegating to the relevant template.
_Avoid_: workflow template, branch implementation

## Relationships

- An **Agent Skill Collection** contains **Reference Skills**.
- A **Reference Skill** may become or inform a **Daily Skill**.
- A **Daily Skill** can be installed into another repository.
- A **Daily Skill** belongs to exactly one **Daily Skill Category**.
- An engineering **Daily Skill** belongs to exactly one **Engineering Skill Group**.
- Empty **Daily Skill Categories** may exist as placeholders before their skill inventories are planned.
- This repository is a **Working Collection** before it is a distributable skill pack.
- A **Private Skill Source** exposes selected **Daily Skills** through an **Installer Experience**.
- A **Private Skill Source** does not expose **Reference Skills** as installable output.
- The first **Installer Experience** should be a **Repo-Local Installer** before any separate package is considered.
- An **Install Manifest** is the source of truth for which **Daily Skills** are installable.
- An **Install Manifest** entry points to a **Skill Source Directory**.
- The **Installer Experience** copies the whole **Skill Source Directory**, not just `SKILL.md`.
- The **Installer Experience** uses **Protected Skill Install** behavior by default.
- The **Installer Experience** writes a **Target Install Record** in the target repository.
- The **Installer Experience** uses a **Private Install Namespace** for target skill directories.
- The **Private Install Namespace** prefix is `hoohkun-`.
- A **Source Skill Name** stays unprefixed inside this repository.
- The **Installed Skill Name** must use the same `hoohkun-` prefix as the installed target directory.
- The **Installer Experience** transforms a **Source Skill Name** into an **Installed Skill Name** during installation.
- The first **Installer Experience** installs only into the **Project Skill Target**.
- A **Target Install Record** uses `hoohkun-skills-lock.json` so it does not conflict with public skills.sh lockfiles.
- The **Install Manifest** may declare simple **Daily Skill Dependencies**.
- **Daily Skill Dependencies** install before the selected **Daily Skill** and should fail clearly on missing names or cycles.
- `skills-lock.json` records provenance for **Reference Skills** and does not define installable output.
- A source repository `skills-lock.json` records **Reference Skill** provenance, while a target repository **Target Install Record** uses a private filename for private install state.
- Workflow-management **Daily Skills** use a **Local Planning Workflow** as their native issue tracker.
- Repository-initialization **Daily Skills** belong under the workflow **Engineering Skill Group**.
- `tdd` and `gdd` are peer development **Daily Skills** with different **Proof Models**.
- Debugging **Daily Skills** belong under the maintenance **Engineering Skill Group** unless they grow into a broader family.
- Codebase-documentation **Daily Skills** belong under the maintenance **Engineering Skill Group** unless documentation grows into a broader family.
- The **Prototyping Skill** is a **Daily Skill** informed by the `prototype` **Reference Skill**, not a direct rename of the reference.
- The **Prototyping Skill** uses **Prototype Option Shapes** so agents present exploratory alternatives consistently.
- **Skill Workflow Prototype** is a third canonical **Prototype Option Shape** for agent-skill behavior, alongside logic and UI prototypes.
- The **Prototyping Skill** belongs under the planning **Engineering Skill Group**.
- A **Skill Workflow Prototype** compares **Session Behavior** by running the same user scenario through different workflow options.
- A **Workflow Prototype Trace** is the canonical artifact for a **Skill Workflow Prototype**.
- A **Workflow Prototype Trace** contains 2-4 options that differ meaningfully in **Session Behavior**, not merely wording.
- A **Workflow Prototype Trace** never creates or modifies skill files; it is a temporary workspace for comparing workflow options.
- A **Workflow Prototype Template** belongs inside the **Prototyping Skill** directory and guides how temporary **Workflow Prototype Traces** are written.
- A **Skill Workflow Prototype** follows the same lifecycle as UI and logic prototypes: keep only the answer, then delete or absorb the temporary trace.
- Temporary **Workflow Prototype Traces** follow the same placement rule as UI and logic prototypes: locate them close to the thing being explored and mark them clearly as prototypes.
- The **Prototype Shape Selector** belongs in the Prototyping Skill's top-level `SKILL.md`; `WORKFLOW.md` only defines the workflow-prototype shape.
- The **Prototype Shape Selector** chooses **Skill Workflow Prototype** when the user is comparing a **Way of Working**.

## Example dialogue

> **Dev:** "Are the skills under `.agents/skills` the final output?"
> **Domain expert:** "No. They are **Reference Skills** installed here so I can shape this **Agent Skill Collection** and produce **Daily Skills** from it."
>
> **Dev:** "Should I copy the skill directories by hand?"
> **Domain expert:** "Not as the main workflow. I want an **Installer Experience** like `skills.sh`, but backed by this private repo."
>
> **Dev:** "Should final skills live under `.agents/skills`?"
> **Domain expert:** "No. `.agents/skills` contains **Reference Skills**. Curated **Daily Skills** live under **Daily Skill Categories** such as `skills/engineering`, `skills/research`, and `skills/misc`."
>
> **Dev:** "If I install `diagnose` from another repo, should it install the reference copy from `.agents/skills`?"
> **Domain expert:** "No. The **Installer Experience** installs the curated **Daily Skill** only; **Reference Skills** stay internal to this **Working Collection**."
>
> **Dev:** "Should the first installer be a private npm package?"
> **Domain expert:** "No. Start with a **Repo-Local Installer** inside this private repo, then consider packaging only after the installer behavior is proven."
>
> **Dev:** "Can the installer just scan every `SKILL.md` under `skills/`?"
> **Domain expert:** "No. The **Install Manifest** decides which **Daily Skills** are installable; finding a file on disk is not enough."
>
> **Dev:** "Should installation copy only `SKILL.md`?"
> **Domain expert:** "No. A **Daily Skill** installs as its whole **Skill Source Directory** so supporting files stay available."
>
> **Dev:** "If the target repo already has the skill, should the installer replace it?"
> **Domain expert:** "No. Use **Protected Skill Install** behavior by default and require an explicit replacement option later."
>
> **Dev:** "Should installing a skill only copy files?"
> **Domain expert:** "No. It should also update the target repo's **Target Install Record** so installed **Daily Skills** can be traced back to this **Private Skill Source**."
>
> **Dev:** "Can private installs use the same directory names and lockfile as skills.sh installs?"
> **Domain expert:** "No. Use a **Private Install Namespace** and a private **Target Install Record** filename so private installs can coexist with public skill installs."
>
> **Dev:** "What should the private target lockfile be called?"
> **Domain expert:** "Use `hoohkun-skills-lock.json` for the **Target Install Record**."
>
> **Dev:** "Should the installed directory be `hoohkun-grill-with-docs` but the skill still be named `grill-with-docs`?"
> **Domain expert:** "No. The **Installed Skill Name** should also be `hoohkun-grill-with-docs` so agent discovery and the filesystem agree."
>
> **Dev:** "Should source skills in this repo also be named with the `hoohkun-` prefix?"
> **Domain expert:** "No. Keep the **Source Skill Name** unprefixed and let the installer apply the **Private Install Namespace** in target repos."
>
> **Dev:** "Should v1 support global installs and every agent-specific skill path?"
> **Domain expert:** "No. Start with the project-local **Project Skill Target** only."
>
> **Dev:** "Should the installer understand dependencies between skills?"
> **Domain expert:** "Only simply. The **Install Manifest** may declare **Daily Skill Dependencies**, but the installer should just install them first and fail clearly on invalid dependency graphs."
>
> **Dev:** "Is `planning` an implementation phase?"
> **Domain expert:** "No. It is an **Engineering Skill Group** based on the job I need the agent to do."
>
> **Dev:** "Should `research` and `misc` get skill plans now?"
> **Domain expert:** "No. They stay as placeholder **Daily Skill Categories** until their own planning sessions."
>
> **Dev:** "Should `to-prd`, `to-issues`, and `triage` behave like GitHub Issues?"
> **Domain expert:** "No. They should use a **Local Planning Workflow** with markdown files as the native model."
>
> **Dev:** "Where does `initial-setup` belong?"
> **Domain expert:** "It belongs under workflow because it initializes a repository so the other **Daily Skills** know how to operate there."
>
> **Dev:** "Is `gdd` the wrapper around `tdd`?"
> **Domain expert:** "No. `gdd` and `tdd` are peer **Daily Skills** with different **Proof Models**."
>
> **Dev:** "Should debugging have its own engineering group?"
> **Domain expert:** "No. `diagnose` belongs under maintenance until debugging becomes a broader skill family."
>
> **Dev:** "Should documentation be its own engineering group?"
> **Domain expert:** "No. codebase documentation belongs under maintenance until documentation becomes a broader skill family."

> **Dev:** "Should `prototyping` directly replace the installed `prototype` skill?"
> **Domain expert:** "No. `prototype` remains the **Reference Skill**; **Prototyping Skill** is the curated **Daily Skill** shaped from it."
>
> **Dev:** "Are the reference skill's branches restrictions on exploration?"
> **Domain expert:** "No. They are **Prototype Option Shapes** that keep the agent's alternatives comparable for the user."
>
> **Dev:** "Do Prototyping Skill options only cover app logic and UI?"
> **Domain expert:** "No. Because this collection designs agent skills, it also needs **Skill Workflow Prototype** for exploring session behavior."
>
> **Dev:** "Where does the Prototyping Skill belong?"
> **Domain expert:** "It belongs under planning because it helps choose a direction before implementation."
>
> **Dev:** "What does a Skill Workflow Prototype compare?"
> **Domain expert:** "It compares **Session Behavior**: how different workflow options handle the same realistic user scenario."
>
> **Dev:** "What artifact should a Skill Workflow Prototype produce?"
> **Domain expert:** "A **Workflow Prototype Trace**: one markdown file containing comparable workflow options for the same scenario."
>
> **Dev:** "How different should workflow prototype options be?"
> **Domain expert:** "They should differ meaningfully in **Session Behavior**, such as when the agent asks, acts, records decisions, or hands work back."
>
> **Dev:** "Does a Skill Workflow Prototype create or update a SKILL.md?"
> **Domain expert:** "No. It never creates or modifies skill files; it produces a temporary **Workflow Prototype Trace**."
>
> **Dev:** "Where does the workflow prototype format live?"
> **Domain expert:** "The reusable format lives as a **Workflow Prototype Template** in the Prototyping Skill directory; generated traces are temporary workspace artifacts."
>
> **Dev:** "Is the Workflow Prototype Trace worth keeping after the prototype is done?"
> **Domain expert:** "No. Like UI and logic prototypes, the trace is temporary; only the answer should be kept."
>
> **Dev:** "Where should temporary Workflow Prototype Traces live?"
> **Domain expert:** "Use the same rule as UI and logic prototypes: place them close to the thing being explored and mark them clearly as prototypes."
>
> **Dev:** "Should WORKFLOW.md choose between logic, UI, and workflow prototypes?"
> **Domain expert:** "No. The top-level **Prototype Shape Selector** chooses the shape; `WORKFLOW.md` only defines the workflow-prototype template."
>
> **Dev:** "When should the Prototyping Skill use a Skill Workflow Prototype?"
> **Domain expert:** "When the user wants to compare a **Way of Working**, such as agent behavior, process design, planning flow, collaboration style, or handoff flow."

## Flagged ambiguities

- "skills under `.agents/skills`" could mean final output skills or installed reference skills — resolved: they are **Reference Skills** for building this repository and its daily skill set.
- "skill collection" could imply a polished distributable pack — resolved: this repository is a **Working Collection** first, with selected **Daily Skills** installable into other repositories.
- "install" could mean manually copying folders or using an installer — resolved: the desired long-term workflow is a private `skills.sh`-style **Installer Experience**.
- "installable skill" could mean either a curated **Daily Skill** or its upstream **Reference Skill** — resolved: only **Daily Skills** are installable output.
- "private installer" could imply publishing a private package — resolved: begin with a **Repo-Local Installer** in this repository.
- "installed skills list" could mean the provenance lockfile or the public install catalog — resolved: use an **Install Manifest** for installability and keep `skills-lock.json` for provenance.
- "install a skill" could mean copying a single `SKILL.md` — resolved: install the whole **Skill Source Directory**.
- "install over existing skill" could imply silently replacing local target changes — resolved: use **Protected Skill Install** behavior by default.
- "`skills-lock.json`" could mean source-repo reference provenance or target-repo install state — resolved: reserve it for source-repo provenance here and use a private **Target Install Record** filename for private installs.
- "installed skill record" could imply copying this repo's provenance lockfile into the target — resolved: create a target-specific **Target Install Record** instead.
- "private install name" could imply using the same target directory as a public skills.sh skill — resolved: private installs use a **Private Install Namespace**.
- "installed skill name" could imply keeping the source **Daily Skill** name in the target repo — resolved: the **Installed Skill Name** includes the `hoohkun-` prefix.
- "source skill name" could imply the same value as the target **Installed Skill Name** — resolved: source names stay unprefixed and target names are prefixed.
- "install target" could imply global installs or agent-specific paths — resolved: v1 installs only to the project-local **Project Skill Target**.
- "target lockfile" could imply writing public `skills-lock.json` — resolved: private installs use a private **Target Install Record** filename.
- "skill dependency" could imply full package-manager semantics — resolved: **Daily Skill Dependencies** are simple install-order relationships.
- "engineering/research/misc" could mean temporary work areas or final groupings — resolved: they are canonical **Daily Skill Categories** under `skills/`.
- "research/misc" could imply active skill inventories — resolved: they are placeholders until their own planning sessions.
- "planning/workflow/development/maintenance" could mean lifecycle phases — resolved: they are job-oriented **Engineering Skill Groups** under `skills/engineering/`.
- "workflow management" could imply GitHub Issues — resolved: workflow-management **Daily Skills** are local-markdown-native through the **Local Planning Workflow**.
- "initial setup" could mean installing this skill collection itself — resolved: `initial-setup` initializes a target repository for using the **Daily Skills**.
- "gdd" could mean a broad wrapper around all development work — resolved: `gdd` is a peer of `tdd`, distinguished by **Proof Model**.
- "debugging" could imply a separate engineering group — resolved: debugging starts under maintenance through `diagnose`.
- "documentation" could imply a separate engineering group — resolved: codebase documentation starts under maintenance.
- "`prototype` vs `prototyping`" could imply renaming the installed reference — resolved: keep `prototype` as the **Reference Skill** and use **Prototyping Skill** for the curated **Daily Skill**.
- "prototype branches" could imply restrictions on exploration — resolved: they are **Prototype Option Shapes** for consistent user-facing comparison.
- "prototype options" could imply only logic or UI artifacts — resolved: **Skill Workflow Prototype** is also canonical for agent-skill behavior.
- "prototyping" could imply development or maintenance work — resolved: **Prototyping Skill** belongs under the planning **Engineering Skill Group**.
- "workflow prototype" could imply rewriting skill prose — resolved: it compares **Session Behavior** through scenario-based dry runs.
- "workflow prototype artifact" could imply runnable code or skill-file edits — resolved: use a temporary **Workflow Prototype Trace**.
- "workflow options" could imply minor copy variations — resolved: options must differ meaningfully in **Session Behavior**.
- "workflow prototype output" could imply creating another skill — resolved: a **Workflow Prototype Trace** is temporary workspace, not a new or modified skill.
- "`WORKFLOW.md`" could imply a completed workflow plan — resolved: inside the Prototyping Skill it is a **Workflow Prototype Template**, while generated traces are temporary.
- "workflow prototype trace" could imply a durable planning document — resolved: it follows the UI/logic prototype lifecycle; only the answer is durable.
- "workflow trace location" could imply a separate docs bucket — resolved: use the same close-to-context placement rule as UI and logic prototypes.
- "`WORKFLOW.md` scope" could imply owning the shape-selection decision — resolved: the top-level **Prototype Shape Selector** chooses logic, UI, or workflow.
- "workflow prototype trigger" could imply any markdown planning task — resolved: use it specifically when comparing a **Way of Working**.
