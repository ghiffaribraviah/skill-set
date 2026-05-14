# Accessibility

Accessibility in CDD means checking whether the slice can be understood and operated through the interaction modes the UI implies.

This is not a full audit. It is the baseline check that prevents common implementation failures before review.

## Relevant Checks

Apply only the checks that match the slice:

- Interactive controls need clear names and keyboard operation.
- Focus should be visible and move predictably when interaction changes the UI.
- Forms should connect labels, errors, and help text to the relevant inputs.
- Images and icons should be named when meaningful, or treated as decorative when not.
- Loading, disabled, and error states should not rely on color alone.
- Non-interactive visual slices usually only need obvious readability and semantic checks.

## High-Risk Interaction

Treat accessibility as core behavior for modals, menus, dialogs, comboboxes, forms, drag-and-drop, keyboard shortcuts, and navigation.

If multiple accessible patterns are valid and the correct UX cannot be inferred, ask instead of guessing.

## Tooling

Use existing project accessibility checks when they exist. Do not add accessibility tooling without approval.

Do not claim a full accessibility audit unless the user asked for one or the project tooling actually performed one.
