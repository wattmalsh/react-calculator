import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    const { input, output } = this.props;
    let { calculations } = this.props;
    calculations = calculations.map(calculation => (
      <p>{calculation}</p>
    ));
    return (
      <div className="Display">
        <div className="calculations">
          {calculations}
        </div>
        <div className="display">
          <div className="input" >{input}</div>
          <div className="output">{output}</div>
        </div>
      </div>
    );
  }
}

export default Display;
