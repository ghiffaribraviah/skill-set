---
name: prototyping
description: Build throwaway prototypes that make options concrete before the user chooses a direction. Use when the user wants to prototype, sanity-check a logic or state model, compare UI directions, explore process options, or says "let me play with it", "try a few designs", or "show me a few workflows".
---

# Prototyping

A prototype is **temporary work that answers a question**. The question decides the shape.

The point is not to build the final thing. The point is to make an idea visible enough that the user can react to it: "yes, that", "not that", "combine these two", or "wait, that should not be possible."

## Pick a Shape

Identify which question is being answered from the user's prompt, the surrounding code, or by asking if the user is around:

- **"Does this logic / state model feel right?"** -> [LOGIC.md](LOGIC.md). Build a tiny interactive terminal app so the user can drive the behavior through real cases.
- **"What should this look like?"** -> [UI.md](UI.md). Build several clearly different UI options on one route so the user can flip between them.
- **"How should this process go?"** -> [WORKFLOW.md](WORKFLOW.md). Build a temporary workflow trace so the user can compare different ways a session or handoff could unfold.

These shapes are not restrictions. They are how the agent presents options consistently. Getting the shape wrong wastes the prototype: a UI mockup will not answer a state-model question, and a workflow trace will not tell the user whether a page layout feels right.

If the question is genuinely ambiguous and the user is available, ask one short question. If the user is not reachable, default to the shape that best matches the surrounding work and state the assumption at the top of the prototype.

## Rules That Apply to Every Prototype

1. **Throwaway from day one, and clearly marked as such.** Put the prototype close to the module, page, workflow, or skill area it is exploring so the context is obvious. Name it so a casual reader can see it is a prototype, not production.
2. **One obvious way to inspect it.** Use the project's existing task runner, route style, or markdown layout. The user should not need to remember a path, reverse-engineer setup, or ask how to open it.
3. **No real side effects by default.** Use memory, sample data, stubs, or a scratch file with a clear "PROTOTYPE - wipe me" name. If persistence is the thing being tested, make the disposable storage obvious.
4. **Skip the polish.** No tests for the throwaway shell, no big abstractions, no broad error handling. The point is to learn quickly, not to create another thing to maintain.
5. **Show the important state.** After every action, variant switch, or workflow option, the user should be able to see what changed and what choice is being tested.
6. **Delete or absorb when done.** When the prototype has answered its question, either delete it or fold the chosen answer into real work. Do not leave old variants, switchers, traces, or shells rotting in the repo.

## When Done

The **answer** is the only thing worth keeping from a prototype.

Capture the answer somewhere that fits the decision:

- commit message or implementation note for a small code direction
- issue or PRD when the answer shapes future work
- `CONTEXT.md` when the answer resolves shared language
- ADR only when the decision is hard to reverse, surprising, and based on a real tradeoff
- real code or real docs only after the user has chosen what should be absorbed

If the user is around, the capture can be a quick conversation: "What did this teach us?" If the user is not around, leave a short `NOTES.md` or equivalent next to the prototype so the verdict can be filled in before cleanup.
