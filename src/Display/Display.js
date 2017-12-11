import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    const { input, output } = this.props;
    return (
      <div className="Display">
        <div className="input" >{input}</div>
        <div className="output">{output}</div>
      </div>
    );
  }
}

export default Display;
