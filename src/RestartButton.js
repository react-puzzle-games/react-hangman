import React, { Component, PropTypes } from 'react';

import { GAME_WON } from './game-states';

import './RestartButton.css';

class RestartButton extends Component {
  render() {
    return (
      <div className="App-Restart">
        <button onClick={this.props.onClick}>
          {this.props.gameState === GAME_WON ? 'Play' : 'Try'} again
        </button>
      </div>
    );
  }
}

RestartButton.propTypes = {
  gameState: PropTypes.symbol.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default RestartButton;
