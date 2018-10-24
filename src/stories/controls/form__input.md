# Form Input

Be sure to use an appropriate `type` attribute on all inputs (e.g., `email` for email address or `number` for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

Input size can be changed using CSS modifier classes `input--sm` and `input--lg`.

<!-- STORY -->

```html
<form>
  <div className="form-group">
    <label htmlFor="defaultInput">Input</label>
    <input type="text" id="defaultInput" aria-describedby="sampleInput" placeholder="Default input"/>
    <small id="inputHelp" className="form-text">We'll never share your email with anyone else.</small>
  </div>

  <div className="form-group">
    <input type="text" className="input--sm" aria-describedby="sampleInputSmall" placeholder="Small input"/>
  </div>

  <div className="form-group">
    <input type="text" className="input--lg" aria-describedby="sampleInputLarge" placeholder="Large input"/>
  </div>
</form>
```
