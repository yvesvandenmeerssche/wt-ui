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
import InputGroup from './controls/input-group.md';
import InputGroup__Subscription from './controls/input-group__subscribe.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// BUTTON
storiesOf('Controls/Button', module)

  // Overview
  .add('Overview', withCodePreview(Button, () =>
    <div>
        <h6 className="mb-1">Primary <span class="text-muted">( .btn-primary )</span></h6>
        <div className="mb-2 px-1">
          <button type="button" className="mr-1 mr-sm-2 btn btn-primary btn-sm">Small</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-primary">Default</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-primary btn-lg">Large</button>
        </div>

        <h6 className="mb-1">Secondary <span class="text-muted">( .btn-outline-light )</span></h6>
        <div className="bg--grad mb-2 p-1">
          <button type="button" className="mr-1 mr-sm-2 btn btn-outline-light btn-sm">Small</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-outline-light">Default</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-outline-light btn-lg">Large</button>
        </div>

        <h6 className="mb-1">Secondary <span class="text-muted">( .btn-outline-dark )</span></h6>
        <div className="mb-2 px-1">
          <button type="button" className="mr-1 mr-sm-2 btn btn-outline-dark btn-sm">Small</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-outline-dark">Default</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-outline-dark btn-lg">Large</button>
        </div>

        <h6 className="mb-1">Accent <span class="text-muted">( .btn--accent )</span></h6>
        <div className="mb-2 px-1">
          <button type="button" className="mr-1 mr-sm-2 btn btn--accent btn-sm">Small</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn--accent">Default</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn--accent btn-lg">Large</button>
        </div>

        <h6 className="mb-1">Subtle <span class="text-muted">( .btn-light )</span></h6>
        <div className="mb-2 px-1">
          <button type="button" className="mr-1 mr-sm-2 btn btn-light btn-sm">Small</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-light">Default</button>
          <button type="button" className="mr-1 mr-sm-2 btn btn-light btn-lg">Large</button>
        </div>

        <h6 className="mb-1">Minimal <span class="text-muted">( .btn-link )</span></h6>
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
      <hr className="my-1"/>
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
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div className="form-check mb-1">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  ))


storiesOf('Controls/Input Group', module)
  // Input Group
  .add('Overview', withCodePreview(InputGroup, () =>
    <div >
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">@example.com</span>
        </div>
      </div>

      <label htmlFor="basic-url">Your vanity URL</label>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
        </div>
        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>
        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
        <div className="input-group-append">
          <span className="input-group-text">.00</span>
        </div>
      </div>

      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">With textarea</span>
        </div>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  ))
  // Subscription
  .add('Subscription', withCodePreview(InputGroup__Subscription, () =>
  <div>
    <form action="#" className="input-group mb-2">
        <input type="email" className="form-control form-control-lg" placeholder="Enter e-mail"/>
        <div className="input-group-append">
          <button className="btn btn-block btn-lg btn-primary" type="submit">
            Subscribe
          </button>
        </div>
    </form>

    <p className="mb-2">If you want to make the component responsive add the <code>.input-group--responsive</code> modifier,
    the text field and the button will be displayed one on top of the other on small viewports.</p>

    <form action="#" className="input-group input-group--responsive">
      <input type="email" className="form-control form-control-lg" placeholder="Enter e-mail"/>
      <div className="input-group-append">
        <button className="btn btn-block btn-lg btn-primary" type="submit">
          Subscribe
        </button>
      </div>
    </form>

  </div>
))
