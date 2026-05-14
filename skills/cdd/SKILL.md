---
name: cdd
description: Implement frontend UI/UX changes through component-driven development. Use when building or modifying user-visible frontend components, pages, layouts, interactions, responsive states, accessibility behavior, or design-system UI.
---

# Component-Driven Development

A discipline for implementing frontend UI/UX through rendered states and small vertical slices.

## Philosophy

Frontend correctness is rendered, not inferred. A UI change is not ready because the code compiles or the tests pass; the relevant state must be visible, inspectable, and compared against a reference or the product's existing conventions.

Work in small vertical UI slices. Pick one visible part of the experience, make its state easy to inspect, build only that slice, render it, compare it, and check it before moving on. Do not batch a whole page of imagined states.

The agent can gather evidence, but it cannot be the final judge of visual quality. UI/UX work is only complete after the user verifies the rendered result, or the surrounding workflow provides an explicit acceptance mechanism.

## Scope

Use this for concrete user-visible frontend UI/UX implementation: components, pages, layouts, interactions, responsive states, accessibility behavior, and design-system UI.

Do not use this for frontend work with no concrete UI/UX slice: data plumbing, integration wiring, test-only refactors, backend-only changes, visual exploration without implementation, or broad design-system strategy.

## Operating Loop

Map once, then work one slice at a time.

1. **Map** - understand the request, inspect the relevant codebase, existing UI, project conventions, and references, then sketch the affected surface, likely component boundaries, and rough state inventory. Ask only when a user-facing decision cannot be inferred.
2. **Slice** - choose one visible part of the experience and the state(s) it covers.
3. **Harness** - make the slice state easy to inspect through the smallest repo-native surface available. This can be an existing page state, parent component, fixture, preview route, or temporary harness; do not add new tooling without approval.
4. **Build** - implement only that slice using the project's existing design language.
5. **Compose** - place the slice in the smallest parent/page context that proves it works with surrounding UI.
6. **Render** - run the minimal environment needed to see it.
7. **Compare** - check the rendered result against references or nearby product conventions.
8. **Check** - run the relevant slice checks: interaction, responsive behavior, accessibility, realistic content, and existing automated checks. Scale the checks to the risk of the slice.

## Anti-Patterns

- **Unchecked implementation** - changing UI and moving on without rendering, comparing, and checking the affected state.
- **Whole-page batching** - building a full page before proving one representative slice.
- **Ideal-state bias** - checking only the happy path with perfect content.
- **Tool dependency drift** - adding preview or visual-test tooling without approval.
- **Agent-approved UX** - treating the agent's visual judgment as final.

## Rules

- Do not add new preview, browser, screenshot, or visual-regression dependencies without recommending them and getting approval.
- Prefer the smallest render environment that can verify the slice; do not run the whole frontend by default.
- Keep temporary harnesses clearly marked. Keep them through human review if useful, then remove or promote them after acceptance.
- For shared UI primitives or design-system slices, broaden the state inventory and verification before applying the pattern widely.
- Do not claim UI/UX work is complete until the user verifies the rendered result or the surrounding workflow provides an explicit acceptance mechanism.

## When Ending

Do not claim UI/UX work is fully complete unless the user has verified the rendered result or the surrounding workflow provides an explicit acceptance mechanism.

If implementation is ready but review is pending, say it is **ready for human verification**. Give the shortest useful review path and mention only the checks or visual evidence that matter.

If no user is available, gather the strongest feasible rendered evidence, run the relevant checks, leave concise review notes, and mark visual/product judgment as pending human review.

## Reference Material

Load these only when the task needs the extra detail:

- [preview-harness.md](references/preview-harness.md) - when no clear inspection surface exists.
- [state-inventory.md](references/state-inventory.md) - when choosing states, slices, or component boundaries is non-trivial.
- [visual-verification.md](references/visual-verification.md) - when screenshots, visual references, or AFK evidence matter.
- [accessibility.md](references/accessibility.md) - when the slice includes interactive controls, forms, navigation, or semantic risk.
- [responsive-content.md](references/responsive-content.md) - when layout, viewport behavior, overflow, or realistic content pressure matters.
- [testing.md](references/testing.md) - when behavior should be protected by interaction, accessibility, or visual tests.
