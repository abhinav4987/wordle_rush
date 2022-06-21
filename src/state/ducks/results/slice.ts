import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {fiveLetterWords} from './fiveLetterWords';

interface ResultState {
  wins: number;
  loss: number;
  successInXTry: number[];
  totalGames: number;
}

interface NewResult {
  solved: boolean;
  word: string;
  result: Array<0 | 1 | 2>[];
}

const initialState: {
  [key: string]: ResultState;
} = {
  fiveLetterResults: {
    wins: 0,
    loss: 0,
    successInXTry: Array(6).fill(0),
    totalGames: 0,
  },
};

const resultSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    addToFiveLetterResult: (state, action: PayloadAction<NewResult>) => {
      const {payload} = action;
      if (payload.solved) {
        state.fiveLetterResults.wins++;
        state.fiveLetterResults.successInXTry[payload.result.length - 1]++;
      } else {
        state.fiveLetterResults.loss++;
      }
      state.fiveLetterResults.totalGames++;
    },
  },
});

export default resultSlice;
