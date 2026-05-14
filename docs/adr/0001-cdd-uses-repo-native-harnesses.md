# CDD uses repo-native harnesses by default

The CDD skill avoids external component explorer dependencies by default and uses dependency-free, repo-native harnesses to make frontend states inspectable. This keeps the skill broadly usable across frontend stacks and avoids silently adding long-term project tooling, while still requiring rendered evidence, visual comparison, and human verification for UI/UX work.

**Considered Options**

- Use Storybook or a similar component explorer as the default expression of component-driven development.
- Use repo-native harnesses by default and recommend new tooling only when the user approves it.

**Consequences**

CDD references must teach agents how to create minimal, stack-neutral preview harnesses. The workflow gives up some off-the-shelf component explorer power in exchange for lower dependency burden and wider applicability.
