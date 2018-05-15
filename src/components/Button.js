import React, { Component } from 'react';

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'button'
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <button id="btn" className="btn btn-primary" onClick={onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
