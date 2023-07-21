import { createSlice } from "@reduxjs/toolkit";
import { orderSuccessThunk } from "../../reduxThunk/orderThunk";

const initialState = {
  orders: null,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    postOrderSuccess: (state, action) => {
      state.orders = action.payload;
      state.error = null;
    },

    postOrderError: (state, action) => {
      state.orders = null;
      state.error = action.payload.message;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderSuccessThunk.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.error = null;
      })
      .addCase(orderSuccessThunk.rejected, (state, action) => {
        state.orders = null;
        state.error = action.error.message;
      });
  },
});

export const { postOrderSuccess, postOrderError } = orderSlice.actions;
export const orderSelector = (state) => state.order;

export default orderSlice.reducer;
