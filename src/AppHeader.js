import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <div className="App-header">
        <h2>React Puzzle Games - Hangman</h2>
        <div className="App-header-controls">
          <button onClick={this.props.onNewGame} className="App-header-btn">
            <span className="App-header-icon">&#x21BB;</span>
            NEW GAME
          </button>
          <div className="App-header-stat">
            <span className="App-header-icon">&#x2764;</span>
            Lives: {this.props.guesses}
          </div>
          <div className="App-header-stat">
            <span className="App-header-icon">&#x2717;</span>
            Wrong: {this.props.wrongGuesses}
          </div>
        </div>
      </div>
    );
  }
}

AppHeader.propTypes = {
  onNewGame: PropTypes.func.isRequired,
  guesses: PropTypes.number.isRequired,
  wrongGuesses: PropTypes.number.isRequired,
};

export default AppHeader;
