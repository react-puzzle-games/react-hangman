import React, { Component, PropTypes } from 'react';
import './LetterBlock.css';

class LetterBlock extends Component {
  render() {
    return (
      <div className="LetterBlock">
        <span
          onClick={this.props.onClick}
          className={this.props.disabled ? 'disabled' : ''}>
          {this.props.value}
        </span>
      </div>
    );
  }
}

LetterBlock.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

LetterBlock.defaultProps = {
  disabled: false,
};

export default LetterBlock;
