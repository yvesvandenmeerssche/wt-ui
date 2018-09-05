# Pagination

Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

### Disabled and active states

Use `.disabled` for links that appear un-clickable and `.active` to indicate the current page. You can optionally swap out active or disabled anchors for <span>, or omit the anchor in the case of the prev/next arrows


### Sizing

Add `.pagination-lg` or `.pagination-sm` for additional sizes.

### Alignment

Change the alignment of pagination components with [flexbox utilities](https://getbootstrap.com/docs/4.0/utilities/flex/).

<!-- STORY -->

```html
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

<!-- Sizing & Alignment -->
<nav aria-label="...">
  <ul class="pagination pagination-sm justify-content-center">
    ...
  </ul>
</nav>

<nav aria-label="...">
  <ul class="pagination pagination-lg justify-content-end">
    ...
  </ul>
</nav>
```