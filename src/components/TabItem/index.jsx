import { Table, Button } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateStatusCancel } from "../../utils/api/orderApi";

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
    if (orders.length === 0) return;

    const earliestOrderTime = Math.min(
      ...orders.map((order) => new Date(order.createdAt).getTime())
    );

    const timer = setInterval(async () => {
      const currentTime = new Date().getTime();
      const cancellationTime = earliestOrderTime + 15 * 60 * 1000; // 15 minutes in milliseconds
      if (currentTime >= cancellationTime) {
        const updatedData = await Promise.all(
          orders.map(async (order) => {
            if (order.status === "Chưa Thanh Toán") {
              const createdAtTime = new Date(order.createdAt).getTime();
              const fifteenMinutesLater = createdAtTime + 15 * 60 * 1000; // 15 minutes in milliseconds
              if (currentTime >= fifteenMinutesLater) {
                // Apply the cancellation logic for the order
                // await updateStatusCancel(order.id, "Đã Hủy");
                console.log(order)
                return {
                  ...order,
                  status: "Đã Hủy",
                };
              }
            }
            return order;
          })
        );
console.log(updatedData)
        // setData(updatedData); // Update the data state with modified order statuses
      }
    }, 5000); // 1 minute (you can adjust the interval as per your requirement)

    return () => {
      clearInterval(timer);
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
