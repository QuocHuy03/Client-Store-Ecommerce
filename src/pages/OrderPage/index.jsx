import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/libs/Layout";
import { AppContext } from "../../context/AppContextProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderSuccessThunk } from "../../reduxThunk/orderThunk";
import { v4 as uuidv4 } from "uuid";
import { transport_fee } from "../../env";
import { message } from "antd";

export default function OrderPage() {
  const { carts, user, discounts } = useContext(AppContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paymentHuyNe = queryParams.get("paymentMethod");
  const [paymentVnpay, setPaymentVnpay] = useState({
    vnp_Amount: queryParams.get("vnp_Amount"),
    vnp_BankCode: queryParams.get("vnp_BankCode"),
    vnp_BankTranNo: queryParams.get("vnp_BankTranNo"),
    vnp_CardType: queryParams.get("vnp_CardType"),
    vnp_OrderInfo: queryParams.get("vnp_OrderInfo"),
    vnp_TransactionNo: queryParams.get("vnp_TransactionNo"),
  });

  const totalAmount = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePaymentResponse = async () => {
    try {
      if (paymentHuyNe === "vnpay") {
        const orders = {
          carts: carts,
          totalPrice: discounts
            ? totalAmount - discounts.totalPrice - transport_fee
            : totalAmount - transport_fee,
          userID: user.id,
          paymentVnpay,
          methodPayment: paymentHuyNe,
        };
        const res = await dispatch(orderSuccessThunk(orders));
        console.log(res);
        if (res.payload.status === true) {
          message.success(res.payload.message);
          navigate("/list-order");
        } else {
          // message.error(res.payload);
          navigate(`/checkout/${uuidv4()}`);
        }
      } else if (paymentHuyNe === "receive") {
        const orders = {
          carts: carts,
          totalPrice: discounts
            ? totalAmount - discounts.totalPrice - transport_fee
            : totalAmount - transport_fee,
          userID: user.id,
          methodPayment: paymentHuyNe,
        };
        const res = await dispatch(orderSuccessThunk(orders));

        if (res.payload.status === true) {
          message.success(res.payload.message);
          navigate("/list-order");
        } else {
          // message.error(res.payload);
          navigate(`/checkout/${uuidv4()}`);
        }
      } else {
        console.log("Huy Nè!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlePaymentResponse();
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl text-center p-10">Đơn hàng đang xử lý...</h1>
    </Layout>
  );
}
