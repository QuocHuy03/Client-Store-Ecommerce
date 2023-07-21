import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/libs/Layout";
import { AppContext } from "../../context/AppContextProvider";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderSuccessThunk } from "../../reduxThunk/orderThunk";
import { transport_fee } from "../../env";

export default function OrderPage() {
  const { carts, user } = useContext(AppContext);
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
    vnp_TransactionStatus: queryParams.get("vnp_TransactionStatus"),
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
          totalPrice: totalAmount - transport_fee,
          userID: user.id,
          paymentVnpay,
          methodPayment: paymentHuyNe,
        };
        await dispatch(orderSuccessThunk(orders));
      } else if (paymentHuyNe === "receive") {
        const orders = {
          carts: carts,
          totalPrice: totalAmount - transport_fee,
          userID: user.id,
          methodPayment: paymentHuyNe,
        };
        await dispatch(orderSuccessThunk(orders));
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
      <h1>Đơn hàng đang xử lý...</h1>
    </Layout>
  );
}
