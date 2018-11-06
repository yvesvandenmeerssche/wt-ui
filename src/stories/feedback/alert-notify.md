# Notify

<p class="lead">Use the notification messages to display feedback to specific user actions.</p>

Notifications are made up from Alerts, you just need to add the `.alert-notify` modifier, and the message will be placed in the top right conrner of the viewport (centered in small screens).

Please, keep the messages short.

<!-- STORY -->

```html
<div class="alert alert-success alert-notify fade show" role="notification">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <i className="mdi mdi-close-circle"></i>
  </button>
  <p><strong>All set!</strong> Please check your email.</p>
</div>
```
