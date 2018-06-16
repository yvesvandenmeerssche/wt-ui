import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { doc } from 'storybook-readme';

// Included components
import { withCleanPreview, withCodePreview, } from './HOCs/with-docs';

// Readme files
import Badge from './feedback/badge.md';
import Progress from './feedback/progress.md';
import Popover from './feedback/popover.md';
import Tooltip from './feedback/tooltip.md';
import Alert from './feedback/alert.md';
import {withPopover, withTooltip} from "./HOCs/bootstrap";


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

storiesOf('Feedback', module)

  // Badge
  .add('Badge', withCodePreview(Badge, () =>
    <div>
      <h1>Example heading <span className="badge badge-secondary">New</span></h1>
      <h2>Example heading <span className="badge badge-secondary">New</span></h2>
      <h3>Example heading <span className="badge badge-secondary">New</span></h3>
      <h4>Example heading <span className="badge badge-secondary">New</span></h4>
      <h5>Example heading <span className="badge badge-secondary">New</span></h5>
      <h6>Example heading <span className="badge badge-secondary">New</span></h6>

      <hr/>

      <button type="button" className="btn btn-primary">
        Notifications <span className="badge badge-light">4</span>
      </button>

      <hr/>

      <span className="mr-1 badge badge-pill badge-primary">Primary</span>
      <span className="mr-1 badge badge-pill badge-secondary">Secondary</span>
      <span className="mr-1 badge badge-pill badge-success">Success</span>
      <span className="mr-1 badge badge-pill badge-danger">Danger</span>
      <span className="mr-1 badge badge-pill badge-warning">Warning</span>
      <span className="mr-1 badge badge-pill badge-info">Info</span>
      <span className="mr-1 badge badge-pill badge-light">Light</span>
      <span className="mr-1 badge badge-pill badge-dark">Dark</span>

      <hr/>

      <a href="#" className="mr-1 badge badge-primary">Primary</a>
      <a href="#" className="mr-1 badge badge-secondary">Secondary</a>
      <a href="#" className="mr-1 badge badge-success">Success</a>
      <a href="#" className="mr-1 badge badge-danger">Danger</a>
      <a href="#" className="mr-1 badge badge-warning">Warning</a>
      <a href="#" className="mr-1 badge badge-info">Info</a>
      <a href="#" className="mr-1 badge badge-light">Light</a>
      <a href="#" className="mr-1 badge badge-dark">Dark</a>
    </div>
  ))
  // Progress
  .add('Progress', withCodePreview(Progress, () =>
  <div>
    <div className="progress mb-3">
      <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
    </div>
    <div className="progress mb-3">
      <div className="progress-bar bg-success" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
    </div>
    <div className="progress mb-3">
      <div className="progress-bar bg-info" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
    </div>

    <br/>

    <div className="progress mb-3" style={{height: 3}}>
      <div className="progress-bar bg-warning" role="progressbar" style={{width: "25%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

    <div className="progress mb-3" style={{height: 30}}>
      <div className="progress-bar bg-danger" role="progressbar" style={{width: "50%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">50%</div>
    </div>

  </div>
  ))
  // Popover
  .add('Popover', withCodePreview(Popover, withPopover(() =>
    <div>
      <button type="button" className="mr-2 btn btn-primary"  data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on top
      </button>

      <button type="button" className="mr-2 btn btn-primary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on right
      </button>

      <button type="button" className="mr-2 btn btn-primary" title="Popover title" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
      sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on bottom
      </button>

      <button type="button" className="mr-2 btn btn-primary" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on left
      </button>
    </div>
  )))
  // Tooltip
  .add('Tooltip', withCodePreview(Tooltip, withTooltip(() =>
    <div>
      <button type="button" className="mr-2 btn btn-primary"  data-toggle="tooltip" data-placement="top" title="Tooltip on top">
        Tooltip on top
      </button>

      <button type="button" className="mr-2 btn btn-primary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
        Tooltip on right
      </button>

      <button type="button" className="mr-2 btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
        Tooltip on bottom
      </button>

      <button type="button" className="mr-2 btn btn-primary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
        Tooltip on left
      </button>

      <button type="button" className="btn btn-primary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
        Tooltip with HTML
      </button>
    </div>
  )))
  // Alert
  .add('Alert', withCodePreview(Alert, () =>
    <div>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-secondary" role="alert">
        This is a secondary alert with an <a className="alert-link" href="/">example link</a>.
      </div>
      <div className="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div>
      <div className="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>
      <div className="alert alert-warning" role="alert">
        This is a warning alert—check it out!
      </div>
      <div className="alert alert-info" role="alert">
        This is a info alert—check it out!
      </div>
      <div className="alert alert-light" role="alert">
        This is a light alert—check it out!
      </div>
      <div className="alert alert-dark" role="alert">
        This is a dark alert—check it out!
      </div>

      <hr className="mt-4 mb-4"/>

      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr/>
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </div>
    </div>
  ))
