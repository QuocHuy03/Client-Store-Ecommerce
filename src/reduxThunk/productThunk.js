import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSearchProduct } from "../utils/api/productsApi";

export const searchProductThunk = createAsyncThunk(
  "search/product",
  async (data, { dispatch }) => {
    try {
      const response = await fetchSearchProduct(data);
      return response;
    } catch (error) {
      dispatch(loginError(error));
      throw new Error(error);
    }
  }
);
