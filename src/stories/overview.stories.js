import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { withReadme, withDocs, doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';

// Readme files
import About from './overview/about.md';
import Dependencies from './overview/dependencies.md';


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


storiesOf('Overview', module)
  .add('About', doc(About))
  .add('Dependencies', doc(Dependencies))
