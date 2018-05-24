# Grid

Below, you'll find basic information on how to the grid system works. Please review [Bootstrap's docs](https://getbootstrap.com/docs/4.0/layout/grid/) for a more complete and detailed explanation.

## Grid components

Layouts are created by using three different CSS classes:  `.container`, `.row` and `.col`.

In a grid layout, content must be placed within columns, and only columns may be immediate children of rows. Rows may be immediate children of columns or a container.

<div class="doc-preview py-3 px-3">
  <div class="container">
    <div class="row">
      <div class="col bg-light py-2 border border-secondary">
        First column
      </div>
      <div class="col bg-light py-2 border border-secondary">
        Second column
      </div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
  </div>
</div>
```