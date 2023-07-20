import { createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin } from "../utils/api/authApi";
import { verifyToken } from "../middlewares/verifyToken";
import { loginError, loginSuccess } from "../stores/authSlice";
import { message } from "antd";

export const orderThunk = createAsyncThunk(
  "orders",
  async (data, { dispatch }) => {
    try {
      const response = await postLogin(data);
      if (response.status === true) {
        const user = await verifyToken(response.accessToken);
        message.success(`${response.message}`);
        dispatch(loginSuccess(user));
        return response;
      } else {
        dispatch(loginError(response));
        message.error(`${response.message}`);
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(loginError(error));
      throw new Error(error);
    }
  }
);
