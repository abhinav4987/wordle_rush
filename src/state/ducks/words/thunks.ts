import {AppDispatch, store} from 'src/state/store';
import wordSlice from './slice';
import {fiveLetterWords} from './fiveLetterWords';

const {
  actions: {setCurrentTarget},
} = wordSlice;

const getRnadomFiveLetterWord = () => (dispatch: AppDispatch) => {
  const state = store.getState();
  const {
    words: {unUsedFiveLetterWords},
  } = state;

  const randomWord =
    unUsedFiveLetterWords[
      Math.floor(Math.random() * unUsedFiveLetterWords.length)
    ];
  dispatch(setCurrentTarget(randomWord));
};

export default {
  getRnadomFiveLetterWord,
};
