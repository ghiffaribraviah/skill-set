# Logic Prototype

A logic prototype is a tiny interactive terminal app that lets the user drive behavior by hand. Use this when the question is about **business logic, state changes, data shape, or API feel** - the kind of thing that can look reasonable on paper but feel wrong once someone pushes it through real cases.

## When This Is the Right Shape

- "I'm not sure this state model handles the edge case where X happens after Y."
- "Does this data shape let us represent the awkward case?"
- "I want to feel out the API before writing it for real."
- "Let me press buttons and watch what happens."

If the question is "what should this look like", use [UI.md](UI.md). If the question is "how should this process run", use [WORKFLOW.md](WORKFLOW.md).

## Process

### 1. State the Question

Before writing code, write down what behavior, state model, or data shape is being prototyped. One paragraph in the prototype README or at the top of the file is enough.

A logic prototype that answers the wrong question is pure waste. Make the question explicit so it can be checked later, whether the user is watching now or coming back to it later.

### 2. Pick the Language

Use whatever the host project uses. If the project has no obvious runtime, ask.

Match the project's existing tooling. Do not add a new package manager, framework, or runtime just for the prototype.

### 3. Keep the Logic Separate from the Terminal Shell

Put the actual logic - the bit answering the question - behind a small, plain interface that could be lifted into real code later. The terminal shell is throwaway; the logic might not be.

The right shape depends on the question:

- **A reducer** - `(state, action) => state`. Good when actions are discrete and state is one clear value.
- **Explicit states and transitions**. Good when the question includes "which actions are legal right now?"
- **A few pure functions** over plain data. Good when there is no current state, only transformations.
- **A small class or module** only when the logic genuinely owns ongoing internal state.

Pick the shape that best fits the question, not the one that is easiest to wire to the terminal. Keep prompts, printing, keyboard handling, and `console.log` out of the logic. The terminal app imports the logic; nothing flows the other way.

This is what makes the prototype useful after the prototype is gone. When the question has been answered, the validated reducer, transition model, or function set can move into real code. The terminal shell gets deleted.

### 4. Build the Smallest Terminal UI That Shows the State

Build one stable screen. On every tick, clear the screen and re-render the full frame. The user should see one current view, not an ever-growing scrollback.

Each frame has two parts, in this order:

1. **Current state** - formatted so it is easy to scan, such as one field per line or readable JSON.
2. **Available actions** - simple keys or commands, such as `[a] add item  [d] delete item  [t] tick  [q] quit`.

Behavior:

1. Start with one in-memory state object.
2. Render the first frame immediately.
3. Read one key or one line at a time.
4. Apply the action.
5. Re-render the full frame after every action.
6. Loop until quit.

The whole frame should fit on one screen. If the user cannot see the state, they cannot feel the model.

### 5. Make It Runnable in One Command

Add a command to the project's existing task runner when one exists (`package.json`, `Makefile`, `justfile`, `pyproject.toml`, etc.).

The user should run something like:

```text
pnpm run prototype:<name>
```

or the nearest equivalent for the project. If there is no task runner, put the command at the top of the prototype README.

### 6. Hand It Over

Give the user the run command. They should drive it themselves.

The interesting moments are when they say "wait, that should not be possible" or "I assumed this would be different." Those are bugs in the idea, which is the whole point of the prototype. If they need a new action to test a case, add it. Prototypes evolve while the idea is still soft.

### 7. Capture the Answer

When the prototype has done its job, keep the answer and delete the shell. If the user is around, ask what it taught them. If not, leave a short note next to the prototype so the verdict can be filled in before deletion.

## Anti-Patterns

- **Do not add tests for the throwaway shell.** If it needs tests, it is becoming real work.
- **Do not wire it to the real database.** Use memory unless the question is specifically about persistence.
- **Do not generalize.** No "what if we need X later." The prototype answers one question.
- **Do not blur the logic and the terminal shell.** If the reusable logic knows about prompts, prints, or terminal escape codes, it is no longer easy to keep.
- **Do not ship the shell.** It is optimized for hand-driving an idea, not for production use.
