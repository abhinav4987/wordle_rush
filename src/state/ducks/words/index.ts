import slice from './slice';
import thunks from './thunks';
import selector from './selectors';

export default {
  reducer: slice.reducer,
  ...slice.actions,
  ...thunks,
  ...selector,
};
