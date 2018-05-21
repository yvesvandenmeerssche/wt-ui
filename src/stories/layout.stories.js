import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { withReadme, withDocs, doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';

// Readme files
import Grid from './layout/grid.md';
import MediaObject from './layout/media-object.md';
import LayoutUtilities from './layout/layout-utilities.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


const withUnborderedPreview = withDocs({
  PreviewComponent: ({ children }) => (
    <div
      style={{
        padding: 0,
        border: 0,
        margin: '25px 0',
      }}
    >
      {children}
    </div>
  )
});


storiesOf('Layout', module)
  .add('Grid', doc(Grid))
  .add('Media Object', doc(MediaObject))
  .add('Utilities for layout', doc(LayoutUtilities))
