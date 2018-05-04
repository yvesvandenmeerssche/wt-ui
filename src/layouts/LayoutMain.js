import React, { Component } from 'react';

// Libraries
// import ScrollAnimation from 'react-animate-on-scroll';

// Components
import Alert     from '../components/Alert';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

export default class LayoutMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'LayoutMain',
    };
  }

  // Alert messages settings
  _callAlert = (c) => this._alert = c;
  _showAlert = (type, message) => this._alert.open(type, message);

  render() {
    const {pendingItems, totalItems} = this.state;
    const childrenWithProps = React.cloneElement(this.props.children, {
      showAlert: this._showAlert
    });

    return (
      <div id="app-layout" className="app-layout--main">
        <Alert ref={this._callAlert} />
        <AppHeader id="app-header"/>
         {childrenWithProps}
        <AppFooter/>
      </div>
    );
  }
}
