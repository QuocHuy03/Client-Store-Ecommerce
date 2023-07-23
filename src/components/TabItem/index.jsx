import { Table } from "antd";
import React from "react";

const TabItem = ({ orders, columns }) => {
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
      : column
  );
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <Table
      columns={updatedColumns}
      dataSource={orders}
      onChange={onChange}
      pagination={{
        position: "bottom",
        pageSize: 5,
      }}
    />
  );
};

export default TabItem;
