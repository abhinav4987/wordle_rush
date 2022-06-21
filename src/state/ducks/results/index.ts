import slice from './slice';
import selector from './selector';

export default {
  reducer: slice.reducer,
  ...slice.actions,
  ...selector,
};
