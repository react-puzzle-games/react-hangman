import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LettersRow.css';

class LettersRow extends Component {
  render() {
    return (
      <div className="LettersRow">
        {this.props.children}
      </div>
    );
  }
}

LettersRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default LettersRow;
