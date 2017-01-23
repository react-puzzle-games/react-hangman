import React, { Component } from 'react';

import randomWord from './random-word';
import AttemptsLeft from './AttemptsLeft';
import Letter from './Letter';
import Word from './Word';
import VirtualKeyboard from './VirtualKeyboard';
import hangmanAttempts from './HangmanAttempts';

import logo from './logo.svg';
import './App.css';

const GAME_OVER = Symbol('OVER');
const GAME_STARTED = Symbol('BEGIN');
const GAME_WON = Symbol('WIN');

class App extends Component {
  constructor(props) {
    super(props);

    this.onLetterClick = this.onLetterClick.bind(this);
    this.onRestartClick = this.onRestartClick.bind(this);

    // Random word and new game state data
    this.state = this._getNewGameState();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Hangman</h2>
        </div>
        {this._renderGame()}
        {this._renderFooter()}
      </div>
    );
  }

  _renderAttemptsLeft() {
    return (
      <div className="App-AttemptsLeft">
        <AttemptsLeft attempts={this.state.guesses} />
      </div>
    );
  }

  _renderKeyboard() {
    return (
      <div className="App-VirtualKeyboard">
        <VirtualKeyboard
          excluded={this.state.pastGuesses}
          onClick={this.onLetterClick}
        />
      </div>
    );
  }

  _renderGameOver() {
    return (
      <div className="App-GameOver">
        <span>GAME OVER ☠️</span>
        {this._renderRestart()}
      </div>
    )
  }

  _renderGameWin() {
    return (
      <div className="App-GameWin">
        <span>Congrats! 🤗 🏆 🤗</span>
        {this._renderRestart()}
      </div>
    )
  }

  _renderRestart() {
    return (
      <div className="App-Restart">
        <button onClick={this.onRestartClick}>
          {this.state.gameState === GAME_WON ? 'Play' : 'Try'} again
        </button>
      </div>
    );
  }

  _renderInputPanel() {
    const hasAttemptsLeft = this.state.guesses > 0;
    const gameWon = this.state.gameState === GAME_WON;
    const content = hasAttemptsLeft
        ? gameWon
          ? this._renderGameWin()
          : this._renderKeyboard()
        : this._renderGameOver();

    return (
      <div className="App-InputPanel">
        {this._renderWord()}
        {this._renderAttemptsLeft()}
        {content}
      </div>
    );
  }

  _renderGame() {
    return (
      <div className="App-content">
        <div className="App-SideBySide">
          {this._renderInputPanel()}
          <div className="App-Hangman">
            {hangmanAttempts(this.state.guesses)}
          </div>
        </div>
      </div>
    );
  }

  _renderFooter() {
    return (
      <div className="App-footer">
        <h5>Made with <span style={{color: 'red'}}>&#9829;</span> by <a
            target="_blank"
            href="https://twitter.com/ovidiubute">Ovidiu
          </a> using React and create-react-app boilerplate &#169; 2017
        </h5>
      </div>
    );
  }

  _renderWord() {
    return (
      <div className="App-Word">
        <Word>
          {this.state.letters.map((letter, i) => {
            const letterValue = (
              this.state.gameState === GAME_OVER || letter.guessed
            ) ? letter.value : '_';

            return (
              <Letter
                key={`word-letter-${i}`}
                value={letterValue}
              />
            );
          })}
        </Word>
      </div>
    );
  }

  _getNewGameState() {
    const gameWord = randomWord();
    return {
      word: gameWord,
      letters: gameWord.split('').map(letter => ({
        value: letter,
        guessed: false,
      })),
      guesses: 5,
      gameState: GAME_STARTED,
      pastGuesses: [],
    };
  }

  onLetterClick(letter, e) {
    e.preventDefault();

    const firstIndex = this.state.word.indexOf(letter)
    if (firstIndex !== -1) {
      const letters = this.state.letters.map(letterObject => {
        if (letterObject.value === letter) {
          return Object.assign({}, letterObject, {
            guessed: true,
          });
        }

        return letterObject;
      });

      // Check if the game has been won
      const gameWon = letters.reduce((winState, currentObject) => {
        return winState && currentObject.guessed;
      }, true);

      this.setState((prevState, props) => {
        return {
          letters,
          pastGuesses: [letter].concat(prevState.pastGuesses),
          gameState: gameWon ? GAME_WON : GAME_STARTED,
        };
      });
    } else {
      this.setState((prevState, props) => {
        // Update number of attempts left
        const guessesLeft = prevState.guesses - 1;
        let stateUpdate = {
          guesses: guessesLeft,
        };

        // Kill the game if needed
        if (guessesLeft === 0) {
          stateUpdate.gameState = GAME_OVER;
        }

        // Update the letters already tried
        stateUpdate.pastGuesses = [letter].concat(prevState.pastGuesses);

        return stateUpdate;
      });
    }
  }

  onRestartClick(e) {
    e.preventDefault();

    this.setState(this._getNewGameState());
  }
}

export default App;
