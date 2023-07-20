import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  address: null,
  payment: null,
  totalPrice: 0,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    orderSuccess: (state, action) => {
      state.address = action.payload.address;
      state.payment = action.payload.payment;
      state.totalPrice = action.payload.totalPrice;
      state.error = null;
    },

    orderError: (state, action) => {
      state.error = action.payload.message;
    },
  },
});

export const { orderSuccess, orderError } = orderSlice.actions;

export const orderSelector = (state) => state.orders;

export default orderSlice.reducer;
