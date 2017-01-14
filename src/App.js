// @flow
import React, { Component } from 'react';
import VirtualKeyboard from './VirtualKeyboard';
import Hangman from './Hangman';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Hangman</h2>
        </div>
        <div className="App-VirtualKeyboard">
          <VirtualKeyboard onClick={this.onLetterClick} />
        </div>
        <div className="App-Hangman">
          <Hangman />
        </div>
      </div>
    );
  }

  onLetterClick(letter: string) {
    console.log(letter);
  }
}

export default App;
