import { configureStore } from "@reduxjs/toolkit";
import tradeReducer from "../features/tradeSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    trades: tradeReducer,
    user: userReducer,
  },
});

export default store;
