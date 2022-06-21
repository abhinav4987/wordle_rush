import {createSelector, Selector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectTargetFiveLetterWord: Selector = createSelector(
  (state: RootState) => state.words,
  words => words.currentTarget,
);

export const selectAllFiveLetterWords: Selector = createSelector(
  (state: RootState) => state.words,
  words => words.fiveLetterWords,
);

export default {
  selectTargetFiveLetterWord,
  selectAllFiveLetterWords,
};
