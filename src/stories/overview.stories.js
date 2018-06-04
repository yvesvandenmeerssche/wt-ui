import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';

// Readme files
import About from './overview/about.md';
import Dependencies from './overview/dependencies.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


//OVERVIEW
storiesOf('Overview', module)

  // About
  .add('About', doc(About))
  // Dependencies
  .add('Dependencies', doc(Dependencies))
