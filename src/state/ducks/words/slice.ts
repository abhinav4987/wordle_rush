import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fiveLetterWords} from './fiveLetterWords';

interface WordState {
  fiveLetterWords: Array<string>;
  unUsedFiveLetterWords: Array<string>;
  currentTarget: string;
}

const initialState: WordState = {
  fiveLetterWords: fiveLetterWords,
  unUsedFiveLetterWords: fiveLetterWords,
  currentTarget: '',
};

const wordSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    setCurrentTarget: (state, action: PayloadAction<string>) => {
      const {payload} = action;
      state.currentTarget = payload;
    },
    removeUsedWord: (state, action: PayloadAction<string>) => {
      const {payload} = action;
      const {unUsedFiveLetterWords} = state;
      const index = unUsedFiveLetterWords.indexOf(payload);

      if (index > -1) {
        unUsedFiveLetterWords.splice(index, 1);
      }
      state.unUsedFiveLetterWords = unUsedFiveLetterWords;
    },
  },
});

export default wordSlice;
