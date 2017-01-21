import React, { Component, PropTypes } from 'react';
import './LetterBlock.css';

class LetterBlock extends Component {
  render() {
    return (
      <div className="LetterBlock">
        <span onClick={this.props.onClick}>
          {this.props.value}
        </span>
      </div>
    );
  }
}

LetterBlock.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default LetterBlock;
