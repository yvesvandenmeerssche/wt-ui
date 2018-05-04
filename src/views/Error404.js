import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
// import Component from '../components/Component.js'

// Libraries
// import Library from 'react-library';

export default class NotFound extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'error 404'
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div id="app-content" role="main">
        <h1>Page not found</h1>
      </div>
    )
  }
}
