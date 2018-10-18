# Button States

Buttons will have a slightly different style when active. Is possible to force the same active appearance with `.active` (and include the `aria-pressed="true"` attribute).

Make buttons look inactive by adding the disabled boolean attribute to any `<button>` element.

As the `<a>` element doesn't support the `disabled` attribute, you must add the `.disabled` class in that cases, and also include the `aria-disabled="true"` attribute. However the results might be different depending on the browser.

<!-- STORY -->

```html
<!-- Active -->
<a href="#" class="btn btn-primary active" role="button" aria-pressed="true">Primary link</a>

<!-- Disabled -->
<button type="button" class="btn btn-primary" disabled>Primary button</button>
<a href="#" class="btn btn-primary disabled" role="button" aria-disabled="true">Primary link</a>

<!-- Loading -->
<button class="btn btn-primary disabled mr-1" disabled>
  <i class="mdi mdi-loading mdi-spin text-dark"/> Loading...
</button>
```