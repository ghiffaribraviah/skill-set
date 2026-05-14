# CDD requires human acceptance before completion

The CDD skill treats frontend UI/UX implementation as ready for human verification until the user accepts the rendered result or the surrounding workflow provides an explicit acceptance mechanism. Automated checks, screenshots, and visual comparison provide evidence, but they do not replace human judgment for product-sensitive UI quality.

**Considered Options**

- Let the agent mark UI/UX work complete after implementation, tests, and screenshot checks.
- Require a human verification checkpoint before claiming the UI/UX work is complete.
- Allow AFK runs to finish implementation with visual/product judgment explicitly pending.

**Consequences**

CDD final responses should avoid claiming full completion before acceptance. When a user is available, they should provide concise review guidance and rendered evidence where feasible, then continue if the user requests changes. When no user is available, the skill should gather the strongest feasible evidence, run the relevant checks, and leave visual acceptance pending rather than pretending the agent approved the UI.
