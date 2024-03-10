import { configureStore } from "@reduxjs/toolkit";
import tradeReducer from "../features/tradeSlice";
import userReducer from "../features/userSlice";
import traderReducer from "../features/tradersSlice";
const store = configureStore({
  reducer: {
    trades: tradeReducer,
    user: userReducer,
    traders: traderReducer,
  },
});

export default store;
