import React from "react";
import { Table } from "@alifd/next";
const dataSource = [
  { id: 1, time: "2016" },
  { id: 2, time: "2017" },
];
/**
 * 1、数据在本地，则直接将数据传入组件，十分简单
 */
export default () => {
  return (
    <Table dataSource={dataSource}>
      <Table.Column title="Id" dataIndex="id" />
      <Table.Column title="Time" dataIndex="time" />
    </Table>
  );
};
