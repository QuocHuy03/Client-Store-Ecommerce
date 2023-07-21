import { createSlice } from "@reduxjs/toolkit";
import { getDiscountThunk } from "../../reduxThunk/discountThunk";

const initialState = {
  discounts: null,
  error: null,
};

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    fetchDiscountsSuccess: (state, action) => {
      state.discounts = action.payload;
      state.error = null;
    },

    fetchDiscountsError: (state, action) => {
      state.discounts = null;
      state.error = action.payload.message;
    },

    deleteDiscountSuccess: (state, action) => {
      const deletedDiscountId = action.payload;
      state.discounts = state.discounts.filter(
        (discount) => discount.id !== deletedDiscountId
      );
      state.error = null;
    },

    deleteDiscountError: (state, action) => {
      state.error = action.payload.message;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDiscountThunk.fulfilled, (state, action) => {
        state.discounts = action.payload;
        state.error = null;
      })
      .addCase(getDiscountThunk.rejected, (state, action) => {
        state.discounts = null;
        state.error = action.error.message;
      });
  },
});

export const {
  fetchDiscountsSuccess,
  fetchDiscountsError,
  deleteDiscountSuccess,
  deleteDiscountError,
} = discountSlice.actions;

export const discountSelector = (state) => state.discount;

export default discountSlice.reducer;
