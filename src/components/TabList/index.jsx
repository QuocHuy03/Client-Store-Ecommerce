import React from "react";
import { Tabs } from "antd";
import TabItem from "../TabItem";

const TabList = ({ items, columns, changeStatus }) => {
  return (
    <Tabs onChange={changeStatus}>
      {items.map((item) => (
        <Tabs.TabPane tab={item.label} key={item.key}>
          <TabItem orders={item.children} columns={columns} />
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};

export default TabList;
