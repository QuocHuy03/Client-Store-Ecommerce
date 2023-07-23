import { Table, Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const TabItem = ({ orders, columns }) => {
  const navigate = useNavigate();

  const renderAction = (record) => {
    console.log(record);
    return <Button onClick={() => handleButtonClick(record)}>Chi Tiết</Button>;
  };

  const handleButtonClick = (record) => {
    console.log(record);
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
