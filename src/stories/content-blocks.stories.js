import React from 'react';
import { storiesOf } from "@storybook/react";
import StoryRouter from 'storybook-react-router';

// Included addons
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withReadme, withDocs, doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

// Readme files
import Header from './content-blocks/header.md';
import Content from './content-blocks/content.md';
import Footer from './content-blocks/footer.md';


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


const withUnborderedPreview = withDocs({
  PreviewComponent: ({ children }) => (
    <div
      className="doc-preview--bordered"
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


// APP HEADER
storiesOf('Content Blocks', module)
.addDecorator(StoryRouter())
// .addDecorator(story => (
//   <div style={{margin: '-20px'}}>
//     {story()}
//   </div>
// ))
.add('Header', withCleanPreview(Header, () => (
  <div style={{margin: '0 -30px'}}>
    <AppHeader/>
  </div>
)))
.add('Content', doc(Content))
.add('Footer', withReadme(Footer, () => (
  <div style={{margin: '-20px'}}>
    <AppFooter/>
  </div>
)));
