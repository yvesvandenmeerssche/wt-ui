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
import plug from 'windingtree-media-web/custom-icons/svg/wt-icon--plug.svg';
// Alt icon images
import altToken from 'windingtree-media-web/custom-icons/svg/alt/wt-icon--token.svg';
import altHandClick from 'windingtree-media-web/custom-icons/svg/alt/wt-icon--hand-click.svg';
import altIdea from 'windingtree-media-web/custom-icons/svg/alt/wt-icon--idea.svg';
import altNodes from 'windingtree-media-web/custom-icons/svg/alt/wt-icon--nodes.svg';
import altPath from 'windingtree-media-web/custom-icons/svg/alt/wt-icon--path.svg';
import altPuzzle from 'windingtree-media-web/custom-icons/svg/alt/wt-icon--puzzle.svg';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// BRANDING
storiesOf('Branding', module)

  // Fonts
  .add('Fonts', withCleanPreview(Fonts, () =>
    <div className="text-center">

    <h6 className="mb-2">RALEWAY FONT FAMILY</h6>

    <h6 className="text-muted "><small>Normal</small></h6>
    <h2 style={{fontWeight: 400}}>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm<br/>
          Nn Oo Pp Qq Rr Ss Tt Vv Xx Yy Zz
        </h2>
      <h6 className="text-muted mt-2"><small>Bold</small></h6>
        <h2 style={{fontWeight: 700}}>
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm<br/>
          Nn Oo Pp Qq Rr Ss Tt Vv Xx Yy Zz
        </h2>

    <h6 className="mt-3 mb-2">ROBOTO FONT FAMILY</h6>

      <h6 className="text-muted "><small>Normal</small></h6>
        <h2 className="font--alt" style={{fontWeight: 400}}>
          1234567890
        </h2>
      <h6 className="text-muted mt-2"><small>Bold</small></h6>
        <h2 className="font--alt" style={{fontWeight: 700}}>
          1234567890
        </h2>
    </div>
  ))
  // Colors
  .add('Colors', withCleanPreview(Colors, () =>
    <div className="row justify-content-md-center">
    <div className="col col-lg-8">

      <div className="row">
        <div className="col text-center mb-2"><h6>MAIN COLORS</h6></div>
      </div>

      <div className="row justify-content-md-center">

        <div className="col-6 col-md-3">
          <div className="card mb-3">
            <div className="pt-5 bg-primary"></div>
            <small className="card-body">
              <h6>PRIMARY</h6>
              <b>RGB:</b> 24, 233, 166<br/>
              <b>HEX:</b> 18E9A6
            </small>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card mb-3">
          <div className="pt-5 bg-secondary">
          </div>
            <small className="card-body">
              <h6>SECONDARY</h6>
              <b>RGB:</b> 11, 143, 223<br/>
              <b>HEX:</b> 0B8FDF
            </small>
          </div>
        </div>


        <div className="col-6 col-md-3">
          <div className="card mb-3">
          <div className="pt-5 bg--accent">
          </div>
            <small className="card-body">
              <h6>ACCENT</h6>
              <b>RGB:</b> 95, 41, 135<br/>
              <b>HEX:</b> 5F2987
            </small>
          </div>
        </div>
        <div className="col-6 col-md-3">
        <div className="card mb-3">
          <div className="pt-5" style={{background: '#434343'}}></div>
            <small className="card-body">
              <h6>TEXT</h6>
              <b>RGB:</b> 67, 67, 67<br/>
              <b>HEX:</b> 434343
            </small>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col text-center mb-2"><h6>COMPLEMENTARY COLORS</h6></div>
      </div>

      <div className="row justify-content-md-center">

        <div className="col col-md-3">
          <div className="card mb-3">
          <div className="pt-5" style={{background: '#164FDD'}}></div>
            <small className="card-body">
              <h6>LINK</h6>
              <b>RGB:</b> 22, 79, 221<br/>
              <b>HEX:</b> 164FDD
            </small>
          </div>
        </div>

        <div className="col col-md-3">
          <div className="card mb-3">
          <div className="pt-5" style={{background: '#0F3697'}}></div>
            <small className="card-body">
              <h6>LINK HOVER</h6>
              <b>RGB:</b> 15, 54, 151<br/>
              <b>HEX:</b> 0F3697
            </small>
          </div>
        </div>

        <div className="col col-md-3">
          <div className="card mb-3">
            <div className="pt-5" style={{background: '#E7EDFB'}}></div>
              <small className="card-body">
                <h6>LIGHT ACCENT</h6>
                <b>RGB:</b> 231, 237, 251<br/>
                <b>HEX:</b> E7EDFB
              </small>
            </div>
        </div>

      </div>

      <div className="row justify-content-md-center">

        <div className="col col-md-3">
          <div className="card mb-3">
          <div className="pt-5" style={{background: '#f2f2f2'}}></div>
            <small className="card-body">
              <h6>LIGHT</h6>
              <b>RGB:</b> 242, 242, 242<br/>
              <b>HEX:</b> F2F2F2
            </small>
          </div>
        </div>

        <div className="col col-md-3">
          <div className="card mb-3">
          <div className="pt-5" style={{background: '#6c757d'}}></div>
            <small className="card-body">
              <h6>MUTED</h6>
              <b>RGB:</b> 108, 117, 125<br/>
              <b>HEX:</b> 6C757D
            </small>
          </div>
        </div>

        <div className="col col-md-3">
          <div className="card mb-3">
          <div className="pt-5" style={{background: '#000'}}></div>
            <small className="card-body">
              <h6>DARK</h6>
              <b>RGB:</b> 0, 0, 0<br/>
              <b>HEX:</b> 000
            </small>
          </div>
        </div>

      </div>


      <div className="row">
        <div className="col text-center mb-2"><h6>FEEDBACK COLORS</h6></div>
      </div>

      <div className="row justify-content-md-center">

        <div className="col-4 col-md-3">
          <div className="card mb-3">
            <div className="card-img-top py-3 bg-info"></div>
            <small className="card-body">
              <h6>INFO</h6>
              <b>RGB:</b> 19, 204, 212<br/>
              <b>HEX:</b> 13CCD4
            </small>
          </div>
        </div>

        <div className="col-4 col-md-3">
          <div className="card mb-3">
            <div className="card-img-top py-3 bg-success"></div>
            <small className="card-body">
              <h6>SUCCESS</h6>
              <b>RGB:</b> 15, 195, 129<br/>
              <b>HEX:</b> 0FC381
            </small>
          </div>
        </div>

        <div className="col-4 col-md-3">
          <div className="card mb-3">
            <div className="card-img-top py-3 bg-warning"></div>
            <small className="card-body">
              <h6>WARNING</h6>
              <b>RGB:</b> 239, 181, 71<br/>
              <b>HEX:</b> EFB547
            </small>
          </div>
        </div>

        <div className="col-4 col-md-3">
          <div className="card mb-3">
            <div className="card-img-top py-3 bg-danger"></div>
            <small className="card-body">
              <h6>DANGER</h6>
              <b>RGB:</b> 189, 0, 79<br/>
              <b>HEX:</b> BD004F
            </small>
          </div>
        </div>

      </div>

      <div className="row">
        <div className="col text-center mb-2"><h6>GRADIENT</h6></div>
      </div>


      <div className="row justify-content-md-center">

        <div className="col-12">
          <div className="card mb-3">
            <div className="card-img-top py-3 bg--grad"></div>
            <small className="card-body">
              <h6>Brand's gradient</h6>
              <p>#5F2987 to #29cb96</p>
            </small>
          </div>
        </div>

      </div>

    </div>
    </div>
))
// Icons
.add('Icons', withCodePreview(Icons, () =>
  <div className="h3">
    {/* <!-- Social icons --> */}
    <i className="mdi mdi-github-circle"/>
    <i className="mdi mdi-24px mdi-github-box"/>
    <i className="mdi mdi-twitter"/>
    <i className="mdi mdi-medium"/>
    <i className="mdi mdi-youtube"/>
    <i className="mdi mdi-telegram"/>
    <i className="mdi mdi-reddit"/>
    <i className="mdi mdi-linkedin"/>
    <i className="mdi mdi-link-variant mr-2"/>

    {/* <!-- Other icons --> */}
    <i className="mdi mdi-bitcoin"/>
    <i className="mdi mdi-close"/>
    <i className="mdi mdi-chevron-right"/>
    <i className="mdi mdi-menu mr-2"/>

    {/* <!-- Different sizes --> */}
    <i className="mdi mdi-36px mdi-format-quote-open"/>
    <i className="mdi mdi-36px mdi-format-quote-close"/>
    <i className="mdi mdi-48px mdi-close"/>
    <i className="mdi mdi-xxl mdi-office-building"/>
  </div>
))

// Media Assets / Logo Variants
storiesOf('Branding/Media assets', module)
  .add('Logo variants', withCleanPreview(MediaAssets__LogoVariants, () =>
    <div className="text-center col">
      <p className="mb-4" style={{padding: '0 20px'}}>
        <img src={imgLogo} alt="Winding Tree Logo" width="600" className="img-fluid"/>
      </p>
      <p className="mb-4 bg-dark" style={{padding: '40px 20px'}}>
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
      <img src={plug} alt="icon" width="100" className="img-fluid"/>

      <hr className="my-2"/>

      <img src={altToken} alt="icon" width="85" className="img-fluid"/>
      <img src={altHandClick} alt="icon" width="85" className="img-fluid"/>
      <img src={altIdea} alt="icon" width="85" className="img-fluid"/>
      <img src={altNodes} alt="icon" width="85" className="img-fluid"/>
      <img src={altPath} alt="icon" width="85" className="img-fluid"/>
      <img src={altPuzzle} alt="icon" width="85" className="img-fluid"/>

    </div>
  ))
