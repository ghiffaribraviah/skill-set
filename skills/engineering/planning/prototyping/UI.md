# UI Prototype

A UI prototype shows **several clearly different UI directions** in one place. The user flips between them, picks one, steals parts from several, or rejects them all.

If the question is about logic or state rather than what something looks like, use [LOGIC.md](LOGIC.md). If the question is about how a process or session should run, use [WORKFLOW.md](WORKFLOW.md).

## When This Is the Right Shape

- "What should this page look like?"
- "I want to see a few options for this dashboard before committing."
- "Try a different layout for the settings screen."
- "Show me a few visual directions."
- Any time the user would otherwise spend a day choosing between vague mockups in their head.

## Two Sub-Shapes - Strongly Prefer A

A UI prototype is easier to judge when it is butting up against the rest of the app: real header, real sidebar, real data, real density. A blank throwaway route is a vacuum; many designs look fine when nothing around them pushes back.

### Sub-Shape A - Adjust an Existing Page

Use this by default.

The route already exists, or there is a natural host page for the idea. Keep the real data fetching, params, auth, navigation, and surrounding layout. Swap only the part being explored.

If the idea is a new dashboard card, settings section, flow step, or page area, it probably still belongs inside an existing host page while being prototyped.

### Sub-Shape B - Create a Throwaway Page

Use this only when the thing genuinely has no existing home: a new top-level surface, a flow that cannot sensibly be embedded, or a concept that needs its own route to be judged.

Follow the project's routing conventions. Put `prototype` in the route or filename so nobody mistakes it for real app structure.

Before choosing this shape, sanity-check the decision: is there really no existing page this could sit inside? An empty route can hide the problems that a populated page would reveal.

In both sub-shapes, use the same switcher pattern.

## Process

### 1. State the Question and Pick the Number of Variants

Default to **3 variants**. Use 2 if the choice is naturally binary. More than 5 usually stops being useful and starts becoming noise.

Write the plan in one line at the prototype location or top of the file:

```text
Three variants of the settings page, switchable with ?variant=, on the existing /settings route.
```

This works whether the user is present now or returning later.

### 2. Make the Variants Actually Different

Draft each variant around a different idea. Hold each one to:

- the page's purpose
- the data the page has access to
- the project's component library and styling system
- a clear name, such as `VariantA`, `VariantB`, `VariantC`

Variants must disagree about structure: layout, information order, density, navigation, or primary action. Different colors or copy are not enough. Three slightly changed card grids is not a UI prototype; it is wallpaper.

If two variants come out too similar, redo one with a sharper constraint, such as "do not use a card grid" or "make this action-first instead of overview-first."

### 3. Wire Them Together

Use one route with a URL option such as `?variant=A`.

Keep the normal page setup above the switch. Only the rendered prototype area should change per variant.

Example shape:

```tsx
const variant = searchParams.get("variant") ?? "A";

return (
  <>
    {variant === "A" && <VariantA data={data} />}
    {variant === "B" && <VariantB data={data} />}
    {variant === "C" && <VariantC data={data} />}
    <PrototypeSwitcher current={variant} variants={["A", "B", "C"]} />
  </>
);
```

Adapt this to the project's framework. Do not force this exact code where it does not fit.

### 4. Build the Floating Switcher

Add a small fixed bar at the bottom center of the screen:

- previous option
- current option label
- next option

Behavior:

- clicking previous/next updates the URL option
- left/right arrow keys cycle variants
- arrow keys should not be intercepted while the user is typing in an input, textarea, or editable field
- the switcher should look distinct from the page so it is clearly not part of the design being judged
- hide it from the real app when the framework gives you a clean way to do that

Use one shared switcher for the prototype instead of rebuilding it inside each variant.

### 5. Hand It Over

Give the user the URL and the variant keys.

The interesting feedback is often a hybrid: "I want the header from B with the sidebar from C" or "A has the right density, but C has the right flow." That is the design answer the prototype is trying to uncover.

### 6. Capture the Answer and Clean Up

Once a direction wins, write down which one and why. Then:

- if it was on an existing page, delete the losing variants and switcher, then fold the winner into the page
- if it was on a throwaway page, promote the winning idea to the real route and delete the prototype route

Do not leave variant components or the switcher lying around. They rot quickly and confuse the next reader.

## Anti-Patterns

- **Variants that differ only in color, copy, or spacing.** That is a tweak, not a prototype.
- **A standalone empty route when an existing page could host the prototype.** Empty space makes weak ideas look stronger than they are.
- **Sharing too much layout code between variants.** A shared header is fine; a shared layout can prevent the variants from truly disagreeing.
- **Wiring variants to real mutations.** If a variant needs to mutate, point it at a stub. The question is "what should this look like?", not "does the backend work?"
- **Promoting the prototype directly.** Prototype code was written under prototype rules. Clean it up properly when folding it into real work.
