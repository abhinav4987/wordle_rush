import {store} from 'src/state/store';

export const validaetFiveLetterWord = (word: string) => {
  const {
    words: {fiveLetterWords},
  } = store.getState();

  return fiveLetterWords.includes(word.toLowerCase());
};
