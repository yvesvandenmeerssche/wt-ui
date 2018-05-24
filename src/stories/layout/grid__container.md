# Container

Containers are wrappers that provide a means to center and horizontally pad your site’s contents. Use `.container` for a responsive pixel width or `.container-fluid` for `width: 100%` across all viewport and device sizes.

Most layouts do not require to use nested containers.

**Responsive, fixed-width container** _(its `max-width` changes at each breakpoint)._

<div class="doc-preview mb-0 py-3 px-3">
  <div class="container" style="max-width: 70%">
    <div class="row" style="max-width: 70%; margin: 0 auto;">
      <div class="col py-5 mr-1 bg-warning rounded"
           style="max-width: 350px">
      </div>
      <div
        class="col py-5 ml-1 bg-info rounded"
        style="max-width: 70px">
      </div>
    </div>
  </div>
</div>

```html
<div class="container">
  <!-- Content here -->
</div>
```

**Fluid-width container** _(it’s 100% wide all the time)._

<div class="doc-preview mb-0 py-3 px-3">
  <div class="container">
    <div class="row">
      <div class="col py-5 mr-1 bg-warning rounded">
      </div>
      <div
        class="col py-5 ml-1 bg-info rounded"
        style="max-width: 70px">
      </div>
    </div>
  </div>
</div>

```html
<div class="container-fluid">
  <!-- Content here -->
</div>
```

**Bootstrap primarily uses the following breakpoints.**

- Small devices       _(landscape phones, `576px` and up)_
- Medium devices      _(tablets, `768px` and up)_
- Large devices       _(desktops, `992px` and up)_
- Extra large devices _(large desktops, `1200px` and up)_
