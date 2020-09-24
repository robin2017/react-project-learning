import React, { ReactNode } from 'react'
import { Button } from '@alifd/next'
import { QueryForm, Field,  CommonTable, Column, useQueryFormTable, Operators } from '@alife/imc-query-form-table'
import '@alifd/next/dist/next.css';
import request from 'umi-request'

const requestFn = (params = {}) => {
  return request('https://mocks.alibaba-inc.com/mock/imd/imcQueryFormTable/list',{ params })
}

const ToolBar = ({ selectedRowKeys, query }) => {
    return (
      <Operators>
        <Button key="refresh" type="primary"  onClick={() => { query()}}>
          刷新
        </Button>
        <Button
          key="delete"
          onClick={() => {
            window.alert(selectedRowKeys.join('-'));
          }}
        >
          批量删除
        </Button>
      </Operators>
    )
}

const CommonTablepage = () => {
    //table
    const { formProps, tableProps, toolbarProps, query } = useQueryFormTable(requestFn, {
      useRowSelection: true
    })

    return (
        <div>
            <QueryForm {...formProps}>   
                <Field
                    name="galt1"
                    title="标题1"
                    type="date"
                />
                <Field name="galt2" title="标题2" type="date" />
                <Field name="galt3" title="标题2" type="date" />
                <Field name="galt4" title="标题3" type="string" />
                <Field name="galt5" title="标题2" type="string" />
            </QueryForm>
            <CommonTable {...tableProps} title="自定义toolbar" >
                <ToolBar {...toolbarProps} />
                <Column title="ID" dataIndex="id" />
                <Column title='日期' dataIndex='bizDate' />
                <Column title='名称' dataIndex='name' />
                <Column title='源名称' dataIndex='sourceName' />
            </CommonTable>
        </div>
    )
}