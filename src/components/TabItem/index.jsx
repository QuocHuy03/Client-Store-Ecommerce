import { Table, Button } from "antd";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { updateStatusCancel } from "../../utils/api/orderApi";

const TabItem = ({ orders, columns }) => {
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const renderAction = (record) => {
    return <Button onClick={() => handleButtonClick(record)}>Chi Tiết</Button>;
  };

  const handleButtonClick = (record) => {
    navigate(`/detail-order/${record.code}`);
  };

  // column tb

  const updatedColumns = columns.map((column) =>
    column.dataIndex === "totalPrice"
      ? {
          ...column,
          render: (value) => `${value.toLocaleString()}`,
        }
      : column.dataIndex === "createdAt"
      ? {
          ...column,
          render: (value) => `${new Date(value).toLocaleString()}`,
        }
      : column.dataIndex === "detailProduct"
      ? {
          ...column,
          title: "Thao Tác",
          render: (text, record) => renderAction(record),
        }
      : column
  );

  // set time hủy đơn

  const checkCancellation = () => {
    const currentTime = new Date().getTime();
    const updatedData = orders.map((order) => {
      if (order.status === "Chưa Thanh Toán") {
        const createdAtTime = new Date(order.createdAt).getTime();
        const fifteenMinutesLater = createdAtTime + 15 * 60 * 1000; // 15 minutes in milliseconds
        if (currentTime >= fifteenMinutesLater) {
          console.log("Order ID:", order.id, "is cancelled.");
        }
      }
      return order;
    });
    console.log(updatedData);
  };

  // useEffect(() => {
  //   if (orders.length === 0) return;

  //   const earliestOrderTime = Math.min(
  //     ...orders.map((order) => new Date(order.createdAt).getTime())
  //   );

  //   checkCancellation();

  //   timerRef.current = setInterval(checkCancellation, 5000);

  //   return () => {
  //     clearInterval(timerRef.current);
  //   };
  // }, [orders]);

  // const onChange = (pagination, filters, sorter, extra) => {
  //   console.log("params", pagination, filters, sorter, extra);
  // };
  return (
    <Table
      columns={updatedColumns}
      dataSource={orders}
      rowKey="id"
      pagination={{
        position: "bottom",
        pageSize: 5,
      }}
    />
  );
};

export default TabItem;
