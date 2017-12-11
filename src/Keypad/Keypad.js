import React, { Component } from 'react';
import './Keypad.css';

class Keypad extends Component {
  constructor(props) {
    super(props);
    this.nums = ['.', '0', '='].concat('123456789'.split(''));
    this.cmds = ['DEL', '/', '*', '-', '+', '√', '^'];
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.props.onUserInput(e.key || e.target.dataset.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', (e) => {
      if (this.cmds.indexOf(e.key) !== -1 || this.nums.indexOf(e.key) !== -1) {
        this.handleInput(e);
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' || e.key === 'Enter') {
        this.handleInput(e);
      }
    });
  }

  render() {
    this.cmds[0] = this.props.deleteKey;
    const cmds = this.cmds.map(cmd => (
      <div className="cmd" data-key={cmd} key={cmd} onClick={this.handleInput}>
        <div>{cmd}</div>
      </div>
    ));
    const nums = this.nums.map(num => (
      <div className="num" data-key={num} key={num} onClick={this.handleInput}>
        <div>{num}</div>
      </div>
    ));
    return (
      <div className="Keypad">
        <div className="nums">
          {nums}
        </div>
        <div className="cmds">
          {cmds}
        </div>
      </div>
    );
  }
}

export default Keypad;
