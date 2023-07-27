import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
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
});

export const { searchProductSuccess, searchProductError } =
  productSlide.actions;
export const productSelector = (state) => state.search;

export default productSlide.reducer;
