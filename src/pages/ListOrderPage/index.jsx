import React from "react";
import { useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getOrderThunk } from "../../reduxThunk/orderThunk";
import { AppContext } from "../../context/AppContextProvider";

export default function ListOrderPage() {
  const { user, orders } = useContext(AppContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchOrders = async () => {
    try {
      await dispatch(getOrderThunk(user.id));
    } catch (error) {
      console.error("Error fetching discounts:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [dispatch, user]);

  return <div>ListOrderPage</div>;
}
