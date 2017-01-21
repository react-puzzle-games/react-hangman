import words from 'an-array-of-english-words';

export default () => {
  const wordIndex = Math.floor(Math.random() * words.length);

  return words[wordIndex];
}
