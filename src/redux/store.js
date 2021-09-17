import { configureStore } from '@reduxjs/toolkit';
import bankingReducer from './bankingSlice';

export default configureStore({
  reducer: {
    bank: bankingReducer,
  },
});
