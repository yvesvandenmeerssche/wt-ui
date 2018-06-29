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
import MediaAssets__LogoVariants from './branding/media-assets__logo-variants.md';
import MediaAssets__CustomIcons from './branding/media-assets__custom-icons.md';

// Logo images
import imgLogo from 'windingtree-media-web/logo-variants/full-logo/png/logo--gradient_black-text.png';
import imgLogoAlt from 'windingtree-media-web/logo-variants/full-logo/png/logo--white.png';
import imgTree from 'windingtree-media-web/logo-variants/tree/png/tree--gradient.png';
import imgTreeAlt from 'windingtree-media-web/logo-variants/tree/png/tree--black.png';
import imgSign from 'windingtree-media-web/logo-variants/sign/png/sign--gradient.png';
import imgSignAlt from 'windingtree-media-web/logo-variants/sign/png/sign--black.png';

// Icon images
import airplaneTicket from 'windingtree-media-web/custom-icons/svg/wt-icon--airplane-ticket.svg';
import chart from 'windingtree-media-web/custom-icons/svg/wt-icon--chart.svg';
import coinsUp from 'windingtree-media-web/custom-icons/svg/wt-icon--coins-up.svg';
import commentBubble from 'windingtree-media-web/custom-icons/svg/wt-icon--comment-bubble.svg';
import documents from 'windingtree-media-web/custom-icons/svg/wt-icon--documents.svg';
import githubLogo from 'windingtree-media-web/custom-icons/svg/wt-icon--github-logo.svg';
import governmentBuillding from 'windingtree-media-web/custom-icons/svg/wt-icon--government-buillding.svg';
import handOffer from 'windingtree-media-web/custom-icons/svg/wt-icon--hand-offer.svg';
import lifToken from 'windingtree-media-web/custom-icons/svg/wt-icon--lif-token.svg';
import noBorders from 'windingtree-media-web/custom-icons/svg/wt-icon--no-borders.svg';
import payment from 'windingtree-media-web/custom-icons/svg/wt-icon--payment.svg';
import plusSign from 'windingtree-media-web/custom-icons/svg/wt-icon--plus-sign.svg';
import securityBadge from 'windingtree-media-web/custom-icons/svg/wt-icon--security-badge.svg';
import tree from 'windingtree-media-web/custom-icons/svg/wt-icon--tree.svg';
import worldAndPin from 'windingtree-media-web/custom-icons/svg/wt-icon--world-and-pin.svg';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// BRANDING
storiesOf('Branding', module)

  // Fonts
  .add('Fonts', withCleanPreview(Fonts, () =>
    <div className="text-center">
      <h6>Raleway Semibold</h6>
        <h2>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm<br/>
          Nn Oo Pp Qq Rr Ss Tt Vv Xx Yy Zz<br/>
          1234567890
        </h2>
      <h6 className="mt-5" style={{fontWeight: 600}}>Raleway Semibold</h6>
        <h2 style={{fontWeight: 600}}>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm<br/>
          Nn Oo Pp Qq Rr Ss Tt Vv Xx Yy Zz<br/>
          1234567890
        </h2>
      <h6 className="mt-5" style={{fontWeight: 800}}>Raleway ExtraBold</h6>
        <h2 style={{fontWeight: 800}}>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm<br/>
          Nn Oo Pp Qq Rr Ss Tt Vv Xx Yy Zz<br/>
          1234567890
        </h2>
    </div>
  ))
  // Colors
  .add('Colors', withCleanPreview(Colors, () =>
    <div>
      <div className="row">

        <div className="col">
          <div className="card mb-3">
            <div className="card-img-top" style={{height: 110, background: '#18e9a6'}}></div>
            <small className="card-body">
              <b>CMYK:</b> - - -<br/>
              <b>RGB:</b> 24 233 166<br/>
              <b>HEX:</b> 18e9a6
            </small>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3">
            <div className="card-img-top" style={{height: 110, background: '#12bc86'}}></div>
            <small className="card-body">
              <b>CMYK:</b> - - -<br/>
              <b>RGB:</b> 18 188 134<br/>
              <b>HEX:</b> 12bc86
            </small>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3">
            <div className="card-img-top" style={{height: 110, background: '#0b8fdf'}}></div>
            <small className="card-body">
              <b>CMYK:</b> - - -<br/>
              <b>RGB:</b> 11 143 223<br/>
              <b>HEX:</b> 0b8fdf
            </small>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3">
            <div className="card-img-top" style={{height: 110, background: '#164fdd'}}></div>
            <small className="card-body">
              <b>CMYK:</b> - - -<br/>
              <b>RGB:</b> 22 79 221<br/>
              <b>HEX:</b> 164fdd
            </small>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3">
            <div className="card-img-top" style={{height: 110, background: '#0f3697'}}></div>
            <small className="card-body">
              <b>CMYK:</b> - - -<br/>
              <b>RGB:</b> 15 54 151<br/>
              <b>HEX:</b> 0f3697
            </small>
          </div>
        </div>

      </div>
      <div className="row">

        <div className="col">
          <div className="card mb-3">
            <div className="card-img-top" style={{height: 110, background: '#5f2987'}}></div>
            <small className="card-body">
              <b>CMYK:</b> - - -<br/>
              <b>RGB:</b> 95 41 135<br/>
              <b>HEX:</b> 5f2987
            </small>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3">
            <div className="card-img-top" style={{height: 110, background: '#6c757d'}}></div>
            <small className="card-body">
              <b>CMYK:</b> - - -<br/>
              <b>RGB:</b> 108 117 125<br/>
              <b>HEX:</b> 6c757d
            </small>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3">
            <div className="card-img-top" style={{height: 110, background: '#dee2e6'}}></div>
            <small className="card-body">
              <b>CMYK:</b> - - -<br/>
              <b>RGB:</b> 222 226 230<br/>
              <b>HEX:</b> dee2e6
            </small>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3">
            <div className="card-img-top" style={{height: 110, background: '#f2f2f2'}}></div>
            <small className="card-body">
              <b>CMYK:</b> - - -<br/>
              <b>RGB:</b> 242 242 242<br/>
              <b>HEX:</b> f2f2f2
            </small>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3">
            <div className="card-img-top" style={{height: 110, background: '#e7edfb'}}></div>
            <small className="card-body">
              <b>CMYK:</b> - - -<br/>
              <b>RGB:</b> 231 237 251<br/>
              <b>HEX:</b> e7edfb
            </small>
          </div>
        </div>

      </div>

      <div className="row">
        <div className="col">
          <div className="card mb-3">
            <div className="card-img-top" style={{height: 110, background: '#000'}}></div>
            <small className="card-body">
              <b>CMYK:</b> - - -<br/>
              <b>RGB:</b> 0 0 0<br/>
              <b>HEX:</b> 000
            </small>
          </div>
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

// Media Assets / Logo Variants
storiesOf('Branding/Media assets', module)
  .add('Logo variants', withCleanPreview(MediaAssets__LogoVariants, () =>
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
        <img className="mb-4 d-inline-block img-fluid" src={imgSignAlt} alt="Winding Tree Sign Variant" width="60"/>
      </p>
    </div>
  ))
  // Media Assets / Custom Icons
  .add('Custom Icons', withCodePreview(MediaAssets__CustomIcons, () =>
    <div className="text-center">
      <img src={airplaneTicket} alt="icon" width="100" className="img-fluid"/>
      <img src={chart} alt="icon" width="100" className="img-fluid"/>
      <img src={coinsUp} alt="icon" width="100" className="img-fluid"/>
      <img src={commentBubble} alt="icon" width="100" className="img-fluid"/>
      <img src={documents} alt="icon" width="100" className="img-fluid"/>
      <img src={githubLogo} alt="icon" width="100" className="img-fluid"/>
      <img src={governmentBuillding} alt="icon" width="100" className="img-fluid"/>
      <img src={handOffer} alt="icon" width="100" className="img-fluid"/>
      <img src={lifToken} alt="icon" width="100" className="img-fluid"/>
      <img src={noBorders} alt="icon" width="100" className="img-fluid"/>
      <img src={payment} alt="icon" width="100" className="img-fluid"/>
      <img src={plusSign} alt="icon" width="100" className="img-fluid"/>
      <img src={securityBadge} alt="icon" width="100" className="img-fluid"/>
      <img src={tree} alt="icon" width="100" className="img-fluid"/>
      <img src={worldAndPin} alt="icon" width="100" className="img-fluid"/>
    </div>
  ))
