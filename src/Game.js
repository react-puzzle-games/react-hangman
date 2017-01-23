import React, { Component, PropTypes } from 'react';

import AttemptsLeft from './AttemptsLeft';
import Letter from './Letter';
import Word from './Word';
import RestartButton from './RestartButton';
import VirtualKeyboard from './VirtualKeyboard';
import hangmanAttempts from './HangmanAttempts';
import { GAME_WON, GAME_OVER } from './game-states';

import './Game.css';

class Game extends Component {
  render() {
    return (
      <div className="Game-content">
        <div className="Game-SideBySide">
          {this._renderInputPanel()}
          <div className="Game-Hangman">
            {hangmanAttempts(this.props.guesses)}
          </div>
        </div>
      </div>
    );
  }

  _renderInputPanel() {
    const hasAttemptsLeft = this.props.guesses > 0;
    const gameWon = this.props.gameState === GAME_WON;
    const content = hasAttemptsLeft
        ? gameWon
          ? this._renderGameFinished('Congrats! 🤗 🏆 🤗', 'Game-GameWin')
          : (
            <div className="Game-VirtualKeyboard">
              <VirtualKeyboard
                excluded={this.props.pastGuesses}
                onClick={this.props.onLetterClick}
              />
            </div>
          )
        : this._renderGameFinished('GAME OVER ☠️', 'Game-GameOver');

    return (
      <div className="Game-InputPanel">
        {this._renderWord()}
        <div className="Game-AttemptsLeft">
          <AttemptsLeft attempts={this.props.guesses} />
        </div>
        {content}
      </div>
    );
  }

  _renderGameFinished(message, cssClass) {
    return (
      <div className={cssClass}>
        <span>{message}</span>
        <RestartButton
          onClick={this.props.onRestartClick}
          gameState={this.props.gameState}
        />
      </div>
    )
  }

  _renderWord() {
    return (
      <div className="Game-Word">
        <Word>
          {this.props.letters.map((letter, i) => {
            const letterValue = (
              this.props.gameState === GAME_OVER || letter.guessed
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
}

Game.propTypes = {
  guesses: PropTypes.number.isRequired,
  word: PropTypes.string.isRequired,
  letters: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    guessed: PropTypes.bool.isRequired,
  })).isRequired,
  gameState: PropTypes.symbol.isRequired,
  pastGuesses: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLetterClick: PropTypes.func.isRequired,
  onRestartClick: PropTypes.func.isRequired,
}

export default Game;
