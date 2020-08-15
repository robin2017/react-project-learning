import React from "react";
import { Table } from "@alifd/next";
import { useData } from "./hook";
import { CompHoc } from "./utils";
/**
 * 3、数据在远程，将获取数据逻辑封装到hook中，更好的抽象
 */
export default () => {
  const TablePanel = CompHoc(Table,'table', "dataSource", []);
  return (
    <TablePanel hook={useData} hookParam={{ year: 2020 }}>
      <Table.Column title="Id" dataIndex="id" />
      <Table.Column title="Time" dataIndex="time" />
    </TablePanel>
  );
};
