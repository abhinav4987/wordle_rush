import Keyboard from './keyboard';
import Words from './words';
import Result from './results';

export default {
  keyboard: Keyboard.reducer,
  words: Words.reducer,
  result: Result.reducer,
};
