import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Calculator</h1>
        </header>
        <div className="container">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
