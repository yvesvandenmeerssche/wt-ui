import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { withReadme, withDocs, doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';

// Readme files
import ReadmeBase__Intro from '../components/ReadmeBase__Intro.md';
import ReadmeBase__Headings from '../components/ReadmeBase__Headings.md';


// COMPONENTS


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


storiesOf('Base Elements', module)
  .add('Intro', doc(ReadmeBase__Intro))
  .add('Headers', withUnborderedPreview(ReadmeBase__Headings, () =>
    <Resizable
      className="resizable"
      defaultSize={{ width: 'auto', height: 'auto' }}
      bounds={'parent'}
      enable={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
    >
      <h1>Heading level 1</h1>
      <h2>Heading level 2</h2>
      <h3>Heading level 3</h3>
      <h4>Heading level 4</h4>
      <h5>Heading level 5</h5>
      <h6>Heading level 6</h6>
    </Resizable>
))


// storiesOf('Base1', module)
//   .add('Headers', withReadme(ReadmeBase__Headings, () =>
//     <div>
//       <h1>Heading level 1</h1>
//       <h2>Heading level 2</h2>
//       <h3>Heading level 3</h3>
//       <h4>Heading level 4</h4>
//       <h5>Heading level 5</h5>
//       <h6>Heading level 6</h6>
//     </div>
//   ));
