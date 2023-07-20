import { createAsyncThunk } from "@reduxjs/toolkit";
import { postOrder } from "../utils/api/orderApi";
import { verifyToken } from "../middlewares/verifyToken";
import { loginError, loginSuccess } from "../stores/authSlice";
import { message } from "antd";

export const orderThunk = createAsyncThunk(
  "orders",
  async (data, { dispatch }) => {
    try {
      const response = await postOrder(data);
      if (response.status === true) {
        message.success(`${response.message}`);
        // dispatch(loginSuccess(user));
        return response;
      } else {
        // dispatch(loginError(response));
        message.error(`${response.message}`);
        throw new Error(response.message);
      }
    } catch (error) {
      //   dispatch(loginError(error));
      throw new Error(error);
    }
  }
);
