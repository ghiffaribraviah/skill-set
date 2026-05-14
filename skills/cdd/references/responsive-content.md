# Responsive Content

Responsive and content checks prove that the slice still works when the viewport, copy, and data stop being ideal.

Do not test every device or every content possibility. Check the pressures that could realistically break this slice.

## Viewport Checks

Use the project's supported targets when they are documented.

If targets are not clear, check at least one narrow and one wide viewport for layout-sensitive slices. Add more only when the component has meaningful intermediate states or the user requested specific devices.

## Content Pressure

Check the content shapes that could break the slice:

- short and long labels
- long unbroken words or user-generated text
- missing optional fields
- empty, loading, and error copy
- many items and few items
- large numbers, dates, or status labels
- translated or unusually long copy when localization is relevant

## Common Failures

Look for:

- text overlapping controls or nearby content
- clipped content that is not intentionally scrollable
- buttons or labels that wrap badly
- fixed-width layouts breaking narrow viewports
- empty or loading states with unstable layout
- important actions pushed offscreen
- spacing or alignment that no longer matches nearby UI
