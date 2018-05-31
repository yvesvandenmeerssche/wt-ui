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

  // ABOUT
  .add('About', doc(About))

  // DEPENDENCIES
  .add('Dependencies', doc(Dependencies))
