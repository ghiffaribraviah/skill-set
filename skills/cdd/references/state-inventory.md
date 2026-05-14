# State Inventory

A state inventory is the short list of UI states that matter for the current frontend change.

It is not a complete model of the page. Start rough, pick the first slice, and refine the inventory as implementation reveals more states.

## Find Meaningful States

Look for states that affect rendering, behavior, or review:

- default / success
- loading or pending
- empty
- error or validation
- disabled or unavailable
- selected, expanded, active, focused
- permission-limited or unauthenticated
- long content, missing content, many items, few items
- narrow and wide viewport behavior
- transition states in a user flow

Do not include every category by default. Include the states that matter for the current change.

## Decompose By State Ownership

When the request is a page or large surface, do not implement the whole surface at once. Split it where a subpart owns meaningful state, has immediate reuse pressure, or makes the parent hard to read.

Avoid splitting just to match a taxonomy. A good slice is small enough to build and render, but large enough to prove something user-visible.

## Example Rough Inventory

For a searchable list:

- default: results visible
- loading: query submitted, results pending
- empty: query returns no results
- error: request fails
- interaction: filter panel opened/closed
- content pressure: long result title and many results

## Slice From The Inventory

Pick one state or a small group of related states for the next vertical UI slice.

Do not batch the full page or all imagined states. Build, compose, render, compare, and check the current slice before moving to the next one.
