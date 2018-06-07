import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
// [...]

// Included components
import Resizable from 're-resizable';
import { withCodePreview, withCleanPreview } from './HOCs/with-docs'

// Readme files
import Fonts from './branding/fonts.md';
import Fonts__Headings from './branding/fonts__headings.md';
import Colors from './branding/colors.md';
import Icons from './branding/icons.md';
import MediaAssets from './branding/media-assets.md';

// Images
import imgLogo from 'windingtree-media-web/logo-variants/full-logo/png/logo--gradient_black-text.png';
import imgLogoAlt from 'windingtree-media-web/logo-variants/full-logo/png/logo--white.png';
import imgTree from 'windingtree-media-web/logo-variants/tree/png/tree--gradient.png';
import imgTreeAlt from 'windingtree-media-web/logo-variants/tree/png/tree--black.png';
import imgSign from 'windingtree-media-web/logo-variants/sign/png/sign--gradient.png';
// Disabled until the image is available
// import imgSignAlt from 'windingtree-media-web/logo-variants/sign/png/sign--black.png';

// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// BRANDING
storiesOf('Branding', module)

  // Fonts
  .add('Fonts', withCleanPreview(Fonts, () =>
    <div className="text-center">
      <h6>Raleway Semibold</h6>
      <p className="display-4">
        <h2>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm<br/>
          Nn Oo Pp Qq Rr Ss Tt Vv Xx Yy Zz<br/>
          1234567890
        </h2>
      </p>
      <h6 className="mt-5" style={{fontWeight: 600}}>Raleway Semibold</h6>
      <p className="display-4">
        <h2 style={{fontWeight: 600}}>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm<br/>
          Nn Oo Pp Qq Rr Ss Tt Vv Xx Yy Zz<br/>
          1234567890
        </h2>
      </p>
      <h6 className="mt-5" style={{fontWeight: 800}}>Raleway ExtraBold</h6>
      <p className="display-4">
        <h2 style={{fontWeight: 800}}>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm<br/>
          Nn Oo Pp Qq Rr Ss Tt Vv Xx Yy Zz<br/>
          1234567890
        </h2>
      </p>
    </div>
  ))
  // Colors
  .add('Colors', withCleanPreview(Colors, () =>
    <div className="row">

      <div className="col">
        <div className="card">
          <div className="card-img-top" style={{height: 110, background: '#00df9e'}}></div>
          <small className="card-body">
            <b>CMYK:</b> 64 0 56 0<br/>
            <b>RGB:</b> 0 223 158<br/>
            <b>HEX:</b> 00df9e
          </small>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <div className="card-img-top" style={{height: 110, background: '#1ac592'}}></div>
          <small className="card-body">
            <b>CMYK:</b> 71 0 59 0<br/>
            <b>RGB:</b> 26 197 146<br/>
            <b>HEX:</b> 1ac592
          </small>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <div className="card-img-top" style={{height: 110, background: '#0b8fdf'}}></div>
          <small className="card-body">
            <b>CMYK:</b> 76 35 0 0<br/>
            <b>RGB:</b> 11 143 223<br/>
            <b>HEX:</b> 0b8fdf
          </small>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <div className="card-img-top" style={{height: 110, background: '#191919'}}></div>
          <small className="card-body">
            <b>CMYK:</b> 73 67 65 79<br/>
            <b>RGB:</b> 25 25 25<br/>
            <b>HEX:</b> 191919
          </small>
        </div>
      </div>

    </div>
))
// Icons
.add('Icons', withCodePreview(Icons, () =>
  <div className="h3">
    <i className="wicon-whatshot"/>
    <i className="wicon-back"/>
    <i className="wicon-timelapse"/>
    <i className="wicon-account_balance_wallet"/>
    <i className="wicon-help-outline"/>
    <i className="wicon-info"/>
    <i className="wicon-arrow-right"/>
    <i className="wicon-right-dir"/>
    <i className="wicon-link"/>
    <i className="wicon-twitter"/>
    <i className="wicon-github-circled"/>
  </div>
))
// Media Assets
.add('Media assets', withCleanPreview(MediaAssets, () =>
  <div className="text-center col">
    <p className="mb-4" style={{padding: '0 20px'}}>
      <img src={imgLogo} alt="Winding Tree Logo" width="600" className="img-fluid"/>
    </p>
    <p className="mb-4" style={{padding: '40px 20px', backgroundColor: '#1AC592'}}>
      <img src={imgLogoAlt} alt="Winding Tree Logo Variant" width="600" className="img-fluid"/>
    </p>
    <p>
      <img className="mb-4 mr-3 d-inline-block img-fluid" src={imgTree} alt="Winding Tree Tree" width="150"/>
      <img className="mb-4 mr-3 d-inline-block img-fluid" src={imgTreeAlt} alt="Winding Tree Tree variant" width="150"/>
      <img className="mb-4 mr-3 d-inline-block img-fluid" src={imgSign} alt="Winding Tree Sign" width="60"/>
      {/*
      Disabled until the image is available.
      <img className="mb-4 d-inline-block img-fluid" src={imgSignAlt} alt="Winding Tree Sign Variant" width="60"/>
      */}
    </p>
  </div>
))
