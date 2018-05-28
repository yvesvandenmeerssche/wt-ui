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

module.exports = {
  withPreview,
  withCodePreview,
  withCleanPreview,
  withLayoutPreview,
  withUnborderedPreview,
}
