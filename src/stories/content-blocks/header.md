# Header

The `#app-header` component is a content block intended to display header information. It must be used only once on each page.

Its default background color is equivalento to the "info" color, but it can be changed usig the background utility classes, or by adding the `.app-header--themed` modifier class to the weapper.

<!-- STORY -->

```html
<header id="app-header" class="app-header--themed">
  <h1>
    <a href="#">
      <img class="img-fluid" src="..." alt="WindingTree"/>
    </a>
  </h1>
</header>

<!-- With custom color -->

<header id="app-header" class="bg-dark">
  <h1>
    <a href="#">
      <img class="img-fluid" src="..." alt="WindingTree"/>
    </a>
  </h1>
</header>

<!-- Themed -->

<header id="app-header" class="app-header--themed">
  <h1>
    <a href="#">
      <img class="img-fluid" src="..." alt="WindingTree"/>
    </a>
  </h1>
</header>
```