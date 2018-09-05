import React from 'react';
import { withDocs } from 'storybook-readme';

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


module.exports = {
  withPreview,
  withCodePreview,
  withCleanPreview,
  withLayoutPreview,
}
