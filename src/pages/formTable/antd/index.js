import React, { useState } from 'react'
import { Form, Input, Button, Select, Table } from 'antd'
const mockDataSource = [
    { name: 'robin', gender: '男', id: 1 },
    { name: 'bota', gender: '男', id: 2 },
    { name: 'lily', gender: '女', id: 3 }
]
export default () => {
    const [dataSource, setDataSource] = useState([])
    const onSubmit = (value) => {
        console.log('提交：', value)
        setDataSource(mockDataSource)
    }
    return (
        <div>
            <Form layout="inline" onFinish={onSubmit}>
                <Form.Item label='姓名' name='name'>
                    <Input />
                </Form.Item>
                <Form.Item label='性别' name='gender'>
                    <Select>
                        <Select.Option value='男'>男</Select.Option>
                        <Select.Option value='女'>女</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    {/* 通过htmltype=submit来识别提交按钮 */}
                    <Button htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
            {/* dataSource存放表格数据 */}
            <Table dataSource={dataSource}>
                <Table.Column title='姓名' dataIndex='name' key='name'></Table.Column>
                <Table.Column title='性别' dataIndex='gender' key='gender'></Table.Column>
            </Table>
        </div>
    )
}


