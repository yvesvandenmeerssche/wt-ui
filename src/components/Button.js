import React, { Component } from 'react';

export default class Button extends React.Component {

  state = { name: 'button' };

  render() {
    return (
      <button {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

