import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { doc } from 'storybook-readme';

// Included components
import { withCleanPreview, withCodePreview, } from './HOCs/with-docs'

// Readme files
import Button from './controls/button.md';
import Button__Tags from './controls/button__tags.md';
import Button__Outline from './controls/button__outline.md';
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


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// BUTTON
storiesOf('Controls/Button', module)

  // Overview
  .add('Overview', withCodePreview(Button, () =>
    <div>
      <button type="button" className="mr-2 btn btn-primary">Primary</button>
      <button type="button" className="mr-2 btn btn-secondary">Secondary</button>
      <button type="button" className="mr-2 btn btn-success">Success</button>
      <button type="button" className="mr-2 btn btn-danger">Danger</button>
      <button type="button" className="mr-2 btn btn-warning">Warning</button>
      <button type="button" className="mr-2 btn btn-info">Info</button>
      <button type="button" className="mr-2 btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button>
    </div>
  ))
  // Button tags
  .add('Button tags', withCodePreview(Button__Tags, () =>
    <div>
      <a className="mr-2 btn btn-primary" href="#" role="button">Link</a>
      <button className="mr-2 btn btn-primary" type="submit">Button</button>
      <input className="mr-2 btn btn-primary" type="button" value="Input"/>
      <input className="mr-2 btn btn-primary" type="submit" value="Submit"/>
      <input className="mr-2 btn btn-primary" type="reset" value="Reset"/>
    </div>
  ))
  // Outline buttons
  .add('Outline buttons', withCodePreview(Button__Outline, () =>
    <div>
      <button type="button" className="mr-2 btn btn-outline-primary">Primary</button>
      <button type="button" className="mr-2 btn btn-outline-secondary">Secondary</button>
      <button type="button" className="mr-2 btn btn-outline-success">Success</button>
      <button type="button" className="mr-2 btn btn-outline-danger">Danger</button>
      <button type="button" className="mr-2 btn btn-outline-warning">Warning</button>
      <button type="button" className="mr-2 btn btn-outline-info">Info</button>
      <button type="button" className="mr-2 btn btn-outline-light">Light</button>
      <button type="button" className="mr-2 btn btn-outline-dark">Dark</button>
    </div>
  ))
  // Button sizes
  .add('Button sizes', withCodePreview(Button__Sizes, () =>
    <div>
      <button type="button" className="mb-2 btn btn-primary btn-lg">Large button</button><br/>
      <button type="button" className="mb-2 btn btn-primary btn-sm">Small button</button><br/>
      <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
    </div>
  ))
  // Button states
  .add('Button states', withCodePreview(Button__States, () =>
    <div>
      <a href="#" className="mr-2 btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
      <button type="button" className="mr-2 btn btn-lg btn-primary" disabled>Primary button</button>
      <a href="#" className="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>
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
      <div className="mb-2 btn-group btn-group-lg" role="group" aria-label="Large button group">
        <button type="button" className="btn btn-primary">Left</button>
        <button type="button" className="btn btn-primary">Middle</button>
        <button type="button" className="btn btn-primary">Right</button>
      </div>
      <br/>
      <div className="mb-2 btn-group" role="group" aria-label="Default button group">
        <button type="button" className="btn btn-primary">Left</button>
        <button type="button" className="btn btn-primary">Middle</button>
        <button type="button" className="btn btn-primary">Right</button>
      </div>
      <br/>
      <div className="mb-2 btn-group btn-group-sm" role="group" aria-label="Small button group">
        <button type="button" className="btn btn-primary">Left</button>
        <button type="button" className="btn btn-primary">Middle</button>
        <button type="button" className="btn btn-primary">Right</button>
      </div>
    </div>
  ))
  // ButtonGroup__Nesting
  .add('Nesting', withCodePreview(ButtonGroup__Nesting, () =>
    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
      <button type="button" className="btn btn-primary">1</button>
      <button type="button" className="btn btn-primary">2</button>

      <div className="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </button>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <a className="dropdown-item" href="#">Dropdown link</a>
          <a className="dropdown-item" href="#">Dropdown link</a>
        </div>
      </div>
    </div>
  ))
  // ButtonGroup__Vertical
  .add('Vertical', withCodePreview(ButtonGroup__Vertical, () =>
    <div className="btn-group btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
      <button type="button" className="btn btn-primary">1</button>
      <button type="button" className="btn btn-primary">2</button>

      <div className="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </button>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <a className="dropdown-item" href="#">Dropdown link</a>
          <a className="dropdown-item" href="#">Dropdown link</a>
        </div>
      </div>
    </div>
  ))


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
      <div className="form-check">
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
