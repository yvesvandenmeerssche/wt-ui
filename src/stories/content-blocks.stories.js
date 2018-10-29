import React from 'react';
import { storiesOf } from "@storybook/react";
import StoryRouter from 'storybook-react-router';

// Included addons
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';
import AppFooter from '../components/AppFooter';
import { withLayoutPreview, withCodePreview } from './HOCs/with-docs'

// Readme files
import Header from './content-blocks/header.md';
import Content from './content-blocks/content.md';
import Footer from './content-blocks/footer.md';
import SectionWrapper from './content-blocks/section-wrapper.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// APP HEADER
storiesOf('Content Blocks', module)

  .addDecorator(StoryRouter())

  // App header
  .add('Header', doc(Header))
  // App content
  .add('Content', doc(Content))
  // App footer
  .add('Footer', withLayoutPreview(Footer, () =>
    <AppFooter/>
  ))
  // Section Wrapper
  .add('Section Wrapper', withLayoutPreview(SectionWrapper, () =>
    <article className="section-wrapper bg--grad">
      <div className="container">
      <div className="row">

      <div className="col-12 col-md-5">
        <h2 className="text-white">
          Líf Token
        </h2>
        <p className="lead text-white">
          Líf is used to exchange data and value between Winding Tree smart contracts, companies and users.
        </p>
      </div>
      </div>
      </div>
    </article>
  ))
