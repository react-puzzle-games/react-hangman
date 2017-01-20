import React, { Component } from 'react';

import randomWord from './random-word';
import Letter from './Letter';
import Word from './Word';
import VirtualKeyboard from './VirtualKeyboard';
import Hangman from './Hangman';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const gameWord = randomWord();
    this.state = {
      word: gameWord,
      letters: gameWord.split('').map(letter => ({
        value: letter,
        guessed: false,
      })),
      guesses: 5,
      gameState: 'BEGIN',
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Hangman</h2>
        </div>
        {this._renderGame()}
      </div>
    );
  }

  _renderGame() {
    return this.state.gameState === 'BEGIN'
      ? this._renderNewGame()
      : this._renderGameOver();
  }

  _renderNewGame() {
    return (
      <div>
        <div className="App-VirtualKeyboard">
          <VirtualKeyboard onClick={this.onLetterClick} />
        </div>
        <div className="App-Hangman">
          <Hangman />
        </div>
      </div>
    );
  }

  _renderGameOver() {
    return (
      <div>
        GAME OVER
      </div>
    );
  }

  _renderWord() {
    return (
      <div className="App-Word">
        <Word>
          {this.state.letters.map(letter => {
            const elementKey = letter.value.repeat(
              Math.floor(Math.random() * 10)
            );

            return (
              <Letter
                key={elementKey}
                value={letter.guessed ? letter.value : '_'}
              />
            );
          })}
        </Word>
      </div>
    );
  }

  isGuessCorrect(letter) {
    return this.state.word.indexOf(letter) !== -1;
  }

  onLetterClick(letter) {
    console.log(letter);
  }
}

export default App;
