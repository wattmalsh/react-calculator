import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      output: '',
      deleteKey: 'DEL',
      calculations: [],
    };
    this.countOperands = 0;
    this.dotAllowed = true;
    this.insideSqrt = false;
    this.insideExpo = false;
    this.handleUserInput = this.handleUserInput.bind(this);
    this.calculateOutput = this.calculateOutput.bind(this);
    this.addToCalculations = this.addToCalculations.bind(this);
  }

  handleUserInput(key) {
    if (key === 'Backspace') key = 'DEL';
    if (key === '=') key = 'Enter';
    const original = this.state.input;
    const lastKey = original[original.length - 1];
    const NONZEROS = '123456789'.split('');
    const NUMS = '0123456789'.split('');
    const DOT = '.';
    const OPS = ['/', '*', '+', '-'];
    const SQRT = '√';
    const EXPO = '^';

    // Handle an empty original input
    if (original === '') {
      if (NONZEROS.indexOf(key) !== -1 || key === '-' || key === DOT || key === SQRT) {
        this.setState({ input: key });
      }
      if (key === DOT) {
        this.dotAllowed = false;
      }
      if (key === SQRT) {
        this.insideSqrt = true;
        this.countOperands = 1;
      }

    // Handle a 'CLR' state of calculator
    } else if (this.state.deleteKey === 'CLR') {
      if (OPS.indexOf(key) !== -1) {
        this.countOperands += 1;
        this.setState({ input: original + key, deleteKey: 'DEL' });
      } else if (key === 'CLR' || key === 'DEL') {
        this.countOperands = 0;
        this.dotAllowed = true;
        this.setState({ input: '', deleteKey: 'DEL' });
      } else if (NONZEROS.indexOf(key) !== -1 || key === DOT) {
        this.countOperands = 0;
        this.dotAllowed = true;
        this.setState({ input: key, deleteKey: 'DEL' });
      }

    // Handle inputs for other cases
    } else if (key === 'DEL') {
      if (OPS.indexOf(lastKey) !== -1) {
        if (!(lastKey === '-' && this.state.input.length === 1)) {
          this.countOperands -= 1;
        }
        if (lastKey === DOT) {
          this.dotAllowed = true;
        }
        if (lastKey === SQRT) {
          this.insideSqrt = false;
          this.countOperands -= 1;
        }
        if (lastKey === EXPO) {
          this.insideExpo = false;
          this.countOperands -= 1;
        }
      }
      this.setState({ input: original.slice(0, original.length - 1) });
      this.calculateOutput();
    } else if (key === 'Enter') {
      if (OPS.indexOf(lastKey) === -1) {
        this.addToCalculations(this.state.output);
        this.setState({ input: this.state.output });
        this.setState({ output: '', deleteKey: 'CLR' });
        this.countOperands = 0;
      }
    } else if (OPS.indexOf(key) !== -1) {
      if (OPS.indexOf(lastKey) === -1) {
        this.countOperands += 1;
        this.dotAllowed = true;
        this.insideSqrt = false;
        this.insideExpo = false;
        this.setState({ input: original + key });
      } else if (key === '-') {
        if (lastKey === '*' || lastKey === '/') {
          this.setState({ input: original + key });
        }
      }
    } else if (key === SQRT) {
      if (!this.insideSqrt && OPS.indexOf(lastKey) !== -1) {
        this.setState({ input: original + key });
        this.insideSqrt = true;
      }
    } else if (key === EXPO) {
      if (!this.insideExpo && OPS.indexOf(lastKey) === -1) {
        this.setState({ input: original + key });
        this.insideExpo = true;
        this.countOperands += 1;
      }
    } else if (NUMS.indexOf(key) !== -1) {
      this.setState({ input: original + key });
      this.calculateOutput();
    } else if (key === DOT) {
      if (this.dotAllowed) {
        this.setState({ input: original + key });
        this.dotAllowed = false;
      }
    }
  }

  addToCalculations(calculation) {
    const calculations = this.state.calculations.slice();
    if (calculations.length < 10) {
      calculations.unshift(calculation);
    } else {
      calculations.pop();
      calculations.unshift(calculation);
    }
    this.setState({ calculations });
  }

  calculateOutput() {
    let { input } = this.state;
    const lastKey = input[input.length - 1];
    const OPS = ['/', '*', '+', '-', '√', '^'];
    const DOT = '.';
    input = input.replace(/√(\d+)([-+/*]*)/g, 'Math.sqrt($1)$2');
    input = input.replace(/([\d.]+)\^(\d+)([-+/*]*)/g, 'Math.pow($1,$2)$3');
    if (this.countOperands === 0) {
      this.setState({ output: '' });
    } else if (OPS.indexOf(lastKey) === -1 && lastKey !== DOT) {
      console.log(input);
      this.setState({ output: eval(input) });
    } else {
      this.setState({ output: '' });
    }
  }

  render() {
    const {
      input, output, calculations, deleteKey,
    } = this.state;
    return (
      <div className="Calculator">
        <Display input={input} output={output} calculations={calculations} />
        <Keypad deleteKey={deleteKey} onUserInput={this.handleUserInput} />
      </div>
    );
  }
}

export default Calculator;
