import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';

// Readme files
import ResponsiveImages from './images/responsive-images.md';
import ImageThumbnails from './images/image-thumbnails.md';
import Picture from './images/picture.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// HOCs
import { withCleanPreview, withCodePreview, } from './HOCs/with-docs'


storiesOf('Images', module)

  // Responsive Images
  .add('Responsive Images', withCleanPreview(ResponsiveImages, () =>
    <Resizable
      className="resizable"
      defaultSize={{ width: 'auto', height: 'auto' }}
      bounds={'parent'}
      enable={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
    >
      <img src="http://via.placeholder.com/895x250" className="img-fluid" alt="Responsive image"/>
    </Resizable>
  ))
  // Image Thumbnails
  .add('Image Thumbnails', withCleanPreview(ImageThumbnails, () =>
    <img src="http://via.placeholder.com/200x200" alt="Thumbnail" className="img-thumbnail"/>
  ))
  // Picture
  .add('Picture', doc(Picture))
