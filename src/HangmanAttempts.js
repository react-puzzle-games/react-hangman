import React from 'react';
import Hangman from './Hangman';

export default (attemptsLeft) => {
  let props = {
    body: attemptsLeft <= 4,
    leftArm: attemptsLeft <= 3,
    rightArm: attemptsLeft <= 2,
    leftLeg: attemptsLeft <= 1,
    rightLeg: attemptsLeft === 0,
  };

  return <Hangman {...props} />
};
