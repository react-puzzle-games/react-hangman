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
    const children = letters
      .filter(letter => this.props.excluded.indexOf(letter) === -1)
      .map(letter => (
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
  excluded: PropTypes.arrayOf(PropTypes.string),
};

VirtualKeyboard.defaultProps = {
  excluded: [],
};

VirtualKeyboard.FIRST_ROW = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
VirtualKeyboard.SECOND_ROW = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
VirtualKeyboard.THIRD_ROW = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

export default VirtualKeyboard;
