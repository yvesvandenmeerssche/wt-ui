import React, { Component } from 'react';

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'button'
    };
  }

  render() {

    return (
      <button id="btn" className="btn btn-primary">
        {this.props.children}
      </button>
    );
  }
}

export default Button;
