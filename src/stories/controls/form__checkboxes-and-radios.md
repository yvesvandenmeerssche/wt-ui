# Checkboxes and radios

Use `.custom-checkbox` and `.custom-radio` classes in a container `div` to customize the appearance of checkboxes and radio buttons. The `<label>` must be included always immediately after the `<input>` tag.

Add rge `.custom-checkbox--inline` and `.custom-radio--inline` modifier classes to customized component to arrange the items horizontally.

<!-- STORY -->

```html
<!-- Checkboxes -->
<div className="custom-checkbox">
  <input type="checkbox" id="checkbox" />
  <label for="checkbox">Option 1</label>
</div>
<div className="custom-checkbox">
  <input type="checkbox" id="checkbox2"/>
  <label for="checkbox2">Option 2</label>
</div>

<!-- Inline Checkboxes -->
<div className="custom-checkbox custom-checkbox--inline">
  <input type="checkbox" id="checkbox3" />
  <label for="checkbox3">Option 1</label>
</div>
<div className="custom-checkbox custom-checkbox--inline">
  <input type="checkbox" id="checkbox4"/>
  <label for="checkbox4">Option 2</label>
</div>

<h6 className="my-1 text-sm">Radio Buttons</h6>

<!-- Radio buttons -->
<div className="custom-radio">
  <input type="radio" id="radio" name="radio" checked/>
  <label for="radio">Option 1</label>
</div>
<div className="custom-radio">
  <input type="radio" id="radio1" name="radio"/>
  <label for="radio1">Option 2</label>
</div>

<!-- Inline Radio buttons -->
<div className="custom-radio custom-radio--inline">
  <input type="radio" id="radioInline" name="radioInline" checked/>
  <label for="radioInline">Option 1</label>
</div>
<div className="custom-radio custom-radio--inline">
  <input type="radio" id="radioInline1" name="radioInline"/>
  <label for="radioInline1">Option 2</label>
</div>
```
