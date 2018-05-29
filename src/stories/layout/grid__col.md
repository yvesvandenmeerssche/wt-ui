# Column

In a grid layout, content must be placed within columns and only columns may be immediate children of rows.

The CSS class to define a column is `.col`. You can use several `.col` classes together _(but using modifiers)_ to change the width of a column depending on the viewport width.

Viewport Size            | Column Class | Max container width
---                      | ---          | ---
Extra small  _(<576px)_  | `.col-[W]`      | None _(auto)_
Small        _(≥576px)_  | `.col-sm-[W]`   | 540px
Medium       _(≥768px)_  | `.col-md-[W]`   | 720px
Large        _(960px)_   | `.col-lg-[W]`   | 960px
Eextra large _( 1140px)_ | `.col-xl-[W]`   | 1140px

`[W]` indicates the number of columns you’d like to use out of the possible **12 per row**. So, if you want three equal-width columns across, you can use `.col-4`.

<div class="doc-preview mb-0 py-3 px-3">
  <div class="container">
    <div class="row mb-3">
      <div class="bg-light py-2 border border-secondary col-12 col-md-8">.col-12 .col-md-8</div>
      <div class="bg-light py-2 border border-secondary col-6 col-md-4">.col-6 .col-md-4</div>
    </div>
    <div class="row mb-3">
      <div class="bg-light py-2 border border-secondary  col-6 col-md-4">.col-6 .col-md-4</div>
      <div class="bg-light py-2 border border-secondary col-6 col-md-4">.col-6 .col-md-4</div>
      <div class="bg-light py-2 border border-secondary col-6 col-md-4">.col-6 .col-md-4</div>
    </div>
    <div class="row">
      <div class="bg-light py-2 border border-secondary col-6">.col-6</div>
      <div class="bg-light py-2 border border-secondary col-6">.col-6</div>
    </div>
  </div>
</div>

```html
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="row">
  <div class="col-12 col-md-8">.col-12 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="row">
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="row">
  <div class="col-6">.col-6</div>
  <div class="col-6">.col-6</div>
</div>
```

Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above it _(e.g., `.col-sm-4` applies to small, medium, large, and extra large devices, but not the first xs breakpoint)._

Columns without a specified width will automatically layout as equal width columns.

<div class="doc-preview mb-0 py-3 px-3">
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