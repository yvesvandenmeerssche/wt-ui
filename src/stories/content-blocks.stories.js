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

  // HEADER
  .add('Header', withLayoutPreview(Header, () => (
    <AppHeader/>
  )))

  // APP CONTENT
  .add('Content', doc(Content))

  // APP FOOTER
  .add('Footer', withLayoutPreview(Footer, () => (
      <AppFooter/>
  )));
