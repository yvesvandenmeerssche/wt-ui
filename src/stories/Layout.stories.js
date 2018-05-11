import React from 'react';
import { storiesOf } from "@storybook/react";
import StoryRouter from 'storybook-react-router';

// Included addons
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

// Included components
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';


/* Components - - - - - - - - - - - - - - - - - - - - - - - - */


// APP HEADER
storiesOf('Layout', module)
.addDecorator(StoryRouter())
.addDecorator(story => (
  <div style={{margin: '-20px'}}>
    {story()}
  </div>
))
.add('AppHeader', () => (
  <AppHeader/>
)).add('AppFooter', () => (
  <AppFooter/>
));

