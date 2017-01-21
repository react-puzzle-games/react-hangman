import React, { Component, PropTypes } from 'react';

const styles = {
  character: {
    fill: 'none',
    stroke: 'black',
    strokeWidth: 3,
  },
  post: {
    fill: 'none',
    stroke: 'black',
    strokeWidth: 10,
  },
};

class Hangman extends Component {
  render() {
    return (
      <svg width="500" height="550">
        <polyline points="400,500 100,500 150,500 150,100 320,100 320,150"
                  style={styles.post} />
        {this._renderBody()}
        {this._renderLeftArm()}
        {this._renderRightArm()}
        {this._renderLeftLeg()}
        {this._renderRightLeg()}
        {this._renderHead()}
      </svg>
    );
  }

  _renderHead() {
    return this.props.body
        ? <circle cx="320" cy="190" r="40" fill="black" />
        : null;
  }

  _renderBody() {
    return this.props.body
      ? <line x1="320" y1="190" x2="320" y2="360" style={styles.character} />
      : null;
  }

  _renderLeftArm() {
    return this.props.leftArm
      ? <line x1="320" y1="260" x2="250" y2="230" style={styles.character} />
      : null;
  }

  _renderRightArm() {
    return this.props.rightArm
      ? <line x1="320" y1="260" x2="390" y2="230" style={styles.character} />
      : null;
  }

  _renderLeftLeg() {
    return this.props.leftLeg
      ? <line x1="320" y1="360" x2="250" y2="450" style={styles.character} />
      : null;
  }

  _renderRightLeg() {
    return this.props.rightLeg
      ? <line x1="320" y1="360" x2="390" y2="450" style={styles.character} />
      : null;
  }
}

Hangman.propTypes = {
  body: PropTypes.bool,
  leftArm: PropTypes.bool,
  rightArm: PropTypes.bool,
  leftLeg: PropTypes.bool,
  rightLeg: PropTypes.bool,
};

Hangman.defaultProps = {
  body: false,
  leftArm: false,
  rightArm: false,
  leftLeg: false,
  rightLeg: false,
};

export default Hangman;
