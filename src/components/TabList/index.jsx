import React from "react";
import { Tabs } from "antd";
import TabItem from "../TabItem";

const TabList = ({ items, columns }) => {
  console.log(items);
  return (
    <Tabs>
      {items.map((item) => (
        <Tabs.TabPane tab={item.label} key={item.key}>
          <TabItem orders={item.children} columns={columns} />
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};

export default TabList;
