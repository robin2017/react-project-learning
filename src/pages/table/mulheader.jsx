import React from "react";
import { Table } from "@alifd/next";

const dataSource = [
  { sheng: "anhui", shi: "tongling", year: 1991, birth: "11.12" },
];
export default () => {
  return (
    <Table dataSource={dataSource}>
      <Table.ColumnGroup title="地址">
        <Table.Column title="省" dataIndex="sheng" />
        <Table.Column title="市" dataIndex="shi" />
      </Table.ColumnGroup>
      <Table.ColumnGroup title="出生">
        <Table.Column title="年" dataIndex="year" />
        <Table.Column title="生日" dataIndex="birth" />
      </Table.ColumnGroup>
    </Table>
  );
};
