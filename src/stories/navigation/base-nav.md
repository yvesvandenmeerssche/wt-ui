# Base Nav

The base `.nav` component allows the building all types of navigation components. It does not include active styles (as is demostrated on the example).

<!-- STORY -->

```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
```

## Alternative markup

Use `<ul>`s like above, or roll your own with say a `<nav>` element.

<div class="doc-preview mb-0 py-3 px-3">
<div class="container">
  <nav class="nav">
    <a class="nav-link active" href="#">Active</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled" href="#">Disabled</a>
  </nav>
</div>
</div>


```html
<nav class="nav">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav>
```

## Alignment

### Horizontal Alignment

Change the horizontal alignment of your nav with [flexbox utilities](https://getbootstrap.com/docs/4.0/layout/grid/#horizontal-alignment).

```html
<ul class="nav justify-content-center"> ... </nav>
<ul class="nav justify-content-end"> ... </nav>
```

### Vertical Alignment

Stack the navigation items by changing the flex item direction with the `.flex-column utility` (or  `.flex-sm-column` fot responsive variations).

<div class="doc-preview mb-0 py-3 px-3">
<div class="container">
  <nav class="nav flex-column">
    <a class="nav-link active" href="#">Active</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled" href="#">Disabled</a>
  </nav>
</div>
</div>

```html
<ul class="nav flex-column"> ... </nav>
```

## Fill and justify

Force your `.nav`’s contents **to extend the full available width** `.nav-fill`.

<div class="doc-preview mb-0 py-3 px-3">
<div class="container">
  <nav class="nav nav-fill">
    <a class="nav-item nav-link active" href="#">Active</a>
    <a class="nav-item nav-link" href="#">Link</a>
    <a class="nav-item nav-link" href="#">Link</a>
    <a class="nav-item nav-link disabled" href="#">Disabled</a>
  </nav>
</div>
</div>

```html
<ul class="nav nav-fill"> ... </nav>
```

For **equal-width list items**, use `.nav-justified`.

<div class="doc-preview mb-0 py-3 px-3">
<div class="container">
  <nav class="nav nav-justified">
    <a class="nav-item nav-link active" href="#">Active</a>
    <a class="nav-item nav-link" href="#">Link</a>
    <a class="nav-item nav-link" href="#">Link</a>
    <a class="nav-item nav-link disabled" href="#">Disabled</a>
  </nav>
</div>
</div>

```html
<ul class="nav nav-justified"> ... </nav>
```

## Also check

Refer to Bootstrap's documentation for more information.

* [Working with flex utilities][0]
* [Regarding accessibility][1]
* [Using dropdowns][2]
  * [Tabs with dropdowns][3]
  * [Pills with dropdowns][4]
* [JavaScript behavior][5]
  * [Using data attributes][6]
  * [Via JavaScript][7]
  * [Fade effect][8]
  * [Methods][9]
  * [Events][10]

[0]: https://getbootstrap.com/docs/4.0/components/navs/#working-with-flex-utilities
[1]: https://getbootstrap.com/docs/4.0/components/navs/#regarding-accessibility
[2]: https://getbootstrap.com/docs/4.0/components/navs/#using-dropdowns
[3]: https://getbootstrap.com/docs/4.0/components/navs/#tabs-with-dropdowns
[4]: https://getbootstrap.com/docs/4.0/components/navs/#pills-with-dropdowns
[5]: https://getbootstrap.com/docs/4.0/components/navs/#javascript-behavior
[6]: https://getbootstrap.com/docs/4.0/components/navs/#using-data-attributes
[7]: https://getbootstrap.com/docs/4.0/components/navs/#via-javascript
[8]: https://getbootstrap.com/docs/4.0/components/navs/#fade-effect
[9]: https://getbootstrap.com/docs/4.0/components/navs/#methods
[10]: https://getbootstrap.com/docs/4.0/components/navs/#events