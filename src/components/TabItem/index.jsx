import { Table, Button } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TabItem = ({ orders, columns }) => {
  const navigate = useNavigate();

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

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedData = orders.map((order) => {
        if (order.status === "Chưa Thanh Toán") {
          // Set order status to "cancelled" after 1 hour
          return {
            ...order,
            status: "cancelled",
          };
        }
        return order;
      });
      setData(updatedData);
    }, 1000 * 60 * 60); // 1 hour in milliseconds

    return () => {
      clearInterval(timer); // Cleanup the timer when the component unmounts
    };
  }, [orders]);

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
