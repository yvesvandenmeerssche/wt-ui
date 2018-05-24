import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { withReadme, withDocs, doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';

// Readme files
import Fonts from './branding/fonts.md';
import Fonts__Headings from './branding/fonts__headings.md';
import Colors from './branding/colors.md';
import Icons from './branding/icons.md';
import MediaAssets from './branding/media-assets.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


const colorBox = {
  height: 120,
  background: 'blue',
}


const withSimplePreview = withDocs({
  PreviewComponent: ({ children }) => (
    <div
      className="doc-preview"
      style={{
        padding: '10px 25px',
        border: '1px solid #ddd',
        margin: '25px 0',
        borderRadius: 3,
      }}
    >
      {children}
    </div>
  )
});


const withCleanPreview = withDocs({
  PreviewComponent: ({ children }) => (
    <div
      className="doc-preview--clean"
      style={{
        margin: '25px 0',
      }}
    >
      {children}
    </div>
  )
});


storiesOf('Branding', module)

.add('Fonts', withCleanPreview(Fonts, () =>
  <div className="text-center">
    <h6 className="mt-5">Raleway Semibold</h6>
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

.add('Icons', withSimplePreview(Icons, () =>
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

.add('Media assets', withCleanPreview(MediaAssets, () =>
  <div className="text-center">
      <p className="mb-4"> <img src="../img/content/logo.svg" alt="Winding Tree" width="600" className="img-fluid"/> </p>
      <p className="mb-4"> <img src="../img/content/logo_black.png" alt="Winding Tree" width="700" className="img-fluid"/> </p>
      <p>
        <img className="mb-4 mr-3 d-inline-block img-fluid" src="../img/content/tree_gradient.png" alt="Winding Tree" width="150"/>
        <img className="mb-4 mr-3 d-inline-block img-fluid" src="../img/content/Tree_black.png" alt="Winding Tree" width="150"/>
        <img className="mb-4 mr-3 d-inline-block img-fluid" src="../img/content/sign_gradient.png" alt="Winding Tree" width="60"/>
        <img className="mb-4 d-inline-block img-fluid" src="../img/content/sign_black.png" alt="Winding Tree" width="60"/>
      </p>
  </div>
))
