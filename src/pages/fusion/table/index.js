import React from 'react'
import { Button, Table, Icon, MenuButton } from '@alifd/next'
const { Item } = MenuButton;

const dataSource = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
        result.push({
            title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
            id: 100306660940 + i,
            time: 2000 + i
        });
    }
    return result;
};

/** react组件的函数式写法 */
export default () => {
    return (
        <Table
            dataSource={dataSource()}
            rowSelection={{
                onChange: (...args) => {
                    console.log('onChange:', args);
                },
                columnProps: () => {
                    return {
                        align: 'center'
                    }
                }
            }}>
            <Table.Column title="Id" dataIndex="id" width={200} />
            <Table.Column title="Title" dataIndex="title.name" width={200} />
            <Table.Column title="Time" dataIndex="time" width={200} />
            <Table.Column cell={(value, index, record) => <button>Remove({record.id})</button>} width={200} />
        </Table>
    )
}



