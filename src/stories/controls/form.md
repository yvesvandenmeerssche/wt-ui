# Form

Use the form classes to opt into customized displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate `type` attribute on all inputs (e.g., `email` for email address or `number` for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

Here’s a quick example to demonstrate form's styles.

Refer to [Bootstrap's documentation](https://getbootstrap.com/docs/4.0/components/forms/#overview) to learn more on required classes, form layout, and more.

<!-- STORY -->

```html
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check mb-1">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

## Also check

Refer to Bootstrap's documentation for more information.

- [Form controls][0]
  - [Sizing][1]
  - [Readonly][2]
  - [Readonly plain text][3]
- [Checkboxes and radios][4]
  - [Default (stacked)][5]
  - [Inline][6]
  - [Without labels][7]
- [Layout][8]
  - [Form groups][9]
  - [Form grid][10]
  - [Inline forms][11]
- [Help text][12]
- [Disabled forms][13]
  - [Cross-browser compatibility][14]
- [Validation][15]
  - [How it works][16]
  - [Custom styles][17]
  - [Browser defaults][18]
  - [Server side][19]
  - [Supported elements][20]
  - [Tooltips][21]
- [Custom forms][22]
  - [Checkboxes and radios][23]
  - [Select menu][24]
  - [File browser][25]

[0]: https://getbootstrap.com/docs/4.0/components/forms/#form-controls
[1]: https://getbootstrap.com/docs/4.0/components/forms/#sizing
[2]: https://getbootstrap.com/docs/4.0/components/forms/#readonly
[3]: https://getbootstrap.com/docs/4.0/components/forms/#readonly-plain-text
[4]: https://getbootstrap.com/docs/4.0/components/forms/#checkboxes-and-radios
[5]: https://getbootstrap.com/docs/4.0/components/forms/#default-stacked
[6]: https://getbootstrap.com/docs/4.0/components/forms/#inline
[7]: https://getbootstrap.com/docs/4.0/components/forms/#without-labels
[8]: https://getbootstrap.com/docs/4.0/components/forms/#layout
[9]: https://getbootstrap.com/docs/4.0/components/forms/#form-groups
[10]: https://getbootstrap.com/docs/4.0/components/forms/#form-grid
[11]: https://getbootstrap.com/docs/4.0/components/forms/#inline-forms
[12]: https://getbootstrap.com/docs/4.0/components/forms/#help-text
[13]: https://getbootstrap.com/docs/4.0/components/forms/#disabled-forms
[14]: https://getbootstrap.com/docs/4.0/components/forms/#cross-browser-compatibility
[15]: https://getbootstrap.com/docs/4.0/components/forms/#validation
[16]: https://getbootstrap.com/docs/4.0/components/forms/#how-it-works
[17]: https://getbootstrap.com/docs/4.0/components/forms/#custom-styles
[18]: https://getbootstrap.com/docs/4.0/components/forms/#browser-defaults
[19]: https://getbootstrap.com/docs/4.0/components/forms/#server-side
[20]: https://getbootstrap.com/docs/4.0/components/forms/#supported-elements
[21]: https://getbootstrap.com/docs/4.0/components/forms/#tooltips
[22]: https://getbootstrap.com/docs/4.0/components/forms/#custom-forms
[23]: https://getbootstrap.com/docs/4.0/components/forms/#checkboxes-and-radios-1
[24]: https://getbootstrap.com/docs/4.0/components/forms/#select-menu
[25]: https://getbootstrap.com/docs/4.0/components/forms/#file-browser
