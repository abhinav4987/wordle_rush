import {createSelector, Selector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectInput: Selector = createSelector(
  (state: RootState) => state.keyboard,
  keyboard => keyboard.input,
);

export const selectUsedLetters: Selector = createSelector(
  (state: RootState) => state.keyboard,
  keyboard => keyboard.usedLetters,
);

export const selectGusses: Selector = createSelector(
  (state: RootState) => state.keyboard,
  keyboard => keyboard.guesses,
);

export default {
  selectInput,
  selectUsedLetters,
  selectGusses,
};
