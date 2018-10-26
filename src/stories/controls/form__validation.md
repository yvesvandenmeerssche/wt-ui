# Form Validation

Use browser defaults to validate forms, as in the example below.

For server side validation, simply add the `.is-valid` and `.is-invalid` classes to the control.

Optionally use the `.valid-feedback` or `.invalid-feedback` text next to the control.

<!-- STORY -->

```html

<form>
  <div class="form-row">
    <div class="col-md-4 mb-1">
      <label for="validationDefault01">First name</label>
      <input type="text" id="validationDefault01" placeholder="First name" value="Mark" required/>
    </div>
    <div class="col-md-4 mb-1">
      <label for="validationDefault02">Last name</label>
      <input type="text" id="validationDefault02" placeholder="Last name" value="Otto" required/>
    </div>
    <div class="col-md-4 mb-1">
      <label for="validationDefaultUsername">Username</label>
      <input type="text" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>

<hr className="my-2"/>

<form>
  <!-- Input -->
  <div className="form-group">
    <label for="exampleInputValid">Email address</label>
    <input className="is-valid" type="email" id="exampleInputValid" placeholder="name@example.com"/>
    <div class="valid-feedback">Looks good!</div>
  </div>

  <div className="form-group">
    <label for="exampleInputInvalid">Email address</label>
    <input className="is-invalid" type="email" id="exampleInputInvalid" placeholder="name@example.com"/>
    <div class="invalid-feedback">Please enter a valid email address.</div>
  </div>

  <!-- Select -->
      <div className="form-group">
        <label for="exampleSelect">Example select</label>
        <select id="exampleSelect" className="is-invalid">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>

  <!-- Textarea -->
      <div className="form-group mb-1">
        <label for="exampleTextArea">Example textarea</label>
        <textarea id="exampleTextArea" rows="3" className="is-invalid"></textarea>
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
      <div className="form-group mb-1">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input is-invalid" id="customCheck1" />
          <label className="custom-control-label" for="customCheck1">Option 1</label>
        </div>
        <div className="custom-control custom-checkbox mb-1">
          <input type="checkbox" className="custom-control-input" id="customCheck2"/>
          <label className="custom-control-label" for="customCheck2">Option 2</label>
        </div>

        <div className="custom-control custom-radio">
          <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input is-invalid" checked/>
          <label className="custom-control-label" for="customRadio1">Option 1</label>
        </div>
        <div className="custom-control custom-radio mb-1">
          <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
          <label className="custom-control-label" for="customRadio2">Option 2</label>
        </div>
      </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
```
