import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { withReadme, withDocs, doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';

// Readme files
import Grid from './layout/grid.md';
import Grid__Container from './layout/grid__container.md';
import Grid__Row from './layout/grid__row.md';
import Grid__Col from './layout/grid__col.md';
import Grid__Adjustment from './layout/grid__adjustment.md';
import MediaObject from './layout/media-object.md';
import LayoutUtilities from './layout/layout-utilities.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


const withSimplePreview = withDocs({
  PreviewComponent: ({ children }) => (
    <div
      className="doc-preview"
      style={{
        padding: '10px 25px',
        border: '1px solid #ddd',
        margin: '25px 0',
        borderRadius: 3,
      }}
    >
      {children}
    </div>
  )
});


const withCleanPreview = withDocs({
  PreviewComponent: ({ children }) => (
    <div
      className="doc-preview--clean"
      style={{
        margin: '25px 0',
      }}
    >
      {children}
    </div>
  )
});


storiesOf('Layout', module)

  .add('Grid', doc(Grid))
    .add('    Container', doc(Grid__Container))
    .add('    Row', doc(Grid__Row))
    .add('    Column', doc(Grid__Col))
    .add('    Grid Adjustment', doc(Grid__Adjustment))

  .add('Media Object', withSimplePreview(MediaObject, () =>
    <div className="media">
      <img className="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image"/>
      <div className="media-body">
        <h5 className="mt-0">Media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
        Fusce condimentum nunc ac nisi vulputate fringilla.
      </div>
    </div>
  ))


  .add('Utilities for layout', doc(LayoutUtilities))
