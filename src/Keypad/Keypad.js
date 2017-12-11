import React, { Component } from 'react';
import './Keypad.css';

class Keypad extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onUserInput(e.target.dataset.key);
  }

  render() {
    const { input, output, deleteKey } = this.props;
    const del = deleteKey ? 'DEL' : 'CLR';
    let cmds = [del, '%', 'x', '-', '+'];
    cmds = cmds.map(cmd => (
      <div className="cmd" data-key={cmd} key={cmd} onClick={this.handleClick}>{cmd}</div>
    ));
    let nums = [',', '0', '='].concat('123456789'.split(''));
    nums = nums.map(num => (
      <div className="num" data-key={num} key={num} onClick={this.handleClick}>{num}</div>
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
