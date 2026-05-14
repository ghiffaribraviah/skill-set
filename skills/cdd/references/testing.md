# Testing

Tests support CDD when they protect objective behavior that can regress.

They do not replace rendering, visual comparison, or human/AFK review. Do not write tests just to prove a component exists or to lock down styling details that visual review should cover.

## Test Behavior

Add tests when the slice has objective behavior such as:

- clicking, submitting, toggling, filtering, sorting, or disclosure
- keyboard navigation or focus movement
- validation messages and error recovery
- permission or availability behavior
- state transitions in a flow
- regressions that already happened once

## Visual And Accessibility Tests

Use existing visual or accessibility tooling when the repo already has it.

Add or update visual regression tests for reusable components, design-system slices, high-risk layouts, or visual regressions. Add accessibility tests for high-risk interactions when existing tooling supports them.

Do not introduce new testing dependencies without approval.

## Do Not Test By Ritual

Avoid tests that:

- only prove a component renders without meaningful behavior
- assert internal component structure
- mock internals just to force coverage
- lock down pure styling details without visual-regression tooling
- duplicate what a screenshot or human review is better at judging
