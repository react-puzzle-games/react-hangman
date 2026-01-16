import React, { Component } from 'react';

import gameFactory from './game-state-factory';
import { GAME_WON, GAME_STARTED, GAME_OVER } from './game-states';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Game from './Game';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onLetterClick = this.onLetterClick.bind(this);
    this.onRestartClick = this.onRestartClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

    // Random word and new game state data
    this.state = {
      ...gameFactory.newGame(),
      cheatMode: false,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    // Ctrl+Shift+C to toggle cheat mode (reveal word)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      this.setState(prevState => ({ cheatMode: !prevState.cheatMode }));
    }
  }

  render() {
    const gameProps = {
      onLetterClick: this.onLetterClick,
      onRestartClick: this.onRestartClick,
      cheatMode: this.state.cheatMode,
      ...this.state
    };

    return (
      <div className="App">
        <AppHeader
          onNewGame={this.onRestartClick}
          guesses={this.state.guesses}
          wrongGuesses={this.state.pastGuesses.filter(g => !this.state.word.includes(g)).length}
        />
        <Game {...gameProps} />
        <AppFooter />
      </div>
    );
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

    this.setState({
      ...gameFactory.newGame(),
      cheatMode: false,
    });
  }
}

export default App;
