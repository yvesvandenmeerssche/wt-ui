# Button Group Toolbar

Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.

<!-- STORY -->

```html
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
  </div>
  <div class="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
    <button type="button" class="btn btn-primary">5</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-primary">6</button>
  </div>
</div>
```

<small>Feel free to mix input groups with button groups in your toolbars. Review [Bootstrap's documentation][0] for more information.</small>

[0]: https://getbootstrap.com/docs/4.0/components/button-group/#button-toolbar