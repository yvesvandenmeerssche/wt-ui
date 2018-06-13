# Popover

Popovers rely on the 3rd party library [Popper.js](https://popper.js.org/) for positioning. You must include [popper.min.js](https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js) before bootstrap.js or use `bootstrap.bundle.min.js` / `bootstrap.bundle.js` which contains Popper.js in order for popovers to work!

Popovers require the [tooltip plugin](https://getbootstrap.com/docs/4.0/components/tooltips/) as a dependency.

Popovers are opt-in for performance reasons, so **you must initialize them yourself**.

```js
$(function () {
  $('[data-toggle="popover"]').popover()
})
```

Review [Bootstrap's documentation](https://getbootstrap.com/docs/4.0/components/popovers/) for more information.

<!-- STORY -->


```html
<button type="button" class="mr-2 btn btn-primary"  data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>

<button type="button" class="mr-2 btn btn-primary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button>

<!-- Use the title attribute to add a header to the popover. -->

<button type="button" class="mr-2 btn btn-primary" title="Popover title" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>

<!-- Use the focus trigger to dismiss popovers on the user’s next click of a different element than the toggle element. -->

<button type="button" class="mr-2 btn btn-primary" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on left
</button>
```

## Also check

Refer to Bootstrap's documentation for more information.

- [Example: Enable popovers everywhere][0]
- [Example: Using the container option][1]
- [Example][2]
  - [Four directions][3]
  - [Dismiss on next click][4]
  - [Disabled elements][5]
- [Usage][6]
  - [Options][7]
  - [Methods][8]
  - [Events][9]

[0]: https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
[1]: https://getbootstrap.com/docs/4.0/components/popovers/#example-using-the-container-option
[2]: https://getbootstrap.com/docs/4.0/components/popovers/#example
[3]: https://getbootstrap.com/docs/4.0/components/popovers/#four-directions
[4]: https://getbootstrap.com/docs/4.0/components/popovers/#dismiss-on-next-click
[5]: https://getbootstrap.com/docs/4.0/components/popovers/#disabled-elements
[6]: https://getbootstrap.com/docs/4.0/components/popovers/#usage
[7]: https://getbootstrap.com/docs/4.0/components/popovers/#options
[8]: https://getbootstrap.com/docs/4.0/components/popovers/#methods
[9]: https://getbootstrap.com/docs/4.0/components/popovers/#events