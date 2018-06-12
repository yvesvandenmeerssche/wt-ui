# Tooltip

Popovers rely on the 3rd party library [Popper.js](https://popper.js.org/) for positioning. You must include [popper.min.js](https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js) before bootstrap.js or use `bootstrap.bundle.min.js` / `bootstrap.bundle.js` which contains Popper.js in order for popovers to work!

Popovers require the [tooltip plugin](https://getbootstrap.com/docs/4.0/components/tooltips/) as a dependency.

Popovers are opt-in for performance reasons, so **you must initialize them yourself**.

```js
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
```

Tooltips with zero-length titles are never displayed.

Review [Bootstrap's documentation](https://getbootstrap.com/docs/4.0/components/tooltips/) for more information.

<!-- STORY -->

```html
<button type="button" class="mr-2 btn btn-primary"  data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Tooltip on top
</button>

<button type="button" class="mr-2 btn btn-primary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
  Tooltip on right
</button>

<button type="button" class="mr-2 btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>

<button type="button" class="mr-2 btn btn-primary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
  Tooltip on left
</button>

<!-- Tooltip with HTML -->

<button type="button" class="btn btn-primary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
```

## Also check

Refer to Bootstrap's documentation for more information.

- [Example: Enable tooltips everywhere][0]
- [Examples][1]
- [Usage][2]
  - [Markup][3]
  - [Disabled elements][4]
  - [Options][5]
  - [Methods][6]
  - [Events][7]

[0]: https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
[1]: https://getbootstrap.com/docs/4.0/components/tooltips/#examples
[2]: https://getbootstrap.com/docs/4.0/components/tooltips/#usage
[3]: https://getbootstrap.com/docs/4.0/components/tooltips/#markup
[4]: https://getbootstrap.com/docs/4.0/components/tooltips/#disabled-elements
[5]: https://getbootstrap.com/docs/4.0/components/tooltips/#options
[6]: https://getbootstrap.com/docs/4.0/components/tooltips/#methods
[7]: https://getbootstrap.com/docs/4.0/components/tooltips/#events