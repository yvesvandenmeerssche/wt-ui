import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';
import { withCodePreview } from './HOCs/with-docs'

// Readme files
import Grid from './layout/grid.md';
import Grid__Container from './layout/grid__container.md';
import Grid__Row from './layout/grid__row.md';
import Grid__Col from './layout/grid__col.md';
import MediaObject from './layout/media-object.md';
import LayoutUtilities from './layout/layout-utilities.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// LAYOUT
storiesOf('Layout', module)

  // Grid
  .add('Grid', doc(Grid))
  // Media object
  .add('Media Object', withCodePreview(MediaObject, () =>
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
  // Utilities for layout
  .add('Utilities for layout', doc(LayoutUtilities))


  // GRID COMPONENTS
  storiesOf('Layout/-Grid Components', module)

    //Container
    .add('Container', doc(Grid__Container))
    //Row
    .add('Row', doc(Grid__Row))
    //Column
    .add('Column', doc(Grid__Col))
