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
import wtGrad from '@windingtree/wt-ui-assets/logo-variants/full-logo/svg/wt-grad.svg';
import wtGradTW from '@windingtree/wt-ui-assets/logo-variants/full-logo/svg/wt-grad--text-white.svg';
import wtBlack from '@windingtree/wt-ui-assets/logo-variants/full-logo/svg/wt-black.svg';
import wtWhite from '@windingtree/wt-ui-assets/logo-variants/full-logo/svg/wt-white.svg';

import wtGradSM from '@windingtree/wt-ui-assets/logo-variants/full-logo/--sm/svg/wt-grad.svg';
import wtGradTWSM from '@windingtree/wt-ui-assets/logo-variants/full-logo/--sm/svg/wt-grad--text-white.svg';
import wtBlackSM from '@windingtree/wt-ui-assets/logo-variants/full-logo/--sm/svg/wt-black.svg';
import wtWhiteSM from '@windingtree/wt-ui-assets/logo-variants/full-logo/--sm/svg/wt-white.svg';

import wtSignGrad from '@windingtree/wt-ui-assets/logo-variants/sign/svg/wt-grad.svg';
import wtSignBlack from '@windingtree/wt-ui-assets/logo-variants/sign/svg/wt-black.svg';
import wtSignWhite from '@windingtree/wt-ui-assets/logo-variants/sign/svg/wt-white.svg';

import wtFaviconGrad from '@windingtree/wt-ui-assets/logo-variants/favicon/svg/wt-grad--32x32.svg';
import wtFaviconBlack from '@windingtree/wt-ui-assets/logo-variants/favicon/svg/wt-black--32x32.svg';
import wtFaviconWhite from '@windingtree/wt-ui-assets/logo-variants/favicon/svg/wt-white--32x32.svg';



// Icon images
import airplaneTicket from '@windingtree/wt-ui-assets/custom-icons/wt-icon--airplane-ticket.svg';
import chart from '@windingtree/wt-ui-assets/custom-icons/wt-icon--chart.svg';
import coinsUp from '@windingtree/wt-ui-assets/custom-icons/wt-icon--coins-up.svg';
import commentBubble from '@windingtree/wt-ui-assets/custom-icons/wt-icon--comment-bubble.svg';
import documents from '@windingtree/wt-ui-assets/custom-icons/wt-icon--documents.svg';
import githubLogo from '@windingtree/wt-ui-assets/custom-icons/wt-icon--github-logo.svg';
import governmentBuillding from '@windingtree/wt-ui-assets/custom-icons/wt-icon--government-buillding.svg';
import handOffer from '@windingtree/wt-ui-assets/custom-icons/wt-icon--hand-offer.svg';
import lifToken from '@windingtree/wt-ui-assets/custom-icons/wt-icon--lif-token.svg';
import noBorders from '@windingtree/wt-ui-assets/custom-icons/wt-icon--no-borders.svg';
import payment from '@windingtree/wt-ui-assets/custom-icons/wt-icon--payment.svg';
import plusSign from '@windingtree/wt-ui-assets/custom-icons/wt-icon--plus-sign.svg';
import securityBadge from '@windingtree/wt-ui-assets/custom-icons/wt-icon--security-badge.svg';
import tree from '@windingtree/wt-ui-assets/custom-icons/wt-icon--tree.svg';
import worldAndPin from '@windingtree/wt-ui-assets/custom-icons/wt-icon--world-and-pin.svg';
import plug from '@windingtree/wt-ui-assets/custom-icons/wt-icon--plug.svg';
// Alt icon images
import altToken from '@windingtree/wt-ui-assets/custom-icons/alt/wt-icon--token.svg';
import altHandClick from '@windingtree/wt-ui-assets/custom-icons/alt/wt-icon--hand-click.svg';
import altIdea from '@windingtree/wt-ui-assets/custom-icons/alt/wt-icon--idea.svg';
import altNodes from '@windingtree/wt-ui-assets/custom-icons/alt/wt-icon--nodes.svg';
import altPath from '@windingtree/wt-ui-assets/custom-icons/alt/wt-icon--path.svg';
import altPuzzle from '@windingtree/wt-ui-assets/custom-icons/alt/wt-icon--puzzle.svg';


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
        <h2 className="font-alt" style={{fontWeight: 400}}>
          1234567890
        </h2>
      <h6 className="text-muted mt-2"><small>Bold</small></h6>
        <h2 className="font-alt" style={{fontWeight: 700}}>
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
          <div className="pt-5 bg-accent">
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
            <div className="card-img-top py-3 bg-grad"></div>
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
  <div>
    {/* Standard icons */}
    <h6>Standard icons</h6>
    <i className="mdi mdi-bitcoin mr-1"/>
    <i className="mdi mdi-close mr-1"/>
    <i className="mdi mdi-chevron-right mr-1"/>
    <i className="mdi mdi-menu"/>


    {/* <!-- Social icons --> */}
    <h6 className="mt-1">Social icons (<span class="font-alt">24px</span>)</h6>
    <i className="mdi mdi-24px mdi-github-circle mr-1"/>
    <i className="mdi mdi-24px mdi-github-box mr-1"/>
    <i className="mdi mdi-24px mdi-twitter mr-1"/>
    <i className="mdi mdi-24px mdi-medium mr-1"/>
    <i className="mdi mdi-24px mdi-youtube mr-1"/>
    <i className="mdi mdi-24px mdi-telegram mr-1"/>
    <i className="mdi mdi-24px mdi-reddit mr-1"/>
    <i className="mdi mdi-24px mdi-linkedin mr-1"/>
    <i className="mdi mdi-24px mdi-link-variant mr-2"/>

    {/* <!-- Other sizes --> */}
    <h6 className="mt-1">Other sizes</h6>
    <i className="mdi mdi-36px mdi-format-quote-open"/>
    <i className="mdi mdi-36px mdi-format-quote-close"/>
    <i className="mdi mdi-48px mdi-close"/>

    {/* <!-- Custom sizes --> */}
    <h6 className="mt-1">Custom sizes</h6>
    <i className="mdi mdi-lg mdi-chevron-left"/>
    <i className="mdi mdi-lg mdi-chevron-right"/>
    <i className="mdi mdi-xxl mdi-office-building"/>
  </div>
))
// Media Assets / Logo Variants
storiesOf('Branding/Media assets', module)
  .add('Logo variants', withCleanPreview(MediaAssets__LogoVariants, () =>
    <div className="row">
      <div className="col-lg-4">
        <div className="border p-2 mb-1">

          <h5 className="text-alpha mb-1">Full Isologotype</h5>
          <div className="row">
            <div className="col-sm-6 mb-1">
              <img src={wtGrad} alt="Winding Tree Logo" style={{width: 400, maxWidth: '100%'}} className="img-fluid"/>
            </div>
            <div className="col-sm-6 mb-1">
              <img src={wtBlack} alt="Winding Tree Logo" style={{width: 400, maxWidth: '100%'}} className="img-fluid"/>
            </div>
          </div>

          <h5 className="text-alpha my-1">Full Isologotype (mobile)</h5>
          <div className="row">
            <div className="col-sm-6 mb-1">
              <img src={wtGradSM} alt="Winding Tree Logo" style={{width: 200, maxWidth: '100%'}} className="img-fluid"/>
            </div>
            <div className="col-sm-6 mb-1">
              <img src={wtBlackSM} alt="Winding Tree Logo" style={{width: 200, maxWidth: '100%'}} className="img-fluid"/>
            </div>
          </div>

          <h5 className="text-alpha my-1">Isologo</h5>
          <div className="row">
            <div className="col-sm-6 mb-1">
              <img src={wtSignGrad} alt="Winding Tree Logo" style={{maxWidth: 90}} className="img-fluid"/>
            </div>
            <div className="col-sm-6 mb-1">
              <img src={wtSignBlack} alt="Winding Tree Logo" style={{maxWidth: 90}} className="img-fluid"/>
            </div>
          </div>

          <h5 className="text-alpha my-1">Sign / Favicon</h5>
          <div className="row">
            <div className="col-sm-6 mb-1">
              <img src={wtFaviconGrad} alt="Winding Tree Logo" width="32" className="img-fluid"/>
            </div>
            <div className="col-sm-6 mb-1">
              <img src={wtFaviconBlack} alt="Winding Tree Logo" width="32" className="img-fluid"/>
            </div>
          </div>

        </div>
      </div>

      <div className="col-lg-4">
        <div className="border p-2 mb-1 bg-dark">

          <h5 className="text-white text-alpha mb-1">Full Isologotype</h5>
          <div className="row">
            <div className="col-sm-6 mb-1">
              <img src={wtGradTW} alt="Winding Tree Logo" style={{width: 400, maxWidth: '100%'}} className="img-fluid"/>
            </div>
            <div className="col-sm-6 mb-1">
              <img src={wtWhite} alt="Winding Tree Logo" style={{width: 400, maxWidth: '100%'}} className="img-fluid"/>
            </div>
          </div>

          <h5 className="text-white text-alpha my-1">Full Isologotype (mobile)</h5>
          <div className="row">
            <div className="col-sm-6 mb-1">
              <img src={wtGradTWSM} alt="Winding Tree Logo" style={{width: 200, maxWidth: '100%'}} className="img-fluid"/>
            </div>
            <div className="col-sm-6 mb-1">
              <img src={wtWhiteSM} alt="Winding Tree Logo" style={{width: 200, maxWidth: '100%'}} className="img-fluid"/>
            </div>
          </div>

          <h5 className="text-white text-alpha my-1">Isologo</h5>
          <div className="row">
            <div className="col-sm-6 mb-1">
              <img src={wtSignGrad} alt="Winding Tree Logo" style={{maxWidth: 90}} className="img-fluid"/>
            </div>
            <div className="col-sm-6 mb-1">
              <img src={wtSignWhite} alt="Winding Tree Logo" style={{maxWidth: 90}} className="img-fluid"/>
            </div>
          </div>

          <h5 className="text-white text-alpha my-1">Sign / Favicon</h5>
          <div className="row">
            <div className="col-sm-6 mb-1">
              <img src={wtFaviconGrad} alt="Winding Tree Logo" width="32" className="img-fluid"/>
            </div>
            <div className="col-sm-6 mb-1">
              <img src={wtFaviconWhite} alt="Winding Tree Logo" width="32" className="img-fluid"/>
            </div>
          </div>

        </div>
      </div>

      <div className="col-lg-4">
        <div className="border p-2 mb-1 bg-accent">

          <h5 className="text-white text-alpha mb-1">Full Isologotype</h5>
          <div className="row">
            <div className="col-sm-6 mb-1">
              <img src={wtWhite} alt="Winding Tree Logo" style={{width: 400, maxWidth: '100%'}} className="img-fluid"/>
            </div>
          </div>

          <h5 className="text-white text-alpha my-1">Full Isologotype (mobile)</h5>
          <div className="row">
            <div className="col-sm-6 mb-1">
              <img src={wtWhiteSM} alt="Winding Tree Logo" style={{width: 200, maxWidth: '100%'}} className="img-fluid"/>
            </div>
          </div>

          <h5 className="text-white text-alpha my-1">Isologo</h5>
          <div className="row">
            <div className="col-sm-6 mb-1">
              <img src={wtSignWhite} alt="Winding Tree Logo" style={{maxWidth: 90}} className="img-fluid"/>
            </div>
          </div>

          <h5 className="text-white text-alpha my-1">Sign / Favicon</h5>
          <div className="row">
            <div className="col-sm-6 mb-1">
              <img src={wtFaviconWhite} alt="Winding Tree Logo" width="32" className="img-fluid"/>
            </div>
          </div>

        </div>
      </div>

    </div>
  ))
// Media Assets / Custom Icons
.add('Custom Icons', withCodePreview(MediaAssets__CustomIcons, () =>
  <div className="text-center">
    <img src={airplaneTicket} alt="icon"/>
    <img src={chart} alt="icon"/>
    <img src={coinsUp} alt="icon"/>
    <img src={commentBubble} alt="icon"/>
    <img src={documents} alt="icon"/>
    <img src={githubLogo} alt="icon"/>
    <img src={governmentBuillding} alt="icon"/>
    <img src={handOffer} alt="icon"/>
    <img src={lifToken} alt="icon"/>
    <img src={noBorders} alt="icon"/>
    <img src={payment} alt="icon"/>
    <img src={plusSign} alt="icon"/>
    <img src={securityBadge} alt="icon"/>
    <img src={tree} alt="icon"/>
    <img src={worldAndPin} alt="icon"/>
    <img src={plug} alt="icon"/>

    <h6 className="mt-2 mb-1">Alternative version</h6>

    <img src={altToken} alt="icon"/>
    <img src={altHandClick} alt="icon"/>
    <img src={altIdea} alt="icon"/>
    <img src={altNodes} alt="icon"/>
    <img src={altPath} alt="icon"/>
    <img src={altPuzzle} alt="icon"/>

    <h6 className="mt-2 mb-1">Common use cases</h6>

    <div className="row">
      <div className="col-12 col-md-6">
        <h5><img src={altNodes} alt="icon"/></h5>
        <h3 className="text-muted">Decentralized Infrastructure</h3>
        <p className="mb-1 mb-md-0">In an open market, the decentralized model is the only way to eliminate the risk of eventual monopolization of distribution.</p>
      </div>

      <div className="col-12 col-md-3 text-left">
        <h5 className="mb-1"><img src={chart} alt="icon"/></h5>
        <h4>Open Marketplace</h4>
        <p className="text-muted mb-1 mb-md-0"><small>Winding Tree is a piece of public infrastructure. Blockchain technology allows us, for the first time in history, to remove intermediaries that currently charge excessive fees and act as gatekeepers.</small></p>
      </div>

      <div className="col-12 col-md-3">
        <h5 className="mb-1"><img src={plug} alt="icon"/></h5>
        <p>Do you need help integrating with Winding Tree? Do you need a specific product that is not included in the open-source set of tools?</p>
      </div>
    </div>

  </div>
))
