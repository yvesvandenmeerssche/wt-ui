# Button Group Sizing

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to each `.btn-group`, including each one when nesting multiple groups.

<p><b>Note:</b> <em>These variants were not used on the website and the styles must be reviewed.</em></p>

<!-- STORY -->

```html
<div class="btn-group btn-group-lg" role="group" aria-label="...">...</div>
<div class="btn-group" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-sm" role="group" aria-label="...">...</div>
```