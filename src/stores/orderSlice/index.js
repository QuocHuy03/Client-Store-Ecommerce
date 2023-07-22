import { createSlice } from "@reduxjs/toolkit";
import { getOrderThunk } from "../../reduxThunk/orderThunk";

const initialState = {
  orders: null,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    fetchOrderSuccess: (state, action) => {
      state.orders = action.payload;
      state.error = null;
    },

    fetchOrderError: (state, action) => {
      state.orders = null;
      state.error = action.payload.message;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderThunk.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.error = null;
      })
      .addCase(getOrderThunk.rejected, (state, action) => {
        state.orders = null;
        state.error = action.error.message;
      });
  },
});

export const { fetchOrderSuccess, fetchOrderError } = orderSlice.actions;
export const orderSelector = (state) => state.order;

export default orderSlice.reducer;
