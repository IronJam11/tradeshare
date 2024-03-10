// tradeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchTradesApi,
  createTradeApi,
  editTradeApi,
  deleteTradeApi,
} from "../api/trade";

// Define initial state
const initialState = {
  trades: [],
  loading: false,
  error: null,
};

// Async Thunks for CRUD operations
export const fetchTrades = createAsyncThunk("trades/fetchTrades", async () => {
  const response = await fetchTradesApi();
  return response.data;
});

export const createTrade = createAsyncThunk(
  "trades/createTrade",
  async (newTrade) => {
    const response = await createTradeApi(newTrade);
    return response.data;
  }
);

export const editTrade = createAsyncThunk(
  "trades/editTrade",
  async ({ id, updatedData }) => {
    const response = await editTradeApi(id, updatedData);
    return response.data;
  }
);

export const deleteTrade = createAsyncThunk(
  "trades/deleteTrade",
  async (id) => {
    await deleteTradeApi(id);
    return id;
  }
);

// Create trade slice
const tradeSlice = createSlice({
  name: "trades",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrades.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrades.fulfilled, (state, action) => {
        state.loading = false;
        state.trades = action.payload;
      })
      .addCase(fetchTrades.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTrade.fulfilled, (state, action) => {
        state.trades.push(action.payload);
      })
      .addCase(editTrade.fulfilled, (state, action) => {
        const index = state.trades.findIndex(
          (trade) => trade.id === action.payload.id
        );
        if (index !== -1) {
          state.trades[index] = action.payload;
        }
      })
      .addCase(deleteTrade.fulfilled, (state, action) => {
        state.trades = state.trades.filter(
          (trade) => trade.id !== action.payload
        );
      });
  },
});

export default tradeSlice.reducer;
