# Row

Rows are wrappers for columns. Each column has horizontal padding _(gutter)_ which createate an space between them. Rows use negative margins to make the content in your columns align correctly to the left and right sides.


<div class="doc-preview mb-0 py-3 px-3">
  <div class="container">
    <div class="row">
      <div class="col border border-muted">
      <div class="bg-light py-2 px-2 border border-secondary">
        First column
      </div>
      </div>
      <div class="col border border-muted">
      <div class="bg-light py-2 px-2 border border-secondary">
        Second column
      </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
```

To remove the margin from rows and padding from columns use the `.no-gutters` class on the `.row`.

<div class="doc-preview mb-0 py-3 px-3">
  <div class="container">
    <div class="row no-gutters">
      <div class="col">
      <div class="bg-light py-2 px-2 border border-secondary">
        First column
      </div>
      </div>
      <div class="col">
      <div class="bg-light py-2 px-2 border border-secondary">
        Second column
      </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="row no-gutters">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
```