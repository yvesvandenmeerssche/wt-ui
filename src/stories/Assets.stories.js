import React from 'react';
import { storiesOf } from '@storybook/react';

// Included addons
import { withInfo } from '@storybook/addon-info';


/* Components - - - - - - - - - - - - - - - - - - - - - - - - */


// IMAGES
storiesOf('Assets/Images', module)
  .add('Brand',
    withInfo(`
      <p class="mb-2">The Logo can be used as a simple image, by adding an ALT text. Is probably good idea to wrap it in a heading tag.</p>

      ~~~js
      <img src="/img/content/isologo-wt.png" alt="Winding Tree" className="img-fluid"/>
      ~~~
    `)(() =>
      <img src="/img/content/isologo-wt.png" alt="Winding Tree" className="img-fluid"/>
  ))
  .add('Fluid image',
  withInfo(`
    <p class="mb-2">Make any image responsive y adding the <code>.img-fluid</code> class.</p>

  `)(() =>
    <img src="/img/content/wt-refimg.png" alt="Test" className="img-fluid"/>
  ));
