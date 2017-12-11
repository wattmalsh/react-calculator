import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input: '1234',
      output: '1234',
      deleteKey: true,
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.calculateOutput = this.calculateOutput.bind(this);
  }

  handleUserInput(key) {
    this.setState({ input: key });
    // if valid key (e.g. can not have '1xx2')
      // update 'input' state if ok
      // call calculateOutput
    // else if key is '='
      // replace input with output
      // call resetInput
    // else if key is 'DEL'
      // remove last item from input
    // else if key is 'CLR'
      // call resetInput
    // else (not a valid key)
      // do nothing
  }

  resetInput() {
    this.setState({ input: '' });
  }

  calculateOutput(str) {
  }

  render() {
    const { input, output, deleteKey } = this.state;
    return (
      <div className="Calculator">
        <Display input={input} output={output} />
        <Keypad deleteKey={deleteKey} onUserInput={this.handleUserInput} />
      </div>
    );
  }
}

export default Calculator;
