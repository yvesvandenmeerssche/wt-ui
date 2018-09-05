import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import imgLogoWhite from 'windingtree-media-web/logo-variants/full-logo/png/logo--white.png';

export default class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'header'
    };
  }

  render() {
    const {currentUser} = this.context;

    const lifLogo = 'img/content/logo-wt-w.png';
    const background = 'img/style/bg-header.png';

    return (
      <div>
        <header id="app-header" className={this.props.bgClass}>
          <h1>
            <Link to="/" hrefLang="en">
              <img className="img-fluid" src={imgLogoWhite} alt="WindingTree" width="220"/>
            </Link>
          </h1>
        </header>
      </div>
    );
  }
}
