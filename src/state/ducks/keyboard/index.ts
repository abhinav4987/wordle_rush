import slice from './slices';
import selectors from './selector';

export default {
  reducer: slice.reducer,
  ...selectors,
  ...slice.actions,
};
