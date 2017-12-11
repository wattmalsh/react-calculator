import React, { Component } from 'react';
import './Keypad.css';

class Keypad extends Component {
  render() {
    let cmds = ['DEL', '%', 'x', '-', '+'];
    cmds = cmds.map(cmd => (
      <div className="cmd" data-key={cmd}>{cmd}</div>
    ));
    let nums = [',', '0', '='].concat('123456789'.split(''));
    nums = nums.map(num => (
      <div className="num" data-key={num}>{num}</div>
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
