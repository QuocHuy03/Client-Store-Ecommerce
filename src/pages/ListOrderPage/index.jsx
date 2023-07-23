import React from "react";
import { useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getOrderThunk } from "../../reduxThunk/orderThunk";
import { AppContext } from "../../context/AppContextProvider";
import Layout from "../../components/libs/Layout";
import { Tabs } from "antd";
import TabList from "../../components/TabList";

export default function ListOrderPage() {
  const { user, orders } = useContext(AppContext);
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

  // tabs

  const items = [
    {
      key: "1",
      label: `Chờ Thanh Toán`,
      children: orders,
    },
    {
      key: "2",
      label: `Chờ Giao Hàng`,
      children: orders,
    },
    {
      key: "3",
      label: `Đã Hoàn Thành`,
      children: orders,
    },
  ];

  // table

  const columns = [
    {
      title: "Mã Đơn Hàng",
      dataIndex: "code",
      sorter: (a, b) => a.code - b.code,
    },
    {
      title: "Tổng Tiền",
      dataIndex: "totalPrice",
      sorter: (a, b) => a.totalPrice - b.totalPrice,
    },
    {
      title: "Tình Trạng",
      dataIndex: "status",
      filters: [
        {
          text: "Đã Thanh Toán",
          value: "Đã Thanh Toán",
        },
        {
          text: "Chưa Thanh Toán",
          value: "Chưa Thanh Toán",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: "Thời Gian",
      dataIndex: "createdAt",
    },

    {
      title: "Thao Tác",
      dataIndex: "detailProduct",
    },
  ];

  // change key

  const changeStatus = (key) => {
    console.log(key);
  };

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Orders</h1>
            <div className="mt-4 lg:grid lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-12">
                <ul>
                  {orders && orders.length > 0 ? (
                    <TabList
                      items={items}
                      columns={columns}
                      changeStatus={changeStatus}
                    />
                  ) : (
                    <p className="text-center">
                      <Empty />
                    </p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
