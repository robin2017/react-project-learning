import React from 'react'

import {
  SchemaForm,
  SchemaMarkupField as Field,
  useFormTableQuery,
  FormButtonGroup,
  Submit,
  Reset
} from '@formily/antd' // 或者 @formily/next
import { Input } from '@formily/antd-components' // 或者@formily/next-components
import { fetch } from 'mfetch'
import { Table } from 'antd'
import 'antd/dist/antd.css'

const service = ({ values, pagination, sorter = {}, filters = {} }) => {
  console.log('service输入values, pagination, sorter = {}, filters = {}:',values, pagination, sorter , filters )
  return fetch({
    url: '/api',
    data: {
      results: pagination.pageSize,
      sortField: sorter.field,
      sortOrder: sorter.order,
      page: pagination.current,
      ...values,
      ...filters
    }
  })
    .then(res => res.json())
    .then(({ results, info }) => {
      return {
        dataSource: results,
        ...pagination,
        total: 200
      }
    }).then(res=>{
      console.log('service输出：',res)
      return res
    })
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
]

export default () => {
  /**
   *1、 useFormTableQuery：快速开发一个查询列表项
   *2、 该函数的输入和输出都是严格格式！！
   * */
  const { form, table } = useFormTableQuery(service)
  console.log('---bota---form,table数据为:', form, table)
  return (
    <>
      <SchemaForm
        {...form}
        components={{ Input }}
        style={{ marginBottom: 20 }}
        inline
      >
        <Field type="string" name="name" title="Name" x-component="Input" />
        <FormButtonGroup>
          <Submit>查询</Submit>
          <Reset>重置</Reset>
        </FormButtonGroup>
      </SchemaForm>
      <Table
        {...table}
        columns={columns}
        rowKey={record => record.login.uuid}
      />
    </>
  )
}