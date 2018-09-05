# Alert

<p class="lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>

Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight **required** contextual classes (e.g., `.alert-success`). For inline dismissal, use the [alerts jQuery plugin](https://getbootstrap.com/docs/4.0/components/alerts/#dismissing).

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

<!-- STORY -->

```html
<div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  This is a secondary alert with an <a class="alert-link" href="#">example link</a>.
</div>
<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  This is a info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  This is a light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  This is a dark alert—check it out!
</div>

<!-- Dismisable alert -->

<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

<!-- Alert with additional content -->

<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
```

## Also check

Refer to Bootstrap's documentation for more information.

- [Examples][0]
  - [Link color][1]
  - [Additional content][2]
  - [Dismissing][4]
- [JavaScript behavior][5]
  - [Triggers][6]
  - [Methods][7]
  - [Events][8]

[0]: https://getbootstrap.com/docs/4.0/components/alerts/#examples
[1]: https://getbootstrap.com/docs/4.0/components/alerts/#link-color
[2]: https://getbootstrap.com/docs/4.0/components/alerts/#additional-content
[4]: https://getbootstrap.com/docs/4.0/components/alerts/#dismissing
[5]: https://getbootstrap.com/docs/4.0/components/alerts/#javascript-behavior
[6]: https://getbootstrap.com/docs/4.0/components/alerts/#triggers
[7]: https://getbootstrap.com/docs/4.0/components/alerts/#methods
[8]: https://getbootstrap.com/docs/4.0/components/alerts/#events