import React, { Component, PropTypes } from 'react';
import './Word.css';

class Word extends Component {
  render() {
    return (
      <div className="Word">
        {this.props.children}
      </div>
    );
  }
}

Word.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default Word;
