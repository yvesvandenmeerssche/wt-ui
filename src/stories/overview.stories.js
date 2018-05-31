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

storiesOf('Overview', module)
  .add('About', doc(About))
  .add('Dependencies', doc(Dependencies))
