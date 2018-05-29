# Utilities for layout

#### For faster mobile-friendly and responsive development, Bootstrap includes dozens of utility classes for showing, hiding, aligning, and spacing content.

## Changing display

Use our [display utilities][0] for responsively toggling common values of the display property. Mix it with our grid system, content, or components to show or hide them across specific viewports.

## Flexbox options

Bootstrap 4 is built with flexbox, but not every element’s display has been changed to display: flex as this would add many unnecessary overrides and unexpectedly change key browser behaviors. Most of [our components][1] are built with flexbox enabled.

Should you need to add display: flex to an element, do so with .d-flex or one of the responsive variants (e.g., .d-sm-flex). You’ll need this class or display value to allow the use of our extra [flexbox utilities][2] for sizing, alignment, spacing, and more.

## Margin and padding

Use the margin and padding[spacing utilities][3] to control how elements and components are spaced and sized. Bootstrap 4 includes a five-level scale for spacing utilities, based on a 1rem value default $spacer variable. Choose values for all viewports (e.g., .mr-3 for margin-right: 1rem), or pick responsive variants to target specific viewports (e.g., .mr-md-3 for margin-right: 1rem starting at the md breakpoint).

## Toggle visibility

When toggling display isn’t needed, you can toggle the visibility of an element with our [visibility utilities][4]. Invisible elements will still affect the layout of the page, but are visually hidden from visitors.

[0]: https://getbootstrap.com/docs/4.0/utilities/display/
[1]: https://getbootstrap.com/docs/4.0/components/alerts/
[2]: https://getbootstrap.com/docs/4.0/utilities/flex/
[3]: https://getbootstrap.com/docs/4.0/utilities/spacing/
[4]: https://getbootstrap.com/docs/4.0/utilities/visibility/