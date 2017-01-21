import React from 'react';
import Hangman from './Hangman';

export default (attemptsLeft) => {
  let props = {
    leftArm: attemptsLeft === 5,
    rightArm: attemptsLeft >= 4,
    leftLeg: attemptsLeft >= 3,
    rightLeg: attemptsLeft >= 2,
    body: attemptsLeft >= 1,
  };

  return <Hangman {...props} />
};
