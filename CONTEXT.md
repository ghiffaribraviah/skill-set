# Skill Set

This context defines the language for designing agent skills in this repository.

## Language

**Skill Catalog**:
A repository that publishes one or more installable agent skills from its `skills/` directory.
_Avoid_: Single-skill repo, skill dump

**Published Skill**:
An agent skill in the **Skill Catalog** that is intended to be installed into another repository or agent environment.
_Avoid_: Local-only skill, repo's skill in skills

**Skill Catalog CLI**:
The npm-distributed command surface used to install **Published Skills** from a **Skill Catalog** into another repository.
_Avoid_: Generic skills command, manual copy workflow

**Catalog Source**:
The GitHub repository identifier that tells the **Skill Catalog CLI** which **Skill Catalog** to install from.
_Avoid_: Package name, registry name

**Installed Skill**:
A copy of a **Published Skill** placed into a target repository's agent skill directory for local use.
_Avoid_: Vendored source skill, downloaded file

**Skill Install Directory**:
The `.agents/skills/<skill-name>/` directory in a target repository where an **Installed Skill** lives.
_Avoid_: Root skills directory, global agent directory

**Skill Install Lockfile**:
The `.agents/skills-lock.json` file in a target repository that records installed skill source metadata.
_Avoid_: Root lockfile, package lock

**CDD Skill**:
A frontend implementation skill that guides an agent from UI/UX request intake through context gathering, component-state discovery, implementation, and verification.
_Avoid_: Visual TDD skill, Storybook-dependent skill

**CDD Trigger**:
A request boundary where the **CDD Skill** applies to frontend UI/UX implementation work with user-visible behavior or appearance.
_Avoid_: Any frontend code change

**CDD Non-Trigger**:
A request boundary where the **CDD Skill** should not apply because there is no concrete user-visible UI/UX implementation slice.
_Avoid_: Routing all frontend work to CDD

**Component State Inventory**:
The explicit set of meaningful UI states a frontend change must handle and verify.
_Avoid_: Test list, edge-case dump

**CDD Question Rule**:
The rule that the **CDD Skill** asks the user only for user-facing decisions that cannot be inferred from local context or provided references.
_Avoid_: Ask-first workflow, preference polling

**Design Reference Level**:
The degree of available product or visual guidance for a frontend implementation request.
_Avoid_: Figma requirement

**Vertical UI Slice**:
One implementable frontend increment that combines a component boundary, one or a few related states, and enough composition context to verify user-visible behavior.
_Avoid_: Whole-page batch, all-states-first pass

**UX Flow Slice**:
A **Vertical UI Slice** focused on user-visible interaction states and transitions across a small flow.
_Avoid_: Static-only CDD, whole-flow batching

**CDD Decomposition Rule**:
The rule that frontend UI is split by state ownership, reuse pressure, and readability pressure rather than by arbitrary taxonomy.
_Avoid_: Atomic Design checklist

**Inspectable State Artifact**:
A concrete artifact that makes one or more component states visible, repeatable, and reviewable outside the developer's memory.
_Avoid_: Mental model only, implicit route-only state

**CDD Preview Harness**:
A dependency-free, repo-local preview surface created or adapted by the **CDD Skill** to inspect a **Vertical UI Slice**.
_Avoid_: Installed Storybook, external component explorer dependency

**Harness**:
The canonical short name for a **CDD Preview Harness** when discussing the slice loop.
_Avoid_: Story, fixture-only, vague preview

**Harness Guidance**:
Skill-provided, technology-neutral guidance for creating a **CDD Preview Harness** using the repo's existing frontend stack and conventions.
_Avoid_: HTML-only template, framework-specific requirement

**Native Preview Surface**:
The lowest-friction repo-native place to render and inspect a frontend slice.
_Avoid_: Parallel mini-framework

**Minimal Render Environment**:
The smallest repo-native runtime that can render and inspect the target **Vertical UI Slice**.
_Avoid_: Whole-app server by default

**Temporary Harness Marker**:
A repo-conventional name, location, or short comment that makes temporary preview scaffolding obvious.
_Avoid_: Hidden scaffolding, imposed naming convention

**CDD Verification Gate**:
The slice-level checks required before a **Vertical UI Slice** is considered complete.
_Avoid_: Code-only completion

**Visual Verification**:
Screenshot-based or browser-rendered inspection that confirms a frontend slice looks correct in relevant states and viewports.
_Avoid_: Trusting implementation without rendering

**Visual Verification Tier**:
The level of visual evidence required for a frontend change based on risk and reuse.
_Avoid_: Always automate screenshots, never capture screenshots

**Visual Reference**:
A supplied or discovered visual target used to judge whether a frontend slice looks correct.
_Avoid_: Subjective inspection only

**Visual Comparison Standard**:
The rule for judging rendered output against a **Visual Reference** by intent and design-system consistency unless pixel precision is required.
_Avoid_: Pixel-perfect by default, vibes-only comparison

**Human Verification Checkpoint**:
A required handoff where the user reviews rendered UI evidence before the **CDD Skill** treats UI/UX work as finished.
_Avoid_: Agent-only visual approval, blocking forever when no user is available

**Verification Packet**:
The concrete evidence and review instructions provided to the user at a **Human Verification Checkpoint**.
_Avoid_: Please check it, formal report template

**AFK Verification Mode**:
The fallback mode where no user is available to review UI/UX output during the current run.
_Avoid_: Pretending human approval happened

**CDD Completion State**:
The status of a frontend implementation as either ready for human verification or complete after acceptance.
_Avoid_: Done before review

**CDD Review Boundary**:
A point where the **CDD Skill** stops implementation progress and asks for human verification before continuing.
_Avoid_: Approval after every tiny subcomponent, approval only at the very end

**Verification Dependency Rule**:
The rule that the **CDD Skill** recommends new visual or testing dependencies before installing them.
_Avoid_: Automatic dependency installation

**CDD Stop-And-Ask Rule**:
The short list of decisions where the **CDD Skill** pauses for user input before continuing.
_Avoid_: Asking for inferable repo details, silently making product decisions

**Scoped Accessibility Check**:
A baseline accessibility review applied to each frontend slice without claiming a full compliance audit.
_Avoid_: Accessibility only on request, full WCAG promise

**Conservative Design Quality Rule**:
The rule that the **CDD Skill** enforces frontend execution quality while preserving the product's existing visual direction.
_Avoid_: New style direction by default, visual polish as optional

**Project Design Language Check**:
A mapping step that inspects and reuses the project's established UI primitives, tokens, styling conventions, and interaction patterns.
_Avoid_: Ad hoc styling, stack-specific prescription

**Content Pressure Check**:
A review of whether a frontend slice handles realistic copy, data volume, and missing content without breaking the UI.
_Avoid_: Ideal-copy-only implementation

**Supported Target Check**:
A browser and viewport check scoped to the project's supported devices and browsers.
_Avoid_: Exhaustive cross-browser testing by default

**CDD Test Rule**:
The rule that tests are added when they protect objective frontend behavior or high-risk visual behavior.
_Avoid_: Test coverage ritual, brittle styling tests

**CDD Documentation Rule**:
The rule that documentation artifacts are created only when they help future UI implementation, review, or reuse.
_Avoid_: Heavy docs for one-off UI changes

**CDD Reference Set**:
The bundled progressive-disclosure documents that support the **CDD Skill** without making `SKILL.md` too large.
_Avoid_: Monolithic skill file

**CDD Writing Session Scope**:
The rule that the main `SKILL.md` writing plan is grilled separately from each reference file.
_Avoid_: Planning all reference prose in one session

**Preview Harness Reference Shape**:
The writing shape for `references/preview-harness.md` as a short tactical guide for repo-native slice inspection surfaces.
_Avoid_: Framework recipe catalogue, tooling-first guide

**Harness Reference Opening**:
The opening definition for `references/preview-harness.md`.
_Avoid_: Harness as new file requirement

**Harness Decision Ladder**:
The preferred order for choosing the smallest inspection surface in `references/preview-harness.md`.
_Avoid_: Creating scaffolding before checking existing surfaces

**Harness Example Style**:
The example style for `references/preview-harness.md`, using abstract examples rather than code.
_Avoid_: HTML example, framework-specific code example

**Temporary Harness Lifecycle Section**:
The short lifecycle guidance for temporary harnesses in `references/preview-harness.md`.
_Avoid_: Unmarked scaffolding, removing review surface too early

**Honest Harness Rule**:
The rule that a minimal harness must still represent the real UI state honestly.
_Avoid_: Polished mock that cannot fail like the real UI

**State Inventory Reference Shape**:
The writing shape for `references/state-inventory.md` as a compact guide for discovering meaningful UI states and turning them into vertical UI slices.
_Avoid_: Giant state checklist, upfront complete state model

**State Inventory Reference Opening**:
The opening definition for `references/state-inventory.md`.
_Avoid_: Complete page model

**State Discovery List**:
The compact category list in `references/state-inventory.md` for finding meaningful UI states.
_Avoid_: Mandatory all-states checklist

**State Inventory Decomposition Wording**:
The page and component decomposition guidance in `references/state-inventory.md`.
_Avoid_: Taxonomy-driven splitting, whole-surface implementation

**State Inventory Example Style**:
The tiny abstract example style used in `references/state-inventory.md`.
_Avoid_: Code example, exhaustive sample page

**Visual Verification Reference Shape**:
The writing shape for `references/visual-verification.md` as a practical guide for visual evidence and rendered-output comparison.
_Avoid_: Visual design QA manual, tool-specific command list

**Visual Verification Reference Opening**:
The opening definition for `references/visual-verification.md`.
_Avoid_: Trusting code/tests/screenshots alone

**Visual Evidence Tier Section**:
The concise three-tier evidence model in `references/visual-verification.md`.
_Avoid_: Automating every screenshot, skipping rendered inspection

**Visual Comparison Wording**:
The concise comparison-strictness guidance in `references/visual-verification.md`.
_Avoid_: Pixel-perfect by default, design checklist bloat

**Visual AFK Evidence Section**:
The AFK visual evidence guidance in `references/visual-verification.md`.
_Avoid_: False visual acceptance, report template

**Visual Rendering Blocked Section**:
The guidance for when rendering or screenshot capture is not feasible.
_Avoid_: Silently skipping visual verification

**Accessibility Reference Shape**:
The writing shape for `references/accessibility.md` as a scoped accessibility checklist for UI implementation slices.
_Avoid_: WCAG manual, legal/compliance guide

**Accessibility Reference Opening**:
The opening definition for `references/accessibility.md`.
_Avoid_: Full audit claim

**Accessibility Relevant Checks Section**:
The scoped checklist section in `references/accessibility.md`.
_Avoid_: Every-slice accessibility audit

**Accessibility High-Risk Section**:
The short high-risk interaction guidance in `references/accessibility.md`.
_Avoid_: Treating complex controls as simple visual slices

**Responsive Content Reference Shape**:
The writing shape for `references/responsive-content.md` as practical layout and content-pressure guidance.
_Avoid_: Responsive design manual, breakpoint recipe catalogue

**Responsive Content Reference Opening**:
The opening definition for `references/responsive-content.md`.
_Avoid_: Exhaustive device/content testing

**Responsive Viewport Section**:
The minimal viewport guidance in `references/responsive-content.md`.
_Avoid_: Breakpoint recipes, exhaustive device matrix

**Content Pressure Section**:
The practical content-shape checklist in `references/responsive-content.md`.
_Avoid_: Ideal content only, exhaustive data matrix

**Responsive Content Failures Section**:
The screenshot-inspection failure list in `references/responsive-content.md`.
_Avoid_: Vague visual inspection

**Testing Reference Shape**:
The writing shape for `references/testing.md` as a short guide for deciding when frontend tests are worth adding in CDD.
_Avoid_: Frontend testing tutorial, test-first doctrine

**Testing Reference Opening**:
The opening definition for `references/testing.md`.
_Avoid_: Test ritual, tests replacing visual review

**Test Behavior Section**:
The behavior-focused testing list in `references/testing.md`.
_Avoid_: Styling tests as default, component-exists tests

**Do Not Test By Ritual Section**:
The anti-bloat testing guidance in `references/testing.md`.
_Avoid_: Coverage-driven frontend tests

**Visual Accessibility Tests Section**:
The visual and accessibility testing guidance in `references/testing.md`.
_Avoid_: New test dependencies without approval

**CDD Skeleton Plan**:
The non-final `SKILL.md` outline produced at the end of the writing-focused grilling session.
_Avoid_: Full draft before section wording is resolved

**CDD References Section Shape**:
The short progressive-disclosure section that tells the agent when to load each reference file.
_Avoid_: Long reference summaries, eager reference loading

**CDD Ending Section Shape**:
The short prose section that explains completion, live user verification, and AFK verification mode.
_Avoid_: Formal report, false completion claim

**CDD Skill Literature Standard**:
The writing standard that makes the **CDD Skill** a clear operating philosophy plus actionable workflow rather than a checklist dump.
_Avoid_: Dry checklist, tool manual, copied TDD structure

**CDD Focus Rule**:
The writing rule that `SKILL.md` stays compact enough for an agent to follow under implementation pressure.
_Avoid_: Wall of policy, exhaustive checklist in main skill

**Stack-Neutral Writing Rule**:
The rule that the **CDD Skill** explains frontend method without implying a specific framework, styling system, testing tool, or language.
_Avoid_: Framework-specific main skill, stack examples as requirements

**CDD Example Rule**:
The rule that `SKILL.md` uses at most one tiny illustrative example and keeps scenario examples in references.
_Avoid_: Example-heavy main skill, stack overfitting

**Workflow-Not-Framework Rule**:
The rule that the **CDD Skill** defines a UI implementation workflow rather than a design or UX framework.
_Avoid_: Design-system manual, UX theory guide

**CDD Writing Shape**:
The prose-first structure for `SKILL.md`, using short checklists only where they improve execution.
_Avoid_: Compliance document, giant checklist

**CDD Opening Thesis**:
The one-sentence identity line under the `# Component-Driven Development` title, using "rendered states" rather than "component states".
_Avoid_: Long intro, no identity line

**CDD Body Language Rule**:
The rule that the skill body uses operational language rather than repeatedly naming the methodology.
_Avoid_: Repeating component-driven as explanation

**CDD Title Convention**:
The convention that the skill name is `cdd` while the document title uses the full human-readable name.
_Avoid_: `# CDD` as the main title

**Plain Discipline Voice**:
The writing voice for `cdd`: firm and procedural, but plain enough that terminology does not become a barrier.
_Avoid_: Soft guide, technical taxonomy

**CDD Philosophy Section Shape**:
The accepted prose pattern for the `cdd` philosophy section.
_Avoid_: Long manifesto, bullet-only philosophy

**CDD Description Style**:
The concise YAML description style for routing the `cdd` skill without packing in the whole methodology.
_Avoid_: Overloaded metadata description

**CDD Non-Trigger Section Shape**:
The short `When Not To Use` section style for keeping `cdd` routing precise.
_Avoid_: Defensive rulebook

**CDD Trigger Section Shape**:
The short `When To Use` section style for reminding the loaded agent of scope.
_Avoid_: Repeating the full YAML description

**CDD Mandatory Rules**:
The non-negotiable rules that belong in `SKILL.md` rather than only in references.
_Avoid_: Everything-is-mandatory skill text

**CDD Rules Section Shape**:
The constraint-only shape for the `Rules` section in `SKILL.md`.
_Avoid_: Repeating the operating loop

**CDD Scope Exclusion**:
Behavior that does not belong in the **CDD Skill** because it is platform orchestration rather than frontend methodology.
_Avoid_: Sub-agent policy inside CDD

**CDD Work Type**:
Whether a frontend request creates new UI or modifies existing UI, changing what the mapping phase emphasizes.
_Avoid_: Treating all UI work as greenfield

**CDD Philosophy**:
The belief that frontend correctness requires explicit component states, rendered visual evidence, accessible interaction, realistic content pressure, correct composition, and human acceptance.
_Avoid_: Code-only correctness, test-only correctness

**CDD Anti-Patterns**:
The named failure modes the **CDD Skill** warns against to prevent shallow or brittle frontend implementation.
_Avoid_: Generic warnings

**CDD Anti-Patterns Section Shape**:
The trimmed anti-pattern set used in `SKILL.md`.
_Avoid_: Exhaustive anti-pattern list

**CDD Section Order**:
The accepted top-level order for `SKILL.md`.
_Avoid_: Warning-first skill, scattered rules

**CDD Standalone Framing**:
The writing constraint that the **CDD Skill** stands on its own and does not promote another skill, even when it shares engineering discipline with test-driven workflows.
_Avoid_: Use `$tdd` for this, TDD sales pitch

**Progressive State Inventory**:
A rough-first **Component State Inventory** that is refined one **Vertical UI Slice** at a time.
_Avoid_: Complete upfront inventory, no inventory before coding

**CDD Operating Loop**:
The workflow where the agent maps the UI problem once, then repeats focused slice implementation steps.
_Avoid_: Re-mapping every slice, conflating agent checks with human verification

**Compose Step**:
The loop step where a slice is placed in the smallest parent or page context that proves it works with surrounding UI.
_Avoid_: Isolated component verification only

**Map Step Wording**:
The accepted wording pattern for the first operating-loop step.
_Avoid_: Blind assumptions, planning-heavy mapping

**Harness Step Wording**:
The accepted wording pattern for the operating-loop harness step.
_Avoid_: Stack-specific harness instructions, tooling-first wording

**Check Step Wording**:
The accepted wording pattern for the agent-run slice verification step.
_Avoid_: Bloated inline checklist, vague check wording

**Slice Check**:
The agent-run verification step for a **Vertical UI Slice** before continuing.
_Avoid_: Human approval, final verification

**Screenshot Evidence**:
Rendered image evidence included in a **Verification Packet** when it helps human review.
_Avoid_: Screenshot for every tiny slice, no visual evidence at review

**Design-System Slice**:
A **Vertical UI Slice** that changes reusable UI primitives or design-system conventions with broad downstream impact.
_Avoid_: Treating shared primitives like page-local UI

## Relationships

- A **Skill Catalog** contains one or more **Published Skills**
- The **CDD Skill** is the first **Published Skill** in this **Skill Catalog**
- The **Skill Catalog CLI** installs **Published Skills** from a **Catalog Source**
- An **Installed Skill** lives in a **Skill Install Directory**
- A **Skill Install Lockfile** records source metadata for **Installed Skills**

- A **CDD Skill** is used for frontend UI/UX implementation work.
- A **CDD Skill** may use stories, visual checks, interaction checks, accessibility checks, and codebase conventions as supporting artifacts.
- A **CDD Trigger** includes components, pages, layouts, visual states, interactions, responsive behavior, accessibility, Storybook stories, and design-system work.
- A **CDD Trigger** excludes purely non-visual frontend plumbing unless it changes user-visible UI/UX behavior.
- A **CDD Non-Trigger** includes backend-only work, frontend data plumbing with no user-visible UI/UX effect, frontend integration work with no concrete UI/UX implementation slice, pure test refactors, visual design exploration without implementation, broad design-system strategy without a concrete implementation slice, and content-only edits with no layout or interaction risk.
- A **CDD Skill** uses a **Component State Inventory** as its primary development artifact.
- A **Component State Inventory** may be expressed as a **CDD Preview Harness**, page fixture, Playwright route, screenshot-backed reference, or documented checklist depending on the repo.
- A **CDD Skill** follows the **CDD Question Rule** after reading relevant code, styles, stories, tests, screenshots, docs, and neighboring patterns.
- A **Design Reference Level** may be explicit, implicit, or weak.
- An explicit **Design Reference Level** includes Figma, screenshots, mockups, product specs, or existing pages.
- An implicit **Design Reference Level** uses nearby components, a design system, tokens, copy style, and layout conventions.
- A weak **Design Reference Level** requires conservative implementation from existing UI patterns and explicit assumptions.
- A **CDD Skill** implements one **Vertical UI Slice** at a time.
- A **Vertical UI Slice** may require decomposing a page into components or splitting a component into smaller components before implementation.
- A **UX Flow Slice** applies **Vertical UI Slice** discipline to multi-step forms, modal flows, dropdown or menu behavior, drag and drop, filtering, search, onboarding, and error recovery.
- A **UX Flow Slice** includes interaction states and transitions in the **Component State Inventory**.
- A **Component State Inventory** guides slicing, but the full inventory is not implemented in one batch.
- A **CDD Skill** follows the **CDD Decomposition Rule** before choosing a **Vertical UI Slice**.
- State ownership supports decomposition when a subpart has its own meaningful UI states.
- Reuse pressure supports decomposition when a subpart is reused elsewhere or likely to be reused immediately.
- Readability pressure supports decomposition when layout, state handling, and interaction logic are tangled.
- A **CDD Skill** requires an **Inspectable State Artifact** for each **Vertical UI Slice**.
- An **Inspectable State Artifact** may be a **CDD Preview Harness**, preview route, fixture, visual test, Playwright component test, design-system doc, screenshot-backed page state, or another repo-native equivalent.
- When no **Inspectable State Artifact** exists, the **CDD Skill** creates the lightest useful artifact for the current **Vertical UI Slice**.
- A **CDD Skill** does not install or depend on Storybook by default.
- A **CDD Skill** may create a temporary **CDD Preview Harness** when the repo lacks a better inspection surface.
- A temporary **CDD Preview Harness** may remain through a **Human Verification Checkpoint** when it helps review.
- A temporary **CDD Preview Harness** is removed after user acceptance when it was only implementation scaffolding.
- A temporary **CDD Preview Harness** is promoted or kept only when it becomes useful documentation, a reusable fixture, or a future visual check.
- A **CDD Preview Harness** is created using the repo's existing frontend stack and conventions.
- **Harness Guidance** can be stored in reusable skill references and must not assume a single implementation technology.
- A **CDD Skill** chooses a **Native Preview Surface** before creating a **CDD Preview Harness**.
- A **Native Preview Surface** may be an app route, development-only route, component preview module, static preview file, fixture page, visual-test fixture, or existing design-system/docs surface.
- A **CDD Skill** prefers a **Minimal Render Environment** for rendering and verification.
- A **Minimal Render Environment** may be a static preview, component module preview, fixture route, isolated test page, existing visible page state, or targeted dev route.
- Running the full frontend app is a fallback only when no smaller repo-native environment can render the slice accurately.
- A **CDD Skill** may create a temporary **Minimal Render Environment** when none exists for the target slice.
- A temporary **Minimal Render Environment** uses the repo's existing stack, stays scoped to the slice, avoids new dependencies, and follows the same keep-or-remove rule as a temporary **CDD Preview Harness**.
- Temporary **CDD Preview Harness** or **Minimal Render Environment** files use a **Temporary Harness Marker**.
- A **Temporary Harness Marker** follows existing repo conventions first, such as preview, fixture, dev-only route, or docs/example naming.
- A **Temporary Harness Marker** may be a short comment only when naming or location cannot make the temporary purpose clear.
- A **CDD Skill** uses **Harness** as canonical shorthand for the smallest repo-native way to render a slice state for inspection.
- The written **CDD Skill** defines **Harness** immediately when introducing the **CDD Operating Loop**.
- A **Harness** is a role played by the inspection surface, not necessarily a new file.
- An existing app route, test fixture, docs page, or already visible page state can serve as the **Harness** when it exposes the slice state clearly.
- A **CDD Skill** creates or adapts a **Harness** only when the target state is hard to reach, unstable, or needs controlled props or data.
- A **CDD Skill** applies a **CDD Verification Gate** before completing each **Vertical UI Slice**.
- A **CDD Verification Gate** includes state rendering, parent/page composition, relevant responsive checks, interaction behavior, accessibility checks, and existing regression checks when available.
- A **CDD Verification Gate** includes **Visual Verification** when the slice affects appearance, layout, or visible interaction state.
- **Visual Verification** may use screenshots, visual regression tests, browser inspection, or existing repo-native visual tooling.
- A **CDD Skill** chooses a **Visual Verification Tier** for each **Vertical UI Slice**.
- Tier 1 **Visual Verification** is rendered browser inspection or screenshot evidence for small local visual changes.
- Tier 2 **Visual Verification** is captured before/after screenshots for layout changes, responsive work, component variants, or UI changes that are hard to describe in text.
- Tier 3 **Visual Verification** is automated visual regression testing for reusable components, design-system work, high-risk layouts, regressions, or UI likely to change again.
- **Visual Verification** compares rendered output against available **Visual References**.
- A **Visual Reference** may be user-provided, discovered in the codebase, captured from the existing app, or derived from a neighboring pattern.
- A user-provided **Visual Reference** is inspected before implementation when available.
- Formal visual baselines are used when existing repo tooling supports them or when the slice qualifies for Tier 3 **Visual Verification**.
- A **CDD Skill** uses the **Visual Comparison Standard** during **Visual Verification**.
- The **Visual Comparison Standard** checks layout structure, spacing rhythm, typography hierarchy, color/token usage, component states, responsive behavior, interaction affordances, content fit, overflow, and accessibility-relevant visual cues.
- Pixel-perfect comparison is required only when the user asks for it, an exact design handoff requires it, or repo visual-regression thresholds define it.
- A **CDD Skill** always requests a **Human Verification Checkpoint** before finishing UI/UX implementation work.
- A **Human Verification Checkpoint** includes the strongest available rendered evidence, such as screenshots, preview URLs, changed preview states, or instructions for opening the **Native Preview Surface**.
- If browser rendering or screenshot capture is not feasible, the **CDD Skill** reports the limitation and still asks for human verification of the remaining visual risk.
- A **CDD Skill** uses **AFK Verification Mode** when no user is available for a **Human Verification Checkpoint**.
- In **AFK Verification Mode**, the **CDD Skill** gathers the strongest feasible rendered evidence, runs the appropriate checks, documents the review path concisely, and marks visual/product judgment as pending human review rather than complete.
- A **CDD Skill** provides a **Verification Packet** at every **Human Verification Checkpoint**.
- A **Verification Packet** identifies where to view the change, what changed, what to compare against, what states and viewports to inspect, what automated checks passed, and what remains subjective or unverified.
- A **Verification Packet** is concise review guidance, not a formal report.
- A **CDD Skill** reports a **CDD Completion State** before ending a UI/UX implementation turn.
- "Ready for human verification" means code is changed, checks were run where feasible, and a **Verification Packet** is prepared, but user visual approval is still pending.
- "Complete" means the user accepted the **Verification Packet**, or requested changes were made and accepted.
- A **CDD Skill** treats a UI/UX implementation task as complete only when the **CDD Completion State** is "Complete".
- A **CDD Skill** may end an implementation turn as "ready for human verification" but must not claim the UI/UX work is fully complete before user acceptance.
- In **AFK Verification Mode**, the **CDD Completion State** remains "ready for human verification" unless the surrounding workflow has an explicit acceptance mechanism.
- A **CDD Skill** implements one **Vertical UI Slice** at a time but chooses **CDD Review Boundaries** based on risk and repetition.
- A small change may have one **CDD Review Boundary** after all slices are implemented and internally verified.
- A large or ambiguous UI has a **CDD Review Boundary** after the first representative slice.
- Repeated variants have a **CDD Review Boundary** before applying one accepted pattern broadly.
- High-risk UX decisions create a **CDD Review Boundary** before continuing.
- A **CDD Skill** follows the **Verification Dependency Rule** before adding tools such as Playwright, screenshot libraries, or visual regression services.
- A **CDD Skill** may use existing browser automation, screenshot scripts, preview routes, and app servers without introducing new dependencies.
- When no frontend verification tooling exists, the **CDD Skill** creates the minimum repo-native verification path needed for the task.
- If adding a dependency would materially improve verification, the **CDD Skill** recommends it and waits for user approval before installation.
- A **CDD Skill** follows the **CDD Stop-And-Ask Rule** after inspecting repo context and references.
- The **CDD Stop-And-Ask Rule** pauses for user input when a user-facing product or design decision cannot be inferred, a dependency or new tool is being considered, a first representative slice needs approval before repetition, a **Visual Reference** conflicts with existing product conventions, accessibility behavior has multiple valid patterns, implementation would change broader design-system conventions, or the requested UI conflicts with existing domain or product language.
- The **CDD Stop-And-Ask Rule** does not pause for repo details the agent can discover.
- A **CDD Verification Gate** includes a **Scoped Accessibility Check** when accessibility is relevant to the slice.
- A **Scoped Accessibility Check** covers semantic elements, accessible control names, keyboard reachability, visible focus states, relevant labels and errors, image or icon alternatives, and obvious contrast or readability issues.
- High-risk interactive components such as modals, menus, dialogs, comboboxes, and forms treat accessibility as core behavior.
- A **Scoped Accessibility Check** does not claim a full WCAG audit unless the user asks or repo tooling supports it.
- A non-interactive visual-only slice does not require heavy accessibility work beyond obvious readability and semantics.
- A **CDD Skill** follows the **Conservative Design Quality Rule** during implementation and verification.
- The **Conservative Design Quality Rule** checks for overlapping text or controls, unintended clipping, responsive layout failures, inconsistent spacing or alignment, density-inappropriate typography, unfamiliar control affordances, indistinct UI states, and weak loading, empty, or error states.
- The **Conservative Design Quality Rule** prevents the **CDD Skill** from inventing a new visual style, palette, animation language, or branding direction unless the user asks.
- A **CDD Skill** performs a **Project Design Language Check** before creating new visual styling or UI primitives.
- A **Project Design Language Check** prefers established UI primitives, tokens, styling conventions, and interaction patterns over ad hoc styling.
- New styling primitives require a reason, especially in a **Design-System Slice**.
- A **CDD Verification Gate** includes a **Content Pressure Check** when copy or data affects layout.
- A **Content Pressure Check** covers short and long labels, empty copy, error messages, loading placeholders, localized or unusually long words when relevant, user-generated content, missing optional fields, large numeric values, and many-item versus few-item states.
- A **CDD Skill** may use conservative placeholder copy in a **CDD Preview Harness** but asks the user when copy changes product meaning or tone.
- A **CDD Verification Gate** includes a **Supported Target Check** when layout or interaction may vary by viewport or browser.
- A **Supported Target Check** uses project config or docs to infer supported browsers and devices when possible.
- When supported targets are not inferable, a **Supported Target Check** uses a conservative default of desktop and mobile responsive checks in a modern Chromium-like browser.
- High-risk layouts and components check at least one narrow and one wide viewport.
- Exhaustive cross-browser testing is required only when repo tooling supports it or the user asks.
- A **CDD Skill** follows the **CDD Test Rule** during implementation.
- The **CDD Test Rule** adds interaction tests for objective behavior such as clicking, submitting, keyboard navigation, validation messages, toggles, filtering, and disclosure state.
- The **CDD Test Rule** adds accessibility tests when repo tooling exists or the component is high-risk.
- The **CDD Test Rule** adds screenshot or visual tests for Tier 3 **Visual Verification**.
- The **CDD Test Rule** avoids brittle tests for pure styling details unless repo visual-regression tooling already covers them.
- The **CDD Test Rule** avoids mocking internals just to force frontend test coverage.
- A **CDD Skill** follows the **CDD Documentation Rule** during implementation.
- The **CDD Documentation Rule** allows component state inventories, preview harness notes, screenshot references, usage examples, design-system docs, and short comments for non-obvious UI behavior.
- The **CDD Documentation Rule** treats documentation and examples as part of the deliverable for reusable components and design-system primitives.
- The **CDD Documentation Rule** avoids heavy documentation for ordinary one-off UI changes.
- A **CDD Skill** uses a **CDD Reference Set** for detailed guidance.
- The **CDD Reference Set** includes guidance for preview harnesses, state inventories, visual verification, accessibility, responsive content, and testing.
- The **CDD Reference Set** keeps `SKILL.md` focused on trigger, workflow, and mandatory rules.
- The **CDD Reference Set** keeps browser and screenshot tactics out of `SKILL.md` unless needed.
- `references/visual-verification.md` owns tactics such as starting the app server, using existing screenshot scripts, using existing browser automation, capturing desktop and mobile screenshots, comparing references, and reporting unverified risks.
- `references/visual-verification.md` owns tactics for inspecting user-provided visual references, including layout, spacing, typography, color, state cues, interaction cues, ambiguity notes, side-by-side comparison, pixel-perfect exceptions, and conflicts with repo conventions.
- `SKILL.md` uses **CDD References Section Shape**.
- **CDD References Section Shape** uses `Reference Material` as the section title.
- **CDD References Section Shape** says to load references only when the current task needs extra detail and gives one-line triggers for preview harnesses, state inventories, visual verification, accessibility, responsive content, and testing.
- `SKILL.md` may link to all **CDD Reference Set** files only when those files are created in the same implementation pass.
- Each **CDD Reference Set** file should receive its own writing-focused grilling pass before implementation.
- **CDD Writing Session Scope** limits the current main-skill writing session to `SKILL.md` voice, philosophy, description, trigger and non-trigger wording, operating loop, anti-patterns, rules, ending semantics, and reference section style.
- **CDD Writing Session Scope** requires separate writing-focused grilling sessions for `preview-harness.md`, `state-inventory.md`, `visual-verification.md`, `accessibility.md`, `responsive-content.md`, and `testing.md`.
- `references/preview-harness.md` follows **Preview Harness Reference Shape**.
- **Preview Harness Reference Shape** explains when a harness is needed, how to choose an existing surface before creating a new one, how to keep it minimal, how to mark temporary harnesses, when to keep/remove/promote it, and how to avoid adding tooling or running the whole app by default.
- **Preview Harness Reference Shape** avoids stack-specific examples except tiny illustrative examples when necessary.
- `references/preview-harness.md` uses **Harness Reference Opening**.
- **Harness Reference Opening** defines a harness as the smallest repo-native way to render the slice state that needs inspection, and says it is a role rather than a file type.
- **Harness Reference Opening** states that an existing page state, parent component, fixture, preview route, docs example, or temporary scaffold can be the harness if it makes the state visible and repeatable.
- `references/preview-harness.md` uses **Harness Decision Ladder** as its core guidance.
- **Harness Decision Ladder** prefers existing visible page state, then existing parent component/fixture/docs/preview surface, then targeted route or local scaffold using the project's existing stack, then full app route only when smaller surfaces cannot represent the state accurately.
- **Harness Decision Ladder** says not to add new tooling just to create a harness and to recommend tooling only when the project repeatedly needs it and the user approves.
- `references/preview-harness.md` uses **Harness Example Style**.
- **Harness Example Style** allows short good/bad abstract examples and avoids HTML or framework-specific code examples.
- `references/preview-harness.md` includes **Temporary Harness Lifecycle Section**.
- **Temporary Harness Lifecycle Section** says temporary harnesses should be obvious through repo naming or location conventions, kept through review when useful, then removed after acceptance or promoted into a useful fixture, docs example, or visual check.
- **Temporary Harness Lifecycle Section** says not to leave unmarked scaffolding in product code.
- `references/preview-harness.md` includes **Honest Harness Rule**.
- **Honest Harness Rule** says a harness can be small but must use real project components, styling, data shapes, and parent context when they affect the result.
- **Honest Harness Rule** says not to verify a polished mock that cannot fail the same way the real UI would fail.
- `references/state-inventory.md` follows **State Inventory Reference Shape**.
- **State Inventory Reference Shape** explains what a state inventory is, how to start rough and refine while building, how to identify states from the request, codebase, references, and existing UI, how to slice states one at a time, how to decompose pages into components, how to include UX flow transitions, and how to avoid ideal-state bias and whole-page batching.
- **State Inventory Reference Shape** avoids a giant checklist and avoids requiring a complete upfront state model.
- `references/state-inventory.md` uses **State Inventory Reference Opening**.
- **State Inventory Reference Opening** defines a state inventory as the short list of UI states that matter for the current frontend change, not a complete model of the page.
- **State Inventory Reference Opening** says to start rough, pick the first slice, and refine the inventory as implementation reveals more states.
- `references/state-inventory.md` includes **State Discovery List**.
- **State Discovery List** frames categories as states to look for when they affect rendering, behavior, or review, not as states every slice must include.
- **State Discovery List** includes default/success, loading or pending, empty, error or validation, disabled or unavailable, selected/expanded/active/focused, permission-limited or unauthenticated, long/missing/many/few content, narrow/wide viewport behavior, and user-flow transition states.
- `references/state-inventory.md` uses **State Inventory Decomposition Wording**.
- **State Inventory Decomposition Wording** says that large surfaces should be split where a subpart owns meaningful state, has immediate reuse pressure, or makes the parent hard to read.
- **State Inventory Decomposition Wording** says to avoid splitting just to match a taxonomy, and that a good slice is small enough to build and render but large enough to prove something user-visible.
- `references/state-inventory.md` uses **State Inventory Example Style**.
- **State Inventory Example Style** allows a tiny abstract rough inventory, such as a searchable list with default, loading, empty, error, interaction, and content-pressure states.
- **State Inventory Example Style** avoids code examples and exhaustive sample pages.
- `references/visual-verification.md` follows **Visual Verification Reference Shape**.
- **Visual Verification Reference Shape** explains what visual verification means, when screenshots are needed, how to choose the visual verification tier, how to compare against user-provided or discovered references, how strict comparison should be, what to do in AFK mode, and what to say when screenshots or rendering are not feasible.
- **Visual Verification Reference Shape** avoids pixel-perfect rules by default, tool-specific commands in the main body, broad UI design principles, and formal report templates.
- `references/visual-verification.md` uses **Visual Verification Reference Opening**.
- **Visual Verification Reference Opening** defines visual verification as rendering the affected state and checking what the user will actually see.
- **Visual Verification Reference Opening** says rendered output should be compared against the strongest available reference: user-provided images, existing product UI, before screenshots, nearby conventions, or explicit assumptions.
- `references/visual-verification.md` includes **Visual Evidence Tier Section**.
- **Visual Evidence Tier Section** uses the lightest tier that matches risk: rendered inspection for small local visual changes, captured screenshots for layout/responsive/component-variant/hard-to-describe UI changes, and automated visual regression for reusable components, design-system work, high-risk layouts, regressions, or UI likely to change again.
- **Visual Evidence Tier Section** says not to automate screenshots for every small change and not to skip rendered inspection for visual changes.
- `references/visual-verification.md` uses **Visual Comparison Wording**.
- **Visual Comparison Wording** defaults to intent and product consistency, not pixel-perfect matching.
- **Visual Comparison Wording** checks visible things that affect user trust: layout, spacing, hierarchy, states, responsiveness, interaction cues, content fit, and overflow.
- **Visual Comparison Wording** uses pixel-perfect comparison only when the user asks for it, an exact handoff requires it, or existing visual-regression tooling defines thresholds.
- `references/visual-verification.md` includes **Visual AFK Evidence Section**.
- **Visual AFK Evidence Section** says that when no user is available, the agent gathers the strongest feasible evidence and leaves visual judgment pending.
- **Visual AFK Evidence Section** prefers concise evidence a later reviewer can inspect quickly: screenshot paths, preview path, state names, reference used, and checks run.
- **Visual AFK Evidence Section** says not to write that the UI is visually accepted unless the workflow provides an explicit acceptance mechanism.
- `references/visual-verification.md` includes **Visual Rendering Blocked Section**.
- **Visual Rendering Blocked Section** says not to silently skip visual verification, to state what blocked rendering or screenshots, what evidence was gathered, and what remains unverified.
- **Visual Rendering Blocked Section** says to use the best remaining evidence such as code inspection, existing screenshots, references, tests, or preview instructions, and to treat visual result as pending review.
- `references/accessibility.md` follows **Accessibility Reference Shape**.
- **Accessibility Reference Shape** explains baseline accessibility in CDD, checks for interactive slices, high-risk components, use of existing accessibility tooling, when to ask because behavior has multiple valid patterns, and how to avoid claiming a full audit.
- **Accessibility Reference Shape** avoids long WCAG explanations, legal or compliance language, exhaustive ARIA guidance, and pretending the agent can certify accessibility.
- `references/accessibility.md` uses **Accessibility Reference Opening**.
- **Accessibility Reference Opening** defines accessibility in CDD as checking whether the slice can be understood and operated through the interaction modes the UI implies.
- **Accessibility Reference Opening** states that this is not a full audit, but a baseline check that prevents common implementation failures before review.
- `references/accessibility.md` includes **Accessibility Relevant Checks Section**.
- **Accessibility Relevant Checks Section** applies only checks that match the slice: clear names and keyboard operation for interactive controls, visible and predictable focus, labels/errors/help text connected to inputs, meaningful or decorative image/icon treatment, loading/disabled/error states not relying on color alone, and obvious readability/semantics for non-interactive visual slices.
- `references/accessibility.md` includes **Accessibility High-Risk Section**.
- **Accessibility High-Risk Section** treats accessibility as core behavior for modals, menus, dialogs, comboboxes, forms, drag-and-drop, keyboard shortcuts, and navigation.
- **Accessibility High-Risk Section** says to ask instead of guessing when multiple accessible patterns are valid and the correct UX cannot be inferred.
- `references/responsive-content.md` follows **Responsive Content Reference Shape**.
- **Responsive Content Reference Shape** explains when responsive and content checks matter, how to pick minimal viewport checks, how to test realistic content pressure, common failures to look for, and how to keep checks proportional to risk.
- **Responsive Content Reference Shape** avoids breakpoint recipes, design theory, exhaustive device matrices, and stack-specific CSS guidance.
- `references/responsive-content.md` uses **Responsive Content Reference Opening**.
- **Responsive Content Reference Opening** says responsive and content checks prove the slice still works when viewport, copy, and data stop being ideal.
- **Responsive Content Reference Opening** says not to test every device or content possibility, but to check pressures that could realistically break the slice.
- `references/responsive-content.md` includes **Responsive Viewport Section**.
- **Responsive Viewport Section** says to use documented supported targets when available.
- **Responsive Viewport Section** says that if targets are not clear, check at least one narrow and one wide viewport for layout-sensitive slices, adding more only when the component has meaningful intermediate states or the user requested specific devices.
- `references/responsive-content.md` includes **Content Pressure Section**.
- **Content Pressure Section** checks content shapes that could break the slice: short and long labels, long unbroken words or user-generated text, missing optional fields, empty/loading/error copy, many and few items, large numbers/dates/status labels, and translated or unusually long copy when localization is relevant.
- `references/responsive-content.md` includes **Responsive Content Failures Section**.
- **Responsive Content Failures Section** looks for text overlapping controls or nearby content, clipped content that is not intentionally scrollable, buttons or labels that wrap badly, fixed-width layouts breaking narrow viewports, empty or loading states with unstable layout, important actions pushed offscreen, and spacing or alignment that no longer matches nearby UI.
- `references/testing.md` follows **Testing Reference Shape**.
- **Testing Reference Shape** explains when tests protect the slice, which behaviors are objective enough to test, when visual tests are worth adding, when accessibility tests are worth adding, when not to write tests, and how to avoid brittle implementation or styling tests.
- **Testing Reference Shape** avoids test framework recipes, mocking guidance beyond not mocking internals for coverage, test-first doctrine, and coverage targets.
- `references/testing.md` uses **Testing Reference Opening**.
- **Testing Reference Opening** says tests support CDD when they protect objective behavior that can regress.
- **Testing Reference Opening** says tests do not replace rendering, visual comparison, or human/AFK review, and not to write tests just to prove a component exists or lock down styling details that visual review should cover.
- `references/testing.md` includes **Test Behavior Section**.
- **Test Behavior Section** adds tests when the slice has objective behavior such as clicking, submitting, toggling, filtering, sorting, disclosure, keyboard navigation, focus movement, validation messages, error recovery, permission or availability behavior, state transitions in a flow, or regressions that already happened once.
- `references/testing.md` includes **Do Not Test By Ritual Section**.
- **Do Not Test By Ritual Section** avoids tests that only prove a component renders without meaningful behavior, assert internal component structure, mock internals just to force coverage, lock down pure styling details without visual-regression tooling, or duplicate what screenshot or human review is better at judging.
- `references/testing.md` includes **Visual Accessibility Tests Section**.
- **Visual Accessibility Tests Section** says to use existing visual or accessibility tooling when the repo already has it.
- **Visual Accessibility Tests Section** adds or updates visual regression tests for reusable components, design-system slices, high-risk layouts, or visual regressions, and adds accessibility tests for high-risk interactions when existing tooling supports them.
- **Visual Accessibility Tests Section** says not to introduce new testing dependencies without approval.
- This writing-focused grilling session should end with a **CDD Skeleton Plan**, not a polished final `SKILL.md`.
- **CDD Skeleton Plan** shows section order and accepted wording fragments for the future implementation pass.
- `SKILL.md` uses **CDD Ending Section Shape** after references or rules.
- **CDD Ending Section Shape** uses `When Ending` as the section title.
- **CDD Ending Section Shape** includes **AFK Verification Mode** because it changes completion semantics.
- **CDD Ending Section Shape** says not to claim UI/UX work fully complete unless the user verifies the rendered result or the surrounding workflow provides an explicit acceptance mechanism.
- **CDD Ending Section Shape** uses "ready for human verification" once when implementation is ready but review is pending.
- **CDD Ending Section Shape** says to give the shortest useful review path and mention only checks or visual evidence that matter.
- **CDD Ending Section Shape** says that when no user is available, gather the strongest feasible rendered evidence, run relevant checks, leave concise review notes, and mark visual/product judgment as pending human review.
- A **CDD Skill** follows the **CDD Skill Literature Standard** when written.
- The **CDD Skill Literature Standard** includes a philosophy section explaining why frontend UI/UX work needs component states, rendered evidence, vertical slices, and human verification.
- The **CDD Skill Literature Standard** favors crisp principles, concrete anti-patterns, and operational rules over long prose.
- The **CDD Skill Literature Standard** may echo the clarity of `tdd` while preserving CDD-specific concepts and flow.
- A **CDD Skill** follows the **CDD Focus Rule** in `SKILL.md`.
- The **CDD Focus Rule** keeps `SKILL.md` focused on philosophy, trigger, operating loop, mandatory rules, and when to load references.
- The **CDD Focus Rule** moves detailed checklists and examples into the **CDD Reference Set**.
- A **CDD Skill** follows the **Stack-Neutral Writing Rule** in `SKILL.md`.
- The **Stack-Neutral Writing Rule** permits examples only when clearly illustrative and not framed as required technology.
- Stack-specific tactics belong in the **CDD Reference Set** only when useful.
- A **CDD Skill** follows the **CDD Example Rule** in `SKILL.md`.
- A **CDD Skill** follows the **Workflow-Not-Framework Rule** in `SKILL.md`.
- The **Workflow-Not-Framework Rule** keeps design and UX guidance minimal, operational, and tied to implementation verification.
- Detailed UI scenario guidance belongs in the **CDD Reference Set** only when needed.
- A **CDD Skill** follows the **CDD Writing Shape** in `SKILL.md`.
- **CDD Writing Shape** uses prose for philosophy, short bullets for anti-patterns and mandatory rules, compact ordered steps for workflow, and a short reference-loading list.
- A **CDD Skill** uses **CDD Opening Thesis** before the philosophy section.
- **CDD Opening Thesis** says CDD is a discipline for implementing frontend UI/UX through rendered states and small vertical slices.
- A **CDD Skill** follows **CDD Title Convention**: frontmatter name is `cdd`, and `SKILL.md` title is `# Component-Driven Development`.
- A **CDD Skill** follows **CDD Body Language Rule** after the title.
- **CDD Body Language Rule** favors rendered states, slices, harnesses, references, checks, and review over repeating "component-driven" in prose.
- A **CDD Skill** uses **Plain Discipline Voice** in `SKILL.md`.
- **Plain Discipline Voice** uses firm working rules, short explanations, and immediate definitions for canonical terms.
- **Plain Discipline Voice** avoids letting terms like **Harness**, **Vertical UI Slice**, or **Slice Check** read like taxonomy.
- A **CDD Skill** uses **CDD Philosophy Section Shape** in `SKILL.md`.
- **CDD Philosophy Section Shape** is three short prose paragraphs covering rendered correctness, small vertical UI slices, and human verification.
- A **CDD Skill** uses **CDD Description Style** in frontmatter.
- **CDD Description Style** describes frontend UI/UX implementation through component-driven development and lists user-visible trigger surfaces without explaining the full workflow.
- A **CDD Skill** uses **CDD Non-Trigger Section Shape** near the trigger.
- **CDD Non-Trigger Section Shape** is a short paragraph that excludes frontend work with no concrete UI/UX slice, such as data plumbing, integration wiring, test-only refactors, backend-only changes, visual exploration without implementation, or broad design-system strategy.
- A **CDD Skill** uses **CDD Trigger Section Shape** near **CDD Non-Trigger Section Shape**.
- **CDD Trigger Section Shape** is one sentence for concrete user-visible frontend UI/UX implementation: components, pages, layouts, interactions, responsive states, accessibility behavior, and design-system UI.
- `SKILL.md` contains **CDD Mandatory Rules**.
- **CDD Mandatory Rules** require user-visible frontend scope, one **Vertical UI Slice** at a time, an inspectable repo-native **Harness**, rendered UI evidence, comparison against **Visual References** or existing conventions, **Slice Check**, relevant accessibility checking, approval before new dependencies, stopping for non-inferable product or design decisions, and a **Human Verification Checkpoint** with a **Verification Packet**.
- **CDD Mandatory Rules** do not require a final handoff template or formal report.
- Details beyond **CDD Mandatory Rules** belong in the **CDD Reference Set**.
- `SKILL.md` uses **CDD Rules Section Shape** for mandatory constraints that are not obvious from the operating loop.
- **CDD Rules Section Shape** includes dependency approval, minimal render environment, temporary harness marking and cleanup, stricter design-system slices, and no completion claim before human verification.
- **CDD Scope Exclusion** keeps sub-agent guidance, delegation policy, and platform orchestration out of the **CDD Skill**.
- A **CDD Skill** identifies the **CDD Work Type** during mapping.
- New-UI **CDD Work Type** emphasizes references, nearby conventions, component boundaries, early harness creation, and building from the first representative state outward.
- Existing-UI **CDD Work Type** emphasizes current behavior, before screenshots when feasible, unchanged behavior, after comparison, and avoiding unrelated redesign.
- A **CDD Skill** is grounded in the **CDD Philosophy**.
- The **CDD Philosophy** treats component states as the development unit.
- The **CDD Philosophy** treats tests as useful but incomplete for visual and UX correctness.
- The **CDD Philosophy** treats preview harnesses and **Visual References** as anchors for frontend judgment.
- The **CDD Philosophy** requires human acceptance because some UI quality is subjective and product-sensitive.
- A **CDD Skill** names **CDD Anti-Patterns** in its philosophy or workflow.
- **CDD Anti-Patterns** include Code-Only UI Work, Whole-Page Batching, Ideal-State Bias, Tool Dependency Drift, Component Confetti, Screenshot Theater, Agent-Approved UX, and Style Invention.
- `SKILL.md` uses **CDD Anti-Patterns Section Shape** rather than the full glossary anti-pattern list.
- **CDD Anti-Patterns Section Shape** includes Unchecked Implementation, Whole-Page Batching, Ideal-State Bias, Tool Dependency Drift, and Agent-Approved UX.
- Unchecked Implementation means changing UI and moving on without rendering, comparing, and checking the affected state.
- `SKILL.md` follows **CDD Section Order**: Philosophy, Scope, Operating Loop, Anti-Patterns, Rules, When Ending, and Reference Material.
- In **CDD Section Order**, `When to use and not use` is written as a compact `Scope` section.
- In **CDD Section Order**, anti-patterns appear after the operating loop so the skill teaches action before warnings.
- A **CDD Skill** follows **CDD Standalone Framing** in its text.
- **CDD Standalone Framing** allows shared discipline such as vertical slices, public behavior, no speculative implementation, and refactoring after a slice works.
- **CDD Standalone Framing** avoids promoting or routing to another skill as part of normal frontend implementation.
- A **CDD Skill** creates a **Progressive State Inventory** before implementation.
- A **Progressive State Inventory** starts as a rough inventory for the affected surface, then is refined as each **Vertical UI Slice** is implemented.
- A **CDD Skill** does not implement a **Vertical UI Slice** until the state or states covered by that slice are known.
- A **Progressive State Inventory** avoids requiring a complete page-wide state model before coding starts.
- A **CDD Skill** follows the **CDD Operating Loop**.
- The **CDD Operating Loop** maps the request, references, existing UI, affected surface, rough state inventory, and initial decomposition once before slice implementation.
- **Map Step Wording** says to understand the request, inspect the relevant codebase, existing UI, project conventions, and references, sketch the affected surface, likely component boundaries, and rough state inventory, and ask only when a user-facing decision cannot be inferred.
- **Harness Step Wording** says to make the slice state easy to inspect through the smallest repo-native surface available, such as an existing page state, parent component, fixture, preview route, or temporary harness, without adding new tooling unless approved.
- **Check Step Wording** says to run relevant slice checks for interaction, responsive behavior, accessibility, realistic content, and existing automated checks, scaled to the risk of the slice.
- The repeated **CDD Operating Loop** steps are Slice, Harness, Build, Compose, Render, Compare, and **Slice Check**.
- A **Compose Step** places the slice in the smallest parent or page context that proves it works with surrounding UI before the slice is treated as working.
- A **Slice Check** includes agent-run interaction, responsive, scoped accessibility, content pressure, and available automated checks for the current **Vertical UI Slice**.
- **Human Verification Checkpoint** remains separate from **Slice Check** and occurs at **CDD Review Boundaries**.
- Every **Vertical UI Slice** must be rendered or inspected through a **Harness** during **Slice Check**.
- **Screenshot Evidence** is required at **CDD Review Boundaries** when visual or layout changes are involved and screenshot capture is feasible.
- **Screenshot Evidence** is preferred for visual or layout changes even when a live preview path exists.
- Interaction-only changes may use interaction checklists, test results, or preview instructions when screenshots add little value.
- If screenshot capture is impossible, the **Verification Packet** explains why and provides the best available preview instructions.
- A **Design-System Slice** requires broader state inventory, stronger content pressure checks, visual comparison against existing usages, accessibility as core behavior, interaction tests where behavior exists, screenshot evidence across representative variants, human verification before broad application, and no breaking API changes unless explicitly approved.
- A page-specific **Vertical UI Slice** may use lighter local verification than a **Design-System Slice**.

## Example dialogue

> **Dev:** "Should the **CDD Skill** only tell me how to build the component?"
> **Domain expert:** "No — it should gather enough context and then implement the frontend change."
> **Dev:** "Should a route-loader refactor use the **CDD Skill**?"
> **Domain expert:** "Only if the change affects visible UI or UX behavior."
> **Dev:** "Should frontend integration always use the **CDD Skill**?"
> **Domain expert:** "No — frontend integration is a **CDD Non-Trigger** unless it includes a concrete UI/UX implementation slice."
> **Dev:** "Do we need Storybook before using the **CDD Skill**?"
> **Domain expert:** "No — use a repo-local **CDD Preview Harness** or another **Inspectable State Artifact**."
> **Dev:** "Should we ask which button component to use?"
> **Domain expert:** "No — inspect the repo first; ask only when the missing answer is a product or design decision."
> **Dev:** "Can the **CDD Skill** proceed without a Figma file?"
> **Domain expert:** "Yes — determine the **Design Reference Level**, then use the strongest available reference."
> **Dev:** "Should the **CDD Skill** implement the whole page after listing all states?"
> **Domain expert:** "No — split the work into **Vertical UI Slices** and implement one slice at a time."
> **Dev:** "Does the **CDD Skill** only apply to static components?"
> **Domain expert:** "No — use **UX Flow Slice** for interactive user-visible flows."
> **Dev:** "Should we split this page into atoms, molecules, and organisms?"
> **Domain expert:** "Only if that matches the repo language; otherwise use the **CDD Decomposition Rule**."
> **Dev:** "Can the **CDD Skill** install Storybook to inspect components?"
> **Domain expert:** "No by default — create or adapt a **CDD Preview Harness** unless the user explicitly asks for Storybook."
> **Dev:** "Should the preview harness always be a plain HTML page?"
> **Domain expert:** "No — **Harness Guidance** is technology-neutral and the harness should fit the repo."
> **Dev:** "Is 'Harness' too technical for the skill?"
> **Domain expert:** "No — keep **Harness** as canonical shorthand, but define it clearly."
> **Dev:** "Does every slice need a new harness file?"
> **Domain expert:** "No — every slice needs an inspectable state; existing surfaces can serve as the **Harness**."
> **Dev:** "How should the Harness step be written?"
> **Domain expert:** "Use **Harness Step Wording**: purpose first, stack-neutral examples, no new tooling without approval."
> **Dev:** "Should the **CDD Skill** create a separate preview app?"
> **Domain expert:** "No — choose the **Native Preview Surface** with the least friction."
> **Dev:** "Should `cdd` run the whole frontend for verification?"
> **Domain expert:** "Not by default — prefer a **Minimal Render Environment**."
> **Dev:** "Can `cdd` create a temporary render surface?"
> **Domain expert:** "Yes, if it is minimal, repo-native, dependency-free by default, and cleaned up when only scaffolding."
> **Dev:** "How do we know a preview file is temporary?"
> **Domain expert:** "Use a **Temporary Harness Marker** that follows repo conventions."
> **Dev:** "Should temporary harnesses be removed before human review?"
> **Domain expert:** "No — keep them through review if they help, then remove or promote them after acceptance."
> **Dev:** "Can a UI slice be done after only typecheck passes?"
> **Domain expert:** "No — apply the **CDD Verification Gate**, including **Visual Verification** when UI appearance changed."
> **Dev:** "Do all UI changes need automated screenshot tests?"
> **Domain expert:** "No — choose the appropriate **Visual Verification Tier**."
> **Dev:** "How do we know the screenshot is correct?"
> **Domain expert:** "Compare it against the strongest available **Visual Reference**."
> **Dev:** "Should user-provided screenshots be inspected before coding?"
> **Domain expert:** "Yes — inspect user-provided **Visual References** before implementation."
> **Dev:** "Does the rendered output need to match the reference pixel-for-pixel?"
> **Domain expert:** "Only when required; otherwise use the **Visual Comparison Standard**."
> **Dev:** "Can the agent approve the final UI on its own?"
> **Domain expert:** "No — every **CDD Skill** task ends with a **Human Verification Checkpoint**."
> **Dev:** "What if no user is available during an AFK run?"
> **Domain expert:** "Use **AFK Verification Mode**: gather evidence, run checks, and leave visual acceptance pending."
> **Dev:** "Is it enough to say 'please check it'?"
> **Domain expert:** "No — provide a **Verification Packet** that makes review concrete."
> **Dev:** "Should the final handoff be a report template?"
> **Domain expert:** "No — keep the **Verification Packet** concise and avoid a formal report."
> **Dev:** "Can the agent say the frontend task is done after preparing screenshots?"
> **Domain expert:** "No — the **CDD Completion State** is only ready for human verification until accepted."
> **Dev:** "Can the implementation turn end before user acceptance?"
> **Domain expert:** "Yes, but only as ready for human verification, not fully complete."
> **Dev:** "Should every tiny slice require user approval?"
> **Domain expert:** "No — choose **CDD Review Boundaries** where feedback changes the next implementation decision."
> **Dev:** "Can the **CDD Skill** install Playwright to take screenshots?"
> **Domain expert:** "No — under the **Verification Dependency Rule**, recommend it first and wait for approval."
> **Dev:** "When should the **CDD Skill** stop instead of proceeding?"
> **Domain expert:** "Use the **CDD Stop-And-Ask Rule** for product, design, dependency, accessibility-pattern, and broad convention decisions."
> **Dev:** "Is accessibility optional unless requested?"
> **Domain expert:** "No, but it is scoped — apply a **Scoped Accessibility Check** when accessibility is relevant to the slice."
> **Dev:** "Can the **CDD Skill** redesign the page to look better?"
> **Domain expert:** "Only if asked — otherwise follow the **Conservative Design Quality Rule**."
> **Dev:** "Can the **CDD Skill** create new styles before checking existing UI language?"
> **Domain expert:** "No — perform a **Project Design Language Check** first."
> **Dev:** "Can the component be verified with only ideal copy?"
> **Domain expert:** "No — apply a **Content Pressure Check** when copy or data affects layout."
> **Dev:** "Does every UI slice need exhaustive browser testing?"
> **Domain expert:** "No — use a **Supported Target Check** scoped to the project."
> **Dev:** "Should every visual detail get a unit test?"
> **Domain expert:** "No — follow the **CDD Test Rule** and test behavior that can regress objectively."
> **Dev:** "Should every UI change create documentation?"
> **Domain expert:** "No — follow the **CDD Documentation Rule** and document only what helps future UI work."
> **Dev:** "Should all detailed CDD guidance live in `SKILL.md`?"
> **Domain expert:** "No — use a **CDD Reference Set** and load details only when needed."
> **Dev:** "How should references be listed?"
> **Domain expert:** "Use **CDD References Section Shape**: one-line triggers and lazy loading."
> **Dev:** "What should the references section be called?"
> **Domain expert:** "Use `Reference Material`, not required reading."
> **Dev:** "Can `SKILL.md` link to reference files before we plan them?"
> **Domain expert:** "Only if the files are created in the same pass, and each reference gets its own writing grill."
> **Dev:** "Should this session plan every reference file?"
> **Domain expert:** "No — follow **CDD Writing Session Scope** and grill references separately."
> **Dev:** "What should `preview-harness.md` be?"
> **Domain expert:** "Use **Preview Harness Reference Shape**: a short tactical guide for minimal repo-native inspection surfaces."
> **Dev:** "How should `preview-harness.md` define harness?"
> **Domain expert:** "Use **Harness Reference Opening**: smallest repo-native inspection surface, role not file type."
> **Dev:** "How should the agent choose a harness?"
> **Domain expert:** "Use the **Harness Decision Ladder**."
> **Dev:** "Should `preview-harness.md` include HTML examples?"
> **Domain expert:** "No — use **Harness Example Style** with abstract examples only."
> **Dev:** "How should temporary harnesses be handled?"
> **Domain expert:** "Use **Temporary Harness Lifecycle Section**: mark, keep through review if useful, then remove or promote."
> **Dev:** "Can a harness be a simplified mock?"
> **Domain expert:** "Only if it remains honest; follow the **Honest Harness Rule**."
> **Dev:** "What should `state-inventory.md` be?"
> **Domain expert:** "Use **State Inventory Reference Shape**: compact, progressive, and slice-oriented."
> **Dev:** "How should `state-inventory.md` define state inventory?"
> **Domain expert:** "Use **State Inventory Reference Opening**: short list for the current change, not a complete page model."
> **Dev:** "Should `state-inventory.md` list common states?"
> **Domain expert:** "Yes — use **State Discovery List** as optional categories to consider."
> **Dev:** "How should page decomposition be described?"
> **Domain expert:** "Use **State Inventory Decomposition Wording**: split by state ownership, reuse pressure, or readability pressure."
> **Dev:** "Should `state-inventory.md` include an example?"
> **Domain expert:** "Yes — use **State Inventory Example Style**: tiny and abstract."
> **Dev:** "What should `visual-verification.md` be?"
> **Domain expert:** "Use **Visual Verification Reference Shape**: practical visual evidence and comparison guidance, not a design QA manual."
> **Dev:** "How should visual verification be defined?"
> **Domain expert:** "Use **Visual Verification Reference Opening**: render the affected state and compare what the user sees."
> **Dev:** "Should visual verification include tiers?"
> **Domain expert:** "Yes — use **Visual Evidence Tier Section**."
> **Dev:** "How strict should visual comparison be?"
> **Domain expert:** "Use **Visual Comparison Wording**: intent and product consistency by default."
> **Dev:** "How should visual verification handle AFK mode?"
> **Domain expert:** "Use **Visual AFK Evidence Section**: gather evidence, keep it concise, leave judgment pending."
> **Dev:** "What if rendering or screenshots are not feasible?"
> **Domain expert:** "Use **Visual Rendering Blocked Section**: state the blocker, remaining evidence, and unverified risk."
> **Dev:** "What should `accessibility.md` be?"
> **Domain expert:** "Use **Accessibility Reference Shape**: scoped implementation checks, not a WCAG manual."
> **Dev:** "How should `accessibility.md` define baseline accessibility?"
> **Domain expert:** "Use **Accessibility Reference Opening**: understood and operated through implied interaction modes, not a full audit."
> **Dev:** "How should accessibility checks stay scoped?"
> **Domain expert:** "Use **Accessibility Relevant Checks Section**: apply only checks that match the slice."
> **Dev:** "Which accessibility cases need stricter care?"
> **Domain expert:** "Use **Accessibility High-Risk Section** for complex interaction components."
> **Dev:** "What should `responsive-content.md` be?"
> **Domain expert:** "Use **Responsive Content Reference Shape**: practical layout and content-pressure guidance, not a responsive design manual."
> **Dev:** "How should `responsive-content.md` open?"
> **Domain expert:** "Use **Responsive Content Reference Opening**: check realistic viewport, copy, and data pressure."
> **Dev:** "Should responsive guidance include breakpoints?"
> **Domain expert:** "No — use **Responsive Viewport Section** with supported targets or narrow/wide checks."
> **Dev:** "Should content pressure have a checklist?"
> **Domain expert:** "Yes — use **Content Pressure Section** with practical content shapes."
> **Dev:** "Should responsive/content checks list common failures?"
> **Domain expert:** "Yes — use **Responsive Content Failures Section** to guide visual inspection."
> **Dev:** "What should `testing.md` be?"
> **Domain expert:** "Use **Testing Reference Shape**: a test-worthiness guide, not a frontend testing tutorial."
> **Dev:** "How should `testing.md` define tests in CDD?"
> **Domain expert:** "Use **Testing Reference Opening**: tests protect objective behavior and do not replace visual review."
> **Dev:** "Which frontend behavior should tests cover?"
> **Domain expert:** "Use **Test Behavior Section** for objective behavior that can regress."
> **Dev:** "How should `testing.md` prevent test bloat?"
> **Domain expert:** "Use **Do Not Test By Ritual Section**."
> **Dev:** "Should `testing.md` mention visual and accessibility tests?"
> **Domain expert:** "Yes — use **Visual Accessibility Tests Section** with existing tooling first."
> **Dev:** "Should this session produce the full final skill?"
> **Domain expert:** "No — produce a **CDD Skeleton Plan**."
> **Dev:** "Should AFK verification live only in references?"
> **Domain expert:** "No — include it in **CDD Ending Section Shape** because it changes completion semantics."
> **Dev:** "What should the completion section be called?"
> **Domain expert:** "Use `When Ending` so live and AFK verification both fit."
> **Dev:** "Should `SKILL.md` include Playwright instructions?"
> **Domain expert:** "No — `SKILL.md` states the rendering obligation; `references/visual-verification.md` owns tool tactics."
> **Dev:** "Should the **CDD Skill** be just a checklist?"
> **Domain expert:** "No — follow the **CDD Skill Literature Standard** and write the philosophy clearly."
> **Dev:** "Could the **CDD Skill** become too long for agents to follow?"
> **Domain expert:** "Yes — apply the **CDD Focus Rule** and move detailed guidance into references."
> **Dev:** "Should the main skill mention specific frontend stacks?"
> **Domain expert:** "No — follow the **Stack-Neutral Writing Rule**."
> **Dev:** "Should `SKILL.md` include many examples?"
> **Domain expert:** "No — follow the **CDD Example Rule**."
> **Dev:** "Should `cdd` become a design or UX framework?"
> **Domain expert:** "No — follow the **Workflow-Not-Framework Rule**."
> **Dev:** "Should `SKILL.md` be a strict checklist?"
> **Domain expert:** "No — use **CDD Writing Shape**: prose-first with short checklists."
> **Dev:** "Should there be a thesis line under the title?"
> **Domain expert:** "Yes — use **CDD Opening Thesis**."
> **Dev:** "Should the title be `# CDD`?"
> **Domain expert:** "No — follow **CDD Title Convention** and use the full title."
> **Dev:** "Should the body keep saying component-driven?"
> **Domain expert:** "No — follow **CDD Body Language Rule** and use operational language."
> **Dev:** "Should the skill sound firm or guide-like?"
> **Domain expert:** "Use **Plain Discipline Voice**: firm, but not overly technical."
> **Dev:** "How long should the philosophy be?"
> **Domain expert:** "Use **CDD Philosophy Section Shape**: three short prose paragraphs."
> **Dev:** "Should the YAML description explain the whole method?"
> **Domain expert:** "No — use **CDD Description Style** and keep it concise."
> **Dev:** "Should `When Not To Use` be long?"
> **Domain expert:** "No — use **CDD Non-Trigger Section Shape** as a short routing paragraph."
> **Dev:** "Should `SKILL.md` include `When To Use`?"
> **Domain expert:** "Yes — use **CDD Trigger Section Shape** as a one-sentence scope reminder."
> **Dev:** "What must stay in `SKILL.md`?"
> **Domain expert:** "Only the **CDD Mandatory Rules**, philosophy, trigger, operating loop, reference loading, and final handoff contract."
> **Dev:** "Should Rules repeat the loop?"
> **Domain expert:** "No — use **CDD Rules Section Shape** for constraints not already obvious from the loop."
> **Dev:** "Should `cdd` tell the agent when to use sub-agents?"
> **Domain expert:** "No — that is a **CDD Scope Exclusion**."
> **Dev:** "Is modifying existing UI the same as creating new UI?"
> **Domain expert:** "It uses the same loop, but the **CDD Work Type** changes what mapping emphasizes."
> **Dev:** "Is passing tests enough for frontend correctness?"
> **Domain expert:** "No — the **CDD Philosophy** requires rendered evidence, state coverage, accessibility, content pressure, composition, and human acceptance."
> **Dev:** "How should the skill make failures memorable?"
> **Domain expert:** "Name the **CDD Anti-Patterns** so the agent knows what to avoid."
> **Dev:** "What is the main implementation failure to name?"
> **Domain expert:** "Use Unchecked Implementation: changing UI without rendering, comparing, and checking the affected state."
> **Dev:** "Should anti-patterns come before the workflow?"
> **Domain expert:** "No — follow **CDD Section Order** and place anti-patterns after the operating loop."
> **Dev:** "Should the **CDD Skill** tell users to use another skill for testing?"
> **Domain expert:** "No — use **CDD Standalone Framing**; CDD owns the frontend implementation workflow."
> **Dev:** "Do we need every page state listed before coding?"
> **Domain expert:** "No — use a **Progressive State Inventory** and refine it per slice."
> **Dev:** "Should the agent guess missing product or design intent?"
> **Domain expert:** "No — follow **Map Step Wording** and ask when a user-facing decision cannot be inferred."
> **Dev:** "Is verification just another loop step?"
> **Domain expert:** "No — the loop has **Slice Check**; human verification happens at **CDD Review Boundaries**."
> **Dev:** "How detailed should the Check step be?"
> **Domain expert:** "Use **Check Step Wording**: short categories, risk-scaled, with details in references."
> **Dev:** "If a page is split into components, when do we verify the whole page?"
> **Domain expert:** "Use the **Compose Step** before rendering and checking the slice in page context."
> **Dev:** "Does every internal slice need a saved screenshot?"
> **Domain expert:** "No — require **Screenshot Evidence** at review boundaries when it helps visual review."
> **Dev:** "Should changes to a shared `Button` be treated like page-local UI?"
> **Domain expert:** "No — treat it as a **Design-System Slice** with stricter verification."

## Flagged ambiguities

- "CDD" could mean a strict Visual TDD workflow, a Storybook workflow, or a general frontend implementation workflow — resolved: this project's **CDD Skill** means a dependency-free frontend implementation workflow where component states are central but tests are supporting artifacts.
- "frontend" could include all client-side code — resolved: the **CDD Trigger** is limited to user-visible UI/UX implementation work.
- "frontend integration" could trigger CDD automatically — resolved: frontend integration without a concrete UI/UX implementation slice is a **CDD Non-Trigger**.
- "story" could be mistaken for the required artifact — resolved: an **Inspectable State Artifact** is required, but installed Storybook is not.
- "understand user input" could imply asking the user many clarifying questions — resolved: the **CDD Question Rule** requires codebase and reference inspection before user questions.
- "design reference" could imply a hard requirement for external design files — resolved: the **Design Reference Level** can be explicit, implicit, or weak.
- "implement frontend" could imply page-wide batching — resolved: the **CDD Skill** works through **Vertical UI Slices** one at a time.
- "component-driven" could imply static components only — resolved: **UX Flow Slice** covers user-visible interaction flows.
- "component decomposition" could imply Atomic Design categories — resolved: the **CDD Decomposition Rule** prefers state ownership, reuse pressure, and readability pressure.
- "without Storybook" could imply no isolated UI artifact — resolved: installed Storybook is avoided by default, but an **Inspectable State Artifact** is required.
- "preview harness" could imply a permanent file or HTML-only page — resolved: a **CDD Preview Harness** may be temporary and must follow the repo's frontend stack.
- "Harness" could be unclear jargon — resolved: define **Harness** as the smallest repo-native inspection surface for a slice state.
- "Harness" could imply new files for every slice — resolved: **Harness** is a role, and existing inspectable surfaces are preferred.
- "Harness step" could become tool-specific — resolved: **Harness Step Wording** defines it by purpose and repo-native surfaces.
- "preview surface" could imply a new mini-framework — resolved: use the repo's **Native Preview Surface**.
- "render the UI" could imply running the whole frontend app — resolved: use a **Minimal Render Environment** whenever possible.
- "minimal render environment" could imply existing surfaces only — resolved: the **CDD Skill** may create one temporarily when needed.
- "temporary harness" could be confused with product code — resolved: use a **Temporary Harness Marker**.
- "done" could imply code compiles — resolved: a **Vertical UI Slice** must pass the **CDD Verification Gate**.
- "visual testing" could imply mandatory automation for every change — resolved: **Visual Verification Tier** scales screenshot evidence and automation by risk.
- "visual inspection" could imply subjective taste — resolved: compare rendered output with **Visual References** when available.
- "match the reference" could imply pixel-perfect comparison — resolved: the **Visual Comparison Standard** defaults to intent and system consistency.
- "done" could imply agent-only approval — resolved: UI/UX work requires a **Human Verification Checkpoint** before final completion.
- "human verification" could block AFK work forever — resolved: **AFK Verification Mode** leaves visual acceptance pending without pretending approval happened.
- "ask for verification" could imply a vague handoff — resolved: the **CDD Skill** must provide a **Verification Packet**.
- "verification packet" could imply a formal report — resolved: keep it concise and do not require a handoff template.
- "complete" could imply implementation finished but unreviewed — resolved: **CDD Completion State** distinguishes ready for human verification from complete.
- "one slice at a time" could imply user approval after every slice — resolved: **CDD Review Boundaries** are based on risk, ambiguity, and repetition.
- "minimum verification path" could imply installing tools automatically — resolved: the **Verification Dependency Rule** requires user approval before new verification dependencies.
- "ask the user" could imply asking about discoverable repo details — resolved: the **CDD Stop-And-Ask Rule** is limited to decisions the agent should not silently make.
- "accessibility check" could imply either no accessibility or a full audit — resolved: use a relevant **Scoped Accessibility Check** without turning visual-only slices into audits.
- "design quality" could imply a new style direction — resolved: the **Conservative Design Quality Rule** enforces quality within the existing product style.
- "new CSS" could imply ad hoc styling — resolved: use a **Project Design Language Check** before creating new visual primitives.
- "copy" could imply decorative sample text — resolved: a **Content Pressure Check** treats copy and data shape as part of UI correctness.
- "responsive/browser verification" could imply exhaustive compatibility testing — resolved: use a **Supported Target Check**.
- "frontend testing" could imply coverage for every style detail — resolved: the **CDD Test Rule** protects objective behavior and high-risk visuals.
- "CDD artifact" could imply heavy documentation — resolved: the **CDD Documentation Rule** keeps docs proportional to future reuse and review value.
- "skill file" could imply one large document — resolved: **CDD Reference Set** keeps detailed guidance in separate files.
- "references section" could become long summaries — resolved: **CDD References Section Shape** uses one-line lazy-loading triggers.
- "ending section" could become a formal report or omit AFK behavior — resolved: **CDD Ending Section Shape** is short prose with live and AFK verification semantics.
- "visual verification guidance" could make `SKILL.md` tool-specific — resolved: tactical browser instructions belong in the **CDD Reference Set**.
- "skill quality" could imply only correct instructions — resolved: **CDD Skill Literature Standard** requires a strong philosophy and readable operating contract.
- "complete skill guidance" could imply a huge `SKILL.md` — resolved: the **CDD Focus Rule** keeps the main skill compact and uses references for detail.
- "frontend skill examples" could imply a required stack — resolved: **Stack-Neutral Writing Rule** keeps `SKILL.md` general-purpose.
- "examples" could make the main skill too long or stack-biased — resolved: **CDD Example Rule** limits examples in `SKILL.md`.
- "CDD" could become a design framework — resolved: **Workflow-Not-Framework Rule** keeps it focused on implementation workflow.
- "`SKILL.md` style" could become a compliance checklist — resolved: **CDD Writing Shape** is prose-first with compact execution lists.
- "firm voice" could become too technical — resolved: **Plain Discipline Voice** keeps discipline language plain and immediately defined.
- "philosophy" could become a manifesto — resolved: **CDD Philosophy Section Shape** limits it to three short prose paragraphs.
- "description" could become overloaded with methodology — resolved: **CDD Description Style** keeps frontmatter concise.
- "`When Not To Use`" could become defensive — resolved: **CDD Non-Trigger Section Shape** keeps it short and routing-focused.
- "mandatory rules" could imply every checklist item belongs in `SKILL.md` — resolved: **CDD Mandatory Rules** are limited to the non-negotiables.
- "Rules section" could duplicate the workflow — resolved: **CDD Rules Section Shape** keeps it constraint-only.
- "workflow guidance" could include platform delegation — resolved: **CDD Scope Exclusion** keeps sub-agent policy out of the skill.
- "UI implementation" could imply greenfield work — resolved: **CDD Work Type** distinguishes new UI from existing UI changes.
- "frontend correctness" could imply only logic and tests — resolved: **CDD Philosophy** defines UI correctness more broadly.
- "anti-patterns" could imply vague advice — resolved: **CDD Anti-Patterns** are named failure modes.
- "anti-pattern section" could become too long — resolved: **CDD Anti-Patterns Section Shape** uses a trimmed set.
- "anti-pattern placement" could make the skill warning-first — resolved: **CDD Section Order** places anti-patterns after the loop.
- "inherits TDD discipline" could become promotion of another skill — resolved: **CDD Standalone Framing** keeps the skill self-contained.
- "state inventory" could imply a complete upfront model — resolved: use a **Progressive State Inventory**.
- "map" could imply blind assumptions or heavy planning — resolved: **Map Step Wording** requires inspection first and user questions only for non-inferable user-facing decisions.
- "verify" could conflate agent checks and user approval — resolved: **Slice Check** is agent-run, while **Human Verification Checkpoint** is user-run.
- "Check step" could become too vague or too bloated — resolved: **Check Step Wording** lists short risk-scaled categories.
- "component slicing" could leave pieces unverified together — resolved: **Compose Step** verifies the slice in parent or page context.
- "visual evidence" could imply screenshot churn for every slice — resolved: **Screenshot Evidence** is required at **CDD Review Boundaries** when useful and feasible.
- "shared component work" could be treated like local page work — resolved: a **Design-System Slice** has stricter verification because its blast radius is larger.
