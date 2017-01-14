import React, { Component, PropTypes } from 'react';
import LettersRow from './LettersRow';
import LetterBlock from './LetterBlock';
import './VirtualKeyboard.css';

class VirtualKeyboard extends Component {
  render() {
    return (
      <div className="VirtualKeyboard">
        <div key="First" className="VirtualKeyboard-FirstRow">
          {this._renderRow(VirtualKeyboard.FIRST_ROW)}
        </div>
        <div key="Second" className="VirtualKeyboard-SecondRow">
          {this._renderRow(VirtualKeyboard.SECOND_ROW)}
        </div>
        <div key="Third" className="VirtualKeyboard-ThirdRow">
          {this._renderRow(VirtualKeyboard.THIRD_ROW)}
        </div>
      </div>
    );
  }

  _renderRow(letters) {
    const children = letters.map(letter => (
      <LetterBlock
        value={letter}
        onClick={this.props.onClick.bind(null, letter)}
        key={`LetterBlock-${letter}`}
      />
    ));

    return (
      <LettersRow>
        {children}
      </LettersRow>
    );
  }
}

VirtualKeyboard.propTypes = {
  onClick: PropTypes.func.isRequired,
}

VirtualKeyboard.FIRST_ROW = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
VirtualKeyboard.SECOND_ROW = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
VirtualKeyboard.THIRD_ROW = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

export default VirtualKeyboard;
