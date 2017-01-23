import randomWord from './random-word';
import { GAME_STARTED } from './game-states';

export default {
  newGame: () => {
    const gameWord = randomWord();
    return {
      word: gameWord,
      letters: gameWord.split('').map(letter => ({
        value: letter,
        guessed: false,
      })),
      guesses: 5,
      gameState: GAME_STARTED,
      pastGuesses: [],
    };
  }
}
