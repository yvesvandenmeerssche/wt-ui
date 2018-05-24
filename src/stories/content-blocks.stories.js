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


const withPreview = withDocs({
  PreviewComponent: ({ children }) =>
    <div className="doc-preview"> {children} </div>
});

const withCodePreview = withDocs({
  PreviewComponent: ({ children }) =>
    <div className="doc-preview mb-0"> {children} </div>
});

const withCleanPreview = withDocs({
  PreviewComponent: ({ children }) =>
    <div className="doc-preview doc-preview--clean"> {children} </div>
});

const withLayoutPreview = withDocs({
  PreviewComponent: ({ children }) =>
    <div className="doc-preview doc-preview--layout"> {children} </div>
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
.add('Header', withLayoutPreview(Header, () => (
    <AppHeader/>
)))
.add('Content', doc(Content))
.add('Footer', withLayoutPreview(Footer, () => (
    <AppFooter/>
)));
