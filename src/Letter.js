import React, { Component, PropTypes } from 'react';

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
