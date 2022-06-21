import {createSelector, Selector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectFiveLetterResult: Selector = createSelector(
  (state: RootState) => state.result,
  result => result.fiveLetterResults,
);

export default {
  selectFiveLetterResult,
};
