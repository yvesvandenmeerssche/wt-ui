# Header

The `#app-header` component is a container for the logo and main navigation bar. It must be used only once on each page.

Combine with the modifier class `.header-sticky` to fix theheader on the top of the page.

_Please refer to the Navbar and Navbar (Animated) components in the Navigation section for more information._

<!-- STORY -->

```html
<header id="app-header" class="header-sticky">
  <nav class="navbar navbar-expand-xl navbar-light" id="navbar">
    ...
  </nav>
</header>

<div id="app-content">
  ...
</div>
```