# Form Select

Styles are limited to the `<select>`’s initial appearance and cannot modify the `<option>`s due to browser limitations.

Select size can be changed using CSS modifier classes `select-sm` and `select-lg`.

<!-- STORY -->

```html
<div className="form-group">
  <label htmlFor="defaultSelect">Select</label>
  <select id="defaultSelect">
    <option selected>Default select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div className="form-group">
  <select className="select-sm">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div className="form-group">
  <select className="select-lg">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
```
