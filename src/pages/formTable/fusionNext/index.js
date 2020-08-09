import React, { useState } from 'react'
import { Form, Input, Select, Table } from '@alifd/next'
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
            <Form inline>
                <Form.Item label='姓名'>
                    <Input name='name'></Input>
                </Form.Item>
                <Form.Item label='性别'>
                    <Select name='gender'>
                        <Select.Option value='男'>男</Select.Option>
                        <Select.Option value='女'>女</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    {/* Form.Submit没有onSubmit方法，且没有默认文本 */}
                    <Form.Submit onClick={onSubmit}>提交</Form.Submit>
                </Form.Item>
            </Form>
            {/* dataSource存放表格数据 */}
            <Table dataSource={dataSource}>
                <Table.Column title='姓名' dataIndex='name'></Table.Column>
                <Table.Column title='性别' dataIndex='gender'></Table.Column>
            </Table>
        </div>
    )
}


