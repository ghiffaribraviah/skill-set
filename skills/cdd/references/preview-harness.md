# Preview Harness

A harness is the smallest repo-native way to render the slice state you need to inspect.

It is a role, not a file type. An existing page state, parent component, fixture, preview route, docs example, or temporary scaffold can be the harness if it makes the state visible and repeatable.

## Choose The Smallest Surface

Prefer surfaces in this order:

1. Existing visible page state.
2. Existing parent component, fixture, docs example, or preview surface.
3. Targeted route or local scaffold using the project's existing stack.
4. Full app route only when smaller surfaces cannot represent the state accurately.

Do not add new tooling just to create a harness. Recommend tooling only when the current project repeatedly needs it and the user approves.

## Minimal Does Not Mean Fake

A harness can be small, but it must still represent the real UI state honestly. Use real project components, styling, data shapes, and parent context when they affect the result.

Do not verify a polished mock that cannot fail the same way the real UI would fail.

## Examples

Good harnesses:

- an existing page state with controlled data that renders the empty table
- a parent component fixture that renders a card with long content
- a local preview surface that renders a modal open by default
- a temporary scaffold that shows loading, error, and success states side by side

Bad harnesses:

- a new mini app with its own styling rules
- a full app server when a small fixture would show the state
- a screenshot-only artifact with no way to re-render the state
- a hidden temporary file that looks like product code

## Temporary Harness Lifecycle

If the harness is temporary, make that obvious through the repo's naming or location conventions.

Keep it through review when it helps the user or AFK reviewer inspect the change. After acceptance, either remove it or promote it into a useful fixture, docs example, or visual check.

Do not leave unmarked scaffolding in product code.
