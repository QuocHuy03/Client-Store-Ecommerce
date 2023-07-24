import { createAsyncThunk } from "@reduxjs/toolkit";
import { vnpayAPI } from "../utils/api/paymentApi";
import { message } from "antd";
import { getOrderByID, orderSuccess } from "../utils/api/orderApi";
import { updateInfo } from "../utils/api/userApi";
import { loginSuccess } from "../stores/authSlice";

export const orderThunk = createAsyncThunk(
  "checkout",
  async (data, { dispatch }) => {
    try {
      const updateInfos = await updateInfo(data);
      if (updateInfos) {
        dispatch(loginSuccess(updateInfos));
      }

      if (data.methodPayment === 1) {
        const vnPay = await vnpayAPI(data.totalPrice);
        if (vnPay && vnPay.vnpUrl) {
          return vnPay.vnpUrl;
        } else {
          throw new Error("VNPAY URL is missing or invalid.");
        }
      } else if (data.methodPayment === 2) {
        const receive = `/order?paymentMethod=receive`;
        return receive;
      } else {
        message.error("Vui lòng chọn phương thức thanh toán nhé");
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const orderSuccessThunk = createAsyncThunk(
  "order",
  async (data, { dispatch }) => {
    try {
      const order = await orderSuccess(data);
      return order;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getOrderThunk = createAsyncThunk(
  "getOrder",
  async (data, { dispatch }) => {
    try {
      const list = await getOrderByID(data);
      if (list) {
        return list;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);
