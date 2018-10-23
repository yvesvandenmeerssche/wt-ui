# Form

The `.form-group` class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies `margin-bottom`, but it picks up additional styles in `.form-inline` as needed. Use it with `<fieldset>`s, `<div>`s, or nearly any other element.

<!-- STORY -->

```html
<form>
  <!-- Input -->
  <div className="form-group">
    <label for="exampleInput">Email address</label>
    <input type="email" id="exampleInput" placeholder="name@example.com"/>
  </div>

  <!-- Select -->
  <div className="form-group">
    <label for="exampleSelect">Example select</label>
    <select id="exampleSelect">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>

  <!-- Textarea -->
  <div className="form-group">
    <label for="exampleTextArea">Example textarea</label>
    <textarea id="exampleTextArea" rows="3"></textarea>
  </div>

  <!-- Checkboxes & Radios-->
  <div className="form-group">

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

    <h6 className="my-1 text--sm">Radio Buttons</h6>

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
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
```
