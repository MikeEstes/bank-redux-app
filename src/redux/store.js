import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './accountSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
