# Visual Verification

Visual verification means rendering the affected state and checking what the user will actually see.

It is not the same as trusting code, tests, or screenshots alone. The rendered result should be compared against the strongest available reference: user-provided images, existing product UI, before screenshots, nearby conventions, or explicit assumptions.

## Choose The Evidence Tier

Use the lightest tier that matches the risk:

1. **Rendered inspection** - for small local visual changes.
2. **Captured screenshots** - for layout changes, responsive work, component variants, or hard-to-describe UI changes.
3. **Automated visual regression** - for reusable components, design-system work, high-risk layouts, regressions, or UI likely to change again.

Do not automate screenshots for every small change. Do not skip rendered inspection for visual changes.

## Compare By Intent First

Default to intent and product consistency, not pixel-perfect matching.

Check the visible things that affect user trust: layout, spacing, hierarchy, states, responsiveness, interaction cues, content fit, and overflow.

Use pixel-perfect comparison only when the user asks for it, an exact handoff requires it, or existing visual-regression tooling defines thresholds.

## AFK Evidence

When no user is available, gather the strongest feasible evidence and leave visual judgment pending.

Prefer evidence that a later reviewer can inspect quickly: screenshot paths, preview path, state names, reference used, and checks run. Keep it concise; this is not a report template.

Do not write that the UI is visually accepted unless the workflow provides an explicit acceptance mechanism.

## When Rendering Is Not Feasible

Do not silently skip visual verification. State what blocked rendering or screenshots, what evidence you did gather, and what remains unverified.

Use the best remaining evidence: code inspection, existing screenshots, references, tests, or preview instructions. Treat the visual result as pending review.
