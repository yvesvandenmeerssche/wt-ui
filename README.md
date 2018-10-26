# WINDING TREE UI
[![Build Status](https://travis-ci.org/windingtree/wt-ui.svg?branch=v1.0.0)](https://travis-ci.org/windingtree/wt-ui)

## What is it?
WT-UI is a CSS framework that can be used to speed up the UI building and keep the design consistent across different projects.
The framework is based on Bootstrap, and includes additional features.

## Quick start
### Installation
```bash
$ npm install @windingtree/wt-ui
```

### Usage
As the framework is based on Bootstrap, many components require jQuery or Popper.js to work properly.

One way to include dependencies is importing directly in source code. Note: jQuery must be included before popper.js.
```javascript
// index.jsx from wt-explorer
// https://github.com/windingtree/wt-hotel-explorer/blob/master/src/index.jsx

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '@windingtree/wt-ui/dist/styles.css';
```

You can use jQuery in your components to, for example, add and remove classes.
```javascript
// ErrorAlert/index.jsx from crypto-booking
// https://github.com/windingtree/crypto-booking/blob/master/app/src/components/ErrorAlert/index.jsx

import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

class ErrorAlert extends React.Component {
  componentDidMount() {
    const { onClose } = this.props;
    $('.alert').addClass('show');
    setTimeout(() => {
      $('.alert').removeClass('show');
      onClose();
    }, 3000);
  }
  // ...
```

### Documentation
Documentation is built with [Storybook](https://storybook.js.org/) , and hosted by [Github pages](https://ui.windingtree.com/).
You can run docs locally following steps detailed in Build storybook.

## Development
### Set-up
* Clone the repo.
* Use `npm install` to get the required dependencies.

### Develop
* Use `npm run storybook-dev` to start storybook in development mode.

### Build Storybook
* Use `npm run storybook-build` to build the static version of Storybook.
* Use `npm run storybook-start` to run the static version of Storybook.

### Build npm
* Use `npm run npm-build` to compile `scss` files.
