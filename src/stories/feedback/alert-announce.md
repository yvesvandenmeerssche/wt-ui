# Announce

<p class="lead">Use this alert messages modifier to show persistent information to users.</p>

Announces are made up from Alerts, you just need to add the `.alert-announce` modifier, and the message will be placed on the bottom of the viewport, on top of everything else.

Use a `.container` inside weapper the width of the content.

<!-- STORY -->

```html
<div className="alert alert-info alert-announce fade show" role="announcement">
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <i className="mdi mdi-close-circle"></i>
  </button>
  <div className="container">
    <h3 className="alert-heading">New announcement!</h3>
    <p>Aww yeah, you successfully read this <a href="#">important announcement</a> message. This example text is going to run a bit longer so that you can see how spacing within an announce works with this kind of content.</p>
  </div>
</div>
```
