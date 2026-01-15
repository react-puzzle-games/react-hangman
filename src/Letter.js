import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Letter extends Component {
  render() {
    return (
      <span className="Letter">
        {this.props.value}
      </span>
    );
  }
}

Letter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Letter;
