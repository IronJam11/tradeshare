// tradersSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTradersApi } from "../api/tradersapi";

const initialState = {
  traders: [],
  loading: false,
  error: null,
};

export const fetchTraders = createAsyncThunk(
  "traders/fetchTraders",
  async () => {
    const response = await fetchTradersApi();
    return response.data;
  }
);

const tradersSlice = createSlice({
  name: "traders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTraders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTraders.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action)
        state.traders = action.payload;
      })
      .addCase(fetchTraders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default tradersSlice.reducer;
