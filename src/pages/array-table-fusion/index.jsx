import React, { useEffect } from 'react';
import { Field, Form, Input, Select, Button } from '@alifd/next'
import ArrayTable from './array-table'
const FormItem = Form.Item
const formItemLayout = {
  labelCol: {
    fixedSpan: 8,
  },
  wrapperCol: {
    span: 14,
  },
};
function ArrayTableFusion() {
  const field = Field.useField()
  const onSubmit = () => {
    const values = field.getValues()
    console.log('提交值：', values)
  }
  useEffect(()=>{
    field.setValues({name:'robin',gender:'男',schools:[{name:'seu',type:'985'}]})
  },[])
  return (
    <div>
      <Form field={field} {...formItemLayout} >
        <FormItem label='姓名'>
          <Input name="name" />
        </FormItem>
        <FormItem label='性别'>
          <Select name="gender" dataSource={['男', '女']} />
        </FormItem>
        <FormItem label='教育程度'>
          <ArrayTable name="schools" />
        </FormItem>
        <FormItem >
          <Button onClick={onSubmit} type='primary'>提交</Button>
        </FormItem>
      </Form>
    </div>
  );
}

export default ArrayTableFusion;
