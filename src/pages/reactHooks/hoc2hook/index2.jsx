import React, { useState, useEffect } from "react";
import { Table } from "@alifd/next";
import service from './service'
/**
 * 2、数据在远程，则需要在业务组件中添加获取数据逻辑，麻烦
 */
export default () => {
  const [dataSource, setDataSource] = useState([]);
  const queryData = async (param) => {
    const { data } = await service.queryAjax(param);
    console.log("1、数据获取逻辑(只执行一次):", data);
    setDataSource(data);
  };
  //1、useEffect第一个函数参数不能加async
  useEffect(() => {
    queryData({year:2019});
  }, []);
  console.log("2、页面渲染逻辑(执行两次)：", dataSource);
  return (
    <Table dataSource={dataSource}>
      <Table.Column title="Id" dataIndex="id" />
      <Table.Column title="Time" dataIndex="time" />
    </Table>
  );
};
