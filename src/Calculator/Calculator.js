import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <Display />
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
