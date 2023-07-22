import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  applyDiscount,
  deleteDiscount,
  getDiscountByID,
} from "../utils/api/discountApi";

export const getDiscountThunk = createAsyncThunk(
  "getDiscount",
  async (data, { dispatch }) => {
    try {

      const list = await getDiscountByID(data);
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

export const deleteDiscountThunk = createAsyncThunk(
  "deleteDiscount",
  async (data, { dispatch }) => {
    try {
      const deleteDiscounts = await deleteDiscount(data);
      if (deleteDiscounts) {
        return deleteDiscounts;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);
