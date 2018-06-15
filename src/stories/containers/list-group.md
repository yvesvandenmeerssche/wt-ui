# List Group

<p class="lead">List groups are a flexible and powerful component for displaying a series of content</p>

The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow.

Add `.active` or `.disabled` to a `.list-group-item` to indicate its state.

Use `<a>`s or `<button>`s to create actionable list group items with hover, disabled, and active states by adding `.list-group-item-action`.

Add `.list-group-flush` to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).

Add badges to any list group item to show unread counts, activity, and more with the help of some utilities.

Add nearly any HTML within, even for linked list groups, with the help of flexbox utilities.

<!-- STORY -->

```html
<!-- Simple list gloup -->

<ul class="list-group">
  <li class="list-group-item active">Cras justo odio <span class="badge badge-primary badge-pill">14</span></li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item disabled">Vestibulum at eros</li>
</ul>

<!-- Actionable list gloup -->

<div class="list-group list-group-flush">
  <a href="#" class="list-group-item list-group-item-action active">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in <span class="badge badge-primary badge-pill">14</span></a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>
```

## Also check

Refer to Bootstrap's documentation for more information.

- [Basic example][0]
- [Active items][1]
- [Disabled items][2]
- [Links and buttons][3]
- [Flush][4]
- [Contextual classes][5]
- [With badges][6]
- [Custom content][7]
- [JavaScript behavior][8]
  - [Using data attributes][9]
  - [Via JavaScript][10]
  - [Fade effect][11]
  - [Methods][12]
  - [Events][13]

[0]: https://getbootstrap.com/docs/4.0/components/list-group/#basic-example
[1]: https://getbootstrap.com/docs/4.0/components/list-group/#active-items
[2]: https://getbootstrap.com/docs/4.0/components/list-group/#disabled-items
[3]: https://getbootstrap.com/docs/4.0/components/list-group/#links-and-buttons
[4]: https://getbootstrap.com/docs/4.0/components/list-group/#flush
[5]: https://getbootstrap.com/docs/4.0/components/list-group/#contextual-classes
[6]: https://getbootstrap.com/docs/4.0/components/list-group/#with-badges
[7]: https://getbootstrap.com/docs/4.0/components/list-group/#custom-content
[8]: https://getbootstrap.com/docs/4.0/components/list-group/#javascript-behavior
[9]: https://getbootstrap.com/docs/4.0/components/list-group/#using-data-attributes
[10]: https://getbootstrap.com/docs/4.0/components/list-group/#via-javascript
[11]: https://getbootstrap.com/docs/4.0/components/list-group/#fade-effect
[12]: https://getbootstrap.com/docs/4.0/components/list-group/#methods
[13]: https://getbootstrap.com/docs/4.0/components/list-group/#events