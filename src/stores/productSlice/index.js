import { createSlice } from "@reduxjs/toolkit";
import { searchProductThunk } from "../../reduxThunk/productThunk";

const initialState = {
  search: null,
  error: null,
};

const productSlide = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProductSuccess: (state, action) => {
      state.search = action.payload;
    },

    searchProductError: (state, action) => {
      state.search = null;
      state.error = action.payload.message;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProductThunk.fulfilled, (state, action) => {
        state.search = action.payload;
        state.error = null;
      })
      .addCase(searchProductThunk.rejected, (state, action) => {
        state.search = null;
        state.error = action.error.message;
      });
  },
});

export const { searchProductSuccess, searchProductError } =
  productSlide.actions;
export const productSelector = (state) => state.search;

export default productSlide.reducer;
