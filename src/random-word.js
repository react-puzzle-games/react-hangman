import words from './hangman-words';

export default () => {
  const wordIndex = Math.floor(Math.random() * words.length);

  return words[wordIndex];
}
