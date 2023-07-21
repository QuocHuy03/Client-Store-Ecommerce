import { createAsyncThunk } from "@reduxjs/toolkit";
import { applyDiscount, getDiscount } from "../utils/api/discountApi";

export const getDiscountThunk = createAsyncThunk(
  "getDiscount",
  async (data, { dispatch }) => {
    try {
      const list = await getDiscount();
      if (list) {
        return list;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const applyDiscountThunk = createAsyncThunk(
  "applyDiscount",
  async (data, { dispatch }) => {
    try {
      const aplly = await applyDiscount(data);
      if (aplly) {
        return aplly;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);
