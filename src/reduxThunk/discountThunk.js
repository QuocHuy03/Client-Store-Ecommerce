import { createAsyncThunk } from "@reduxjs/toolkit";
import { orderSuccess } from "../utils/api/orderApi";
import {
  fetchDiscountsError,
  fetchDiscountsSuccess,
} from "../stores/discountSlice";
import { getDiscount } from "../utils/api/discountApi";

export const getDiscountThunk = createAsyncThunk(
  "getDiscount",
  async (data, { dispatch }) => {
    try {
      const list = await getDiscount();
      if (list) {
        return list;
      }
    } catch (error) {
      dispatch(fetchDiscountsError(error));
      throw new Error(error);
    }
  }
);

export const orderSuccessThunk = createAsyncThunk(
  "applyDiscount",
  async (data, { dispatch }) => {
    try {
      const order = await orderSuccess(data);
      return order;
    } catch (error) {
      const errormsg = "Lỗi trong quá trình thanh toán";
      return errormsg;
      throw new Error(error);
    }
  }
);
