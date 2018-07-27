# Loader

Loaders can be created using the `.mdi` icons and adding the `.mdi-spin` modifier. Icons must be green by default, so you should add the `.text-primary` utility class.

To simplify the markup we created a `.loader` container that automatically centers the icon and apply the spin animation to it.

If necesary, add an inline style to the `.loader`to set its height, the icon will be placed on its center.

<!-- STORY -->

```html

<!-- Basic example -->
<i class="mdi mdi-loading mdi-36px mdi-spin text-primary"/>


<!-- In buttons, with .text-color helper classes -->
<button class="btn btn-primary disabled mr-1" disabled>
  <i class="mdi mdi-loading mdi-spin text-dark"/> Loading...
</button>

<button class="btn btn-secondary disabled" disabled>
  <i class="mdi mdi-loading mdi-spin text-light"/> Loading...
</button>


<!-- Inside a loader container -->
<div class="loader">
  <i class="mdi mdi-loading mdi-36px"/>
</div>


<!-- Inside a loader container, with text -->
<div class="loader" style="height: 250px; border: 1px solid #999">
  <div>
    <i class="mdi mdi-loading mdi-36px"/>
    <p>Loading... </p>
  </div>
</div>
```