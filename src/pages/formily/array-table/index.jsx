import React from "react";
import { Button } from "@alifd/next";
import {
  createFormActions,
  SchemaForm,
  SchemaMarkupField as Field
} from "@formily/next";
import { Input, ArrayTable } from "@formily/next-components";
import "@alifd/next/dist/next.css";
 
const fieldStateName = 'userList'
const actions = createFormActions();
const App = () => {
  return (
    <SchemaForm actions={actions} components={{ ArrayTable, Input }}>
 
      <Button
        onClick={() => {
          actions.setFieldState(fieldStateName, (state) => {
            state.value = [];
          });
        }}
      >
        清理
      </Button>
      <Button
        onClick={() => {
          actions.getFieldState(fieldStateName, (state) => {
            console.log('state.value:',state.value)
          });
        }}
      >
        提交
      </Button>
      <Field
        title="用户列表"
        name={fieldStateName}
        type="array"
        x-component="ArrayTable"
      >
        <Field type="object">
          <Field name="age" x-component="Input" title="条数" />
          <Field name="username" x-component="Input" title="用户名" />
          <Field name="username1" x-component="Input" title="用户名1" />
          <Field name="username2" x-component="Input" title="用户名2" />
          <Field name="username3" x-component="Input" title="用户名3" />
        </Field>
      </Field>
    </SchemaForm>
  );
};

 
export default App