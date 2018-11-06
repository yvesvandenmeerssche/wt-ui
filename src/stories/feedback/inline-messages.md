# Inline Messages

<p class="lead">Use the inline messages to show status information or provide contextual feedback to user actions.</p>

Inline messages are available for any length of text, but is recommended to keep the messages short.

To create a message wrapp the text in an element with `.msg` class, combine it with one of the following contextual classes depending on the case.

- `.msg-neutral` for informtaion which doesn't represent a particular feedback.
- `.msg-disabled` to indicate unavailability.
- `.msg-[success|info|warning|danger]` to display feedback information, or complementary information.

### Icons

Icons are optional, but recomended to use, for better alignment place them inside a `<span>` with the `.msg-icon` class.

You can use a diferent icons for the neutral messages, but limit to the `.mdi-check-circle`, `.mdi-information-outline`, and `.mdi-close-octagon` for the feedbak messages.

### Combined cases

Feel free to combine the neutral styles and feedback styles as shown below.

<!-- STORY -->

```html
<h6>Neutral styles</h6>
<p class="msg msg-neutral" role="notification">
  <span class="msg-icon">
    <i class="mdi mdi-calendar"/>
  </span>
  Inline neutral message
</p>
<p class="msg msg-disabled" role="notification">
  <span class="msg-icon">
    <i class="mdi mdi-calendar"/>
  </span>
  Inline disabled message
</p>

<h6 class="mt-1">Feedback styles</h6>
<p class="msg msg-success" role="notification">
  <span class="msg-icon">
    <i class="mdi mdi-check-circle"/>
  </span>
  Inline succes message
</p>
<p class="msg msg-info" role="notification">
  <span class="msg-icon">
    <i class="mdi mdi-information-outline"/>
  </span>
  Inline info message
</p>
<p class="msg msg-warning" role="notification">
  <span class="msg-icon">
    <i class="mdi mdi-information-outline"/>
  </span>
  Inline warning message
</p>
<p class="msg msg-danger" role="notification">
  <span class="msg-icon">
    <i class="mdi mdi-close-octagon"/>
  </span>
  Inline danger message
</p>
```

