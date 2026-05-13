# Workflow Prototype

A workflow prototype is a **temporary trace of how a session or process could unfold**. Use this when the user is not choosing code or visuals yet; they are choosing a way of working.

The point is not to create a new skill, rewrite `SKILL.md`, or produce permanent docs. The point is to make different flows visible enough for the user to compare: "ask first", "draft first", "record decisions inline", "summarize at the end", "handoff here", "keep going there."

## When This Is the Right Shape

- "How should the agent guide me through this?"
- "Try a few workflows before we write the real instructions."
- "What should happen first?"
- "When should the agent ask, and when should it act?"
- "Where should decisions be written down?"
- "What should the handoff look like?"
- "I want to compare ways this planning process could go."

If the user wants to press buttons and watch state change, use [LOGIC.md](LOGIC.md). If the user wants to see a page or component, use [UI.md](UI.md).

## What to Build

Build a temporary markdown trace near the thing being explored, usually named:

```text
PROTOTYPE.workflow.md
```

The trace runs the **same scenario** through 2-4 different flows. This matters: if each option uses a different scenario, the user is comparing situations, not workflows.

Think of the trace as a storyboard for work:

- what the user asks for
- what the agent does first
- what the agent asks before acting
- what the agent creates or edits temporarily
- when the user gets a checkpoint
- where decisions would be recorded
- what answer is worth keeping if that flow wins

The trace is disposable. Like UI and logic prototypes, the answer is the only thing worth keeping.

## Process

### 1. State the Scenario

At the top of the trace, write:

- the user prompt or situation
- the choice the prototype should help the user make
- the process, skill, planning flow, or handoff being explored

Do this before writing options. A workflow trace without a shared scenario turns into vague process writing, and vague process writing is hard to choose from.

### 2. Put It Close to the Context

Place the trace near the thing it is exploring:

- near a skill folder if exploring how that skill should behave
- near planning docs if exploring a planning flow
- near a feature area if exploring handoff or collaboration around that feature

Make it obviously temporary. `PROTOTYPE.workflow.md` is a good default.

Do not create or modify `SKILL.md` as part of the workflow prototype. If the winning flow should later change a skill, that happens only after the user chooses.

### 3. Draft 2-4 Flows That Actually Disagree

Each option should show a different way the work could feel.

Useful disagreements:

- **Interview first** - the agent asks one or more questions before creating anything.
- **Draft first** - the agent creates rough options immediately, then asks the user to choose.
- **Checkpoint-heavy** - the agent stops often so the user steers the work.
- **Agent-led** - the agent explores more on its own, then hands back a stronger recommendation.
- **Inline capture** - decisions are written down as they happen.
- **End summary** - decisions are gathered at the end, after the user has seen the whole shape.

Avoid fake variety. If the options only rewrite the same steps in different words, the user is choosing prose style, not a workflow.

### 4. Use This Trace Shape

```md
# Workflow Prototype: <topic>

## Scenario

User situation:

Choice this prototype should help with:

## Option A: <name>

### Flow

1. ...
2. ...
3. ...

### What the User Sees

- ...

### Temporary Work

- ...

### Answer to Keep if Chosen

- ...

### Tradeoff

This option is good when...

This option is weaker when...

## Option B: <name>

...

## Comparison

- Choose A when...
- Choose B when...
- Recommended option:
```

The sections are there to keep the options comparable. They are not paperwork. Without the same sections, the agent can accidentally make one option look better just because it is described more clearly.

### 5. Hand It Over

Give the user the trace path and the choice it is meant to support.

Ask them to pick an option, reject all options, or combine parts of several. Hybrid feedback is useful: "use the draft-first opening from B, but the inline decision capture from C."

### 6. Keep Only the Answer

After the user chooses, capture the answer in the right place:

- `CONTEXT.md` for shared language or relationships
- ADR only for hard-to-reverse, surprising, tradeoff-heavy decisions
- issue, PRD, commit message, or implementation note when the choice guides later work
- real project docs only when the user explicitly wants the chosen flow documented there
- real skill changes only when the user explicitly asks to absorb the chosen flow

Then delete the temporary trace, or mark it for deletion if cleanup cannot happen immediately.

## Anti-Patterns

- **Creating a new skill as the prototype output.** The trace compares flows; it is not itself the finished skill.
- **Changing `SKILL.md` during the prototype.** That skips the user's choice. Only absorb a winning flow after the user asks.
- **Treating the trace as permanent docs.** It is a thinking surface, not the answer.
- **Comparing wording instead of behavior.** The options should differ in who acts, who decides, what gets created, and when handoff happens.
- **Using different scenarios for each option.** That makes the comparison muddy.
