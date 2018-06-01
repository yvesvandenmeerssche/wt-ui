import React from 'react';
import { storiesOf } from "@storybook/react";
import StoryRouter from 'storybook-react-router';

// Included addons
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import { withLayoutPreview } from './HOCs/with-docs'

// Readme files
import Header from './content-blocks/header.md';
import Content from './content-blocks/content.md';
import Footer from './content-blocks/footer.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// APP HEADER
storiesOf('Content Blocks', module)

  .addDecorator(StoryRouter())

  // App header
  .add('Header', withLayoutPreview(Header, () =>
    <AppHeader/>
  ))
  // App content
  .add('Content', doc(Content))
  // App footer
  .add('Footer', withLayoutPreview(Footer, () =>
      <AppFooter/>
  ));
