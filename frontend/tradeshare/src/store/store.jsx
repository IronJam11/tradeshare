import { configureStore } from '@reduxjs/toolkit';
import tradeReducer from '../features/tradeSlice';

const store = configureStore({
  reducer: {
    trades: tradeReducer,
  },
});

export default store;
