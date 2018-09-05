# Scrollspy

<p class="lead">
Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.
</p>

## How it works

Scrollspy has a few requirements to function properly:

- It must be used on a Bootstrap nav component or list group.
- Scrollspy requires `position: relative;` on the element you’re spying on, usually the `<body>`.
- When spying on elements other than the `<body>`, be sure to have a `height` set and `overflow-y: scroll;` applied.
- Anchors (`<a>`) are required and must point to an element with that id.

When successfully implemented, your nav or list group will update accordingly, moving the `.active` class from one item to the next based on their associated targets.

### Example with list-group

Scroll the area next to the list group and watch the active class. Review Bootstrap's documentation for [more examples and information](https://getbootstrap.com/docs/4.0/components/scrollspy/#example-in-navbar).

<!-- STORY -->

```html
<div id="list-example" class="list-group">
  <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
  <a class="list-group-item list-group-item-action" href="#list-item-2">Item2</a>
  <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
</div>
<div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
  <h4 id="list-item-1">Item 1</h4>
  <p>...</p>
  <h4 id="list-item-2">Item 2</h4>
  <p>...</p>
  <h4 id="list-item-3">Item 3</h4>
  <p>...</p>
  <h4 id="list-item-4">Item 4</h4>
  <p>...</p>
</div>
```
