import React from 'react';
import { storiesOf } from '@storybook/react';


/* Components - - - - - - - - - - - - - - - - - - - - - - - - */


// IMAGES
storiesOf('Assets/Images', module)
  .add('Brand', () =>
      <img src="/img/content/isologo-wt.png" alt="Winding Tree" className="img-fluid"/>
  )
  .add('Fluid image', () =>
    <img src="/img/content/wt-refimg.png" alt="Test" className="img-fluid"/>
  );
