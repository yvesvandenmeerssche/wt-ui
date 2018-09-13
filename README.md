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
```javascript
import '@windingtree/wt-ui/dist/styles.css';
```

### Documentation
Documentation is built with [Storybook](https://storybook.js.org/) , and hosted by [Github pages](https://windingtree.github.io/wt-ui).
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
