import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { doc } from 'storybook-readme';

// Included components
import { withCleanPreview, withCodePreview, } from './HOCs/with-docs'
import { withDropdown } from "./HOCs/bootstrap";

// Readme files
import Button from './controls/button.md';
import Button__WithIcon from './controls/button__with-icon.md';
import Button__Sizes from './controls/button__sizes.md';
import Button__States from './controls/button__states.md';
import Button__Plugin from './controls/button__plugin.md';

import ButtonGroup from './controls/button-group.md';
import ButtonGroup__Toolbar from './controls/button-group__toolbar.md';
import ButtonGroup__Sizing from './controls/button-group__sizing.md';
import ButtonGroup__Nesting from './controls/button-group__nesting.md';
import ButtonGroup__Vertical from './controls/button-group__vertical.md';

import Form from './controls/form.md';
import FormValidation from './controls/form__validation.md';
import FormInput from './controls/form__input.md';
import FormSelect from './controls/form__select.md';
import FormCheckRadio from './controls/form__checkboxes-and-radios.md';
import InputGroup__Subscription from './controls/input-group__subscribe.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// BUTTON
storiesOf('Controls/Button', module)

  // Overview
  .add('Overview', withCodePreview(Button, () =>
    <div>
        <h6 className="mb-1">Primary <span className="text-muted">( .btn-primary )</span></h6>
        <div className="mb-2 px-1">
          <button type="button" className="mr-1 mr-sm-2 btn btn-primary btn-sm">Small</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-primary">Default</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-primary btn-lg">Large</button>
        </div>

        <h6 className="mb-1">Secondary <span className="text-muted">( .btn-outline-light )</span></h6>
        <div className="bg-grad mb-2 p-1">
          <button type="button" className="mr-1 mr-sm-2 btn btn-outline-light btn-sm">Small</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-outline-light">Default</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-outline-light btn-lg">Large</button>
        </div>

        <h6 className="mb-1">Secondary <span className="text-muted">( .btn-outline-dark )</span></h6>
        <div className="mb-2 px-1">
          <button type="button" className="mr-1 mr-sm-2 btn btn-outline-dark btn-sm">Small</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-outline-dark">Default</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-outline-dark btn-lg">Large</button>
        </div>

        <h6 className="mb-1">Accent <span className="text-muted">( .btn-accent )</span></h6>
        <div className="mb-2 px-1">
          <button type="button" className="mr-1 mr-sm-2 btn btn-accent btn-sm">Small</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-accent">Default</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-accent btn-lg">Large</button>
        </div>

        <h6 className="mb-1">Subtle <span className="text-muted">( .btn-light )</span></h6>
        <div className="mb-2 px-1">
          <button type="button" className="mr-1 mr-sm-2 btn btn-light btn-sm">Small</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-light">Default</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-light btn-lg">Large</button>
        </div>

        <h6 className="mb-1">Minimal <span className="text-muted">( .btn-link )</span></h6>
        <div className="mb-1 px-1">
          <button type="button" className="mr-1 mr-sm-2 btn btn-link btn-sm">Small</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-link">Default</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-link btn-lg">Large</button>
        </div>
    </div>
  ))
  // Button with icon
  .add('Button with icon', withCodePreview(Button__WithIcon, () =>
    <div>
      <button className="mr-1 mb-1 btn btn-light btn-sm" type="submit">
        <i className="mdi mdi-github-circle"/> Small
      </button>
      <button className="mr-1 mb-1 btn btn-light" type="submit">
        <i className="mdi mdi-github-circle"/> Default
      </button>
      <button className="mr-1 mb-1 btn btn-light btn-lg" type="submit">
        <i className="mdi mdi-github-circle"/> Large
      </button>
    </div>
  ))
  // Button sizes
  .add('Button sizes', withCodePreview(Button__Sizes, () =>
    <div>
      <button type="button" className="btn btn-primary btn-sm mb-1">Small button</button><br/>
      <button type="button" className="btn btn-primary btn-lg mb-1">Large button</button><br/>
      <button type="button" className="btn btn-primary btn-block">Block level button</button>
    </div>
  ))
  // Button states
  .add('Button states', withCodePreview(Button__States, () =>
    <div>
      <a href="#" className="mr-1 mb-1 btn btn-primary active" role="button" aria-pressed="true">Primary link</a>
      <button type="button" className="mr-1 mb-1 btn btn-primary" disabled>Primary button</button>
      <a href="#" className="mb-1 btn btn-primary disabled" role="button" aria-disabled="true">Primary link</a>
      <hr className="my-2"/>
      <h6 className="mb-1">Create a loading button by adding a loading icon</h6>
      <button className="btn btn-primary disabled" disabled>
        <i className="mdi mdi-loading mdi-spin text-dark"/> Loading...
      </button>
    </div>
  ))
  // Button plugins
  .add('Button plugin', doc(Button__Plugin))


// BUTTON-GROUP
storiesOf('Controls/ Button Group', module)

  // Overview
  .add('Overview', withCodePreview(ButtonGroup, () =>
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-primary">Left</button>
      <button type="button" className="btn btn-primary">Middle</button>
      <button type="button" className="btn btn-primary">Right</button>
    </div>
  ))
  // ButtonGroup__Toolbar
  .add('Toolbar', withCodePreview(ButtonGroup__Toolbar, () =>
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group mr-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-primary">1</button>
        <button type="button" className="btn btn-primary">2</button>
      </div>
      <div className="btn-group mr-2" role="group" aria-label="Second group">
        <button type="button" className="btn btn-primary">3</button>
        <button type="button" className="btn btn-primary">4</button>
        <button type="button" className="btn btn-primary">5</button>
      </div>
      <div className="btn-group" role="group" aria-label="Third group">
        <button type="button" className="btn btn-primary">6</button>
      </div>
    </div>
  ))
  // ButtonGroup__Sizing
  .add('Sizing', withCodePreview(ButtonGroup__Sizing, () =>
    <div className="bd-example">
      <div className="mb-1 btn-group btn-group-lg" role="group" aria-label="Large button group">
        <button type="button" className="btn btn-primary">Left</button>
        <button type="button" className="btn btn-primary">Middle</button>
        <button type="button" className="btn btn-primary">Right</button>
      </div>
      <br/>
      <div className="mb-1 btn-group" role="group" aria-label="Default button group">
        <button type="button" className="btn btn-primary">Left</button>
        <button type="button" className="btn btn-primary">Middle</button>
        <button type="button" className="btn btn-primary">Right</button>
      </div>
      <br/>
      <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
        <button type="button" className="btn btn-primary">Left</button>
        <button type="button" className="btn btn-primary">Middle</button>
        <button type="button" className="btn btn-primary">Right</button>
      </div>
    </div>
  ))
  // ButtonGroup__Nesting
  .add('Nesting', withCodePreview(ButtonGroup__Nesting, withDropdown(() =>
    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
      <button type="button" className="btn btn-primary">1</button>
      <button type="button" className="btn btn-primary">2</button>

      <div className="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </button>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>
  )))
  // ButtonGroup__Vertical
  .add('Vertical', withCodePreview(ButtonGroup__Vertical, withDropdown(() =>
    <div className="btn-group btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
      <button type="button" className="btn btn-primary">1</button>
      <button type="button" className="btn btn-primary">2</button>

      <div className="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </button>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>
  )))


// FORM
storiesOf('Controls/Form', module)
  // Form
  .add('Overview', withCodePreview(Form, () =>
    <form>

      <div className="form-group">
        <label for="exampleInput">Email address</label>
        <input type="email" id="exampleInput" placeholder="name@example.com"/>
      </div>

      <div className="form-group">
        <label for="exampleSelect">Example select</label>
        <select id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>

      <div className="form-group mb-1">
        <label for="exampleTextArea">Example textarea</label>
        <textarea id="exampleTextArea" rows="3"></textarea>
      </div>

      <h6 className="mb-1">Checkboxes & Radio buttons</h6>

      <div className="form-group mb-1">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="customCheck1" />
          <label className="custom-control-label" for="customCheck1">Option 1</label>
        </div>
        <div className="custom-control custom-checkbox mb-1">
          <input type="checkbox" className="custom-control-input" id="customCheck2"/>
          <label className="custom-control-label" for="customCheck2">Option 2</label>
        </div>

        <div className="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" className="custom-control-input" id="customInlineCheck2" />
          <label className="custom-control-label" for="customInlineCheck2">Option 1</label>
        </div>
        <div className="custom-control custom-checkbox custom-control-inline mb-1">
        <input type="checkbox" className="custom-control-input" id="customInlineCheck3"/>
          <label className="custom-control-label" for="customInlineCheck3">Option 2</label>
        </div>

        <div className="custom-control custom-radio">
          <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" checked/>
          <label className="custom-control-label" for="customRadio1">Option 1</label>
        </div>
        <div className="custom-control custom-radio mb-1">
          <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
          <label className="custom-control-label" for="customRadio2">Option 2</label>
        </div>

        <div className="custom-control custom-radio custom-control-inline">
          <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" checked/>
          <label className="custom-control-label" for="customRadioInline1">Option 1</label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
          <label className="custom-control-label" for="customRadioInline2">Option 2</label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>

    </form>
  ))
  // Form
  .add('Validation', withCodePreview(FormValidation, () =>

  <div>
    <form>
      <div className="form-row">
        <div className="col-md-4 mb-1">
          <label for="validationDefault01">First name</label>
          <input type="text" id="validationDefault01" placeholder="First name" value="Mark" required/>
        </div>
        <div className="col-md-4 mb-1">
          <label for="validationDefault02">Last name</label>
          <input type="text" id="validationDefault02" placeholder="Last name" value="Otto" required/>
        </div>
        <div className="col-md-4 mb-1">
          <label for="validationDefaultUsername">Username</label>
          <input type="text" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required/>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>

    <hr className="my-2"/>

    <form>
      <div className="form-group">
        <label for="exampleInputValid">Email address</label>
        <input className="is-valid" type="email" id="exampleInputValid" placeholder="name@example.com"/>
        <div className="valid-feedback">Looks good!</div>
      </div>

      <div className="form-group">
        <label for="exampleInputInvalid">Email address</label>
        <input className="is-invalid" type="email" id="exampleInputInvalid" placeholder="name@example.com"/>
        <div className="invalid-feedback">Please enter a valid email address.</div>
      </div>


      <div className="form-group">
        <label for="exampleSelect">Example select</label>
        <select id="exampleSelect" className="is-invalid">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>

      <div className="form-group mb-1">
        <label for="exampleTextArea">Example textarea</label>
        <textarea id="exampleTextArea" rows="3" className="is-invalid"></textarea>
      </div>

      <h6 className="mb-1">Checkboxes & Radio buttons</h6>

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
    </div>
  ))
  // Form Input
  .add('Input', withCodePreview(FormInput, () =>
    <form>
      <div className="form-group">
        <label htmlFor="defaultInput">Input</label>
        <input type="text" id="defaultInput" aria-describedby="sampleInput" placeholder="Default input"/>
        <small id="inputHelp" className="form-text">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group mt-1">
        <input type="text" className="input-sm" aria-describedby="sampleInputSmall" placeholder="Small input"/>
      </div>

      <div className="form-group">
        <input type="text" className="input-lg" aria-describedby="sampleInputLarge" placeholder="Large input"/>
      </div>
    </form>
  ))
  // Form Select
  .add('Select', withCodePreview(FormSelect, () =>
    <form>
      <div className="form-group">
        <label htmlFor="defaultSelect">Select</label>
        <select id="defaultSelect">
          <option selected>Default select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="form-group mt-1">
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
    </form>
  ))
  // Form Checkboxes and Radios
  .add('Checkboxes and Radios', withCodePreview(FormCheckRadio, () =>
    <form>
      <div className="custom-checkbox">
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">Option 1</label>
      </div>
      <div className="custom-checkbox mb-1">
        <input type="checkbox" id="checkbox2"/>
        <label for="checkbox2">Option 2</label>
      </div>

      <div className="custom-checkbox custom-checkbox--inline">
        <input type="checkbox" id="checkbox3" />
        <label for="checkbox3">Option 1</label>
      </div>
      <div className="custom-checkbox custom-checkbox--inline mb-1">
        <input type="checkbox" id="checkbox4"/>
        <label for="checkbox4">Option 2</label>
      </div>

      <h6 className="my-1 text-sm">Radio Buttons</h6>

      <div className="custom-radio">
        <input type="radio" id="radio" name="radio" checked/>
        <label for="radio">Option 1</label>
      </div>
      <div className="custom-radio mb-1">
        <input type="radio" id="radio1" name="radio"/>
        <label for="radio1">Option 2</label>
      </div>

      <div className="custom-radio custom-radio--inline">
        <input type="radio" id="radioInline" name="radioInline" checked/>
        <label for="radioInline">Option 1</label>
      </div>
      <div className="custom-radio custom-radio--inline">
        <input type="radio" id="radioInline1" name="radioInline"/>
        <label for="radioInline1">Option 2</label>
      </div>
    </form>
  ))
  // Subscription
  .add('Subscription', withCodePreview(InputGroup__Subscription, () =>
  <div>
    <form action="#" className="input-group mb-1">
      <input type="email" className="form-control form-control-sm" placeholder="Enter e-mail"/>
      <div className="input-group-append">
        <button className="btn btn-block btn-sm btn-primary" type="submit">
          Subscribe
        </button>
      </div>
    </form>

    <form action="#" className="input-group mb-1">
      <input type="email" className="form-control" placeholder="Enter e-mail"/>
      <div className="input-group-append">
        <button className="btn btn-block btn-primary" type="submit">
          Subscribe
        </button>
      </div>
    </form>

    <form action="#" className="input-group mb-1">
      <input type="email" className="form-control form-control-lg" placeholder="Enter e-mail"/>
      <div className="input-group-append">
        <button className="btn btn-block btn-lg btn-primary" type="submit">
          Subscribe
        </button>
      </div>
    </form>

    <h5 className="mt-2">Responsive version</h5>

    <p className="my-1">If you want to make the component responsive add the <code>.input-group--responsive</code> modifier,
    the text field and the button will be displayed one on top of the other on small viewports.</p>

    <form action="#" className="input-group input-group--responsive mb-1">
      <input type="email" className="form-control form-control-sm" placeholder="Enter e-mail"/>
      <div className="input-group-append">
        <button className="btn btn-block btn-primary btn-sm" type="submit">
          Subscribe
        </button>
      </div>
    </form>

    <form action="#" className="input-group input-group--responsive mb-1">
      <input type="email" className="form-control" placeholder="Enter e-mail"/>
      <div className="input-group-append">
        <button className="btn btn-block btn-primary" type="submit">
          Subscribe
        </button>
      </div>
    </form>

    <form action="#" className="input-group input-group--responsive mb-1">
      <input type="email" className="form-control form-control-lg" placeholder="Enter e-mail"/>
      <div className="input-group-append">
        <button className="btn btn-block btn-primary btn-lg" type="submit">
          Subscribe
        </button>
      </div>
    </form>

  </div>
))
