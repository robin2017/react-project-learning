import React, { useState } from 'react'
import { Table, Button } from '@alifd/next';

const genDataSource = (i, j) => {
    const result = [];
    for (let a = i; a < j; a++) {
        result.push({
            title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
            id: 100306660940 + a,
            time: 2000 + a
        });
    }
    return result;
}


export default () => {
    //这两个分别为数据和配置，两个中任何一个变化就会重新渲染表格！！！
    const [dataSource, setDataSource] = useState(genDataSource(0, 5))
    const [rowSelection, setRowSelection] = useState({
        onChange: (ids, records) => {
            let selection = {...rowSelection}
            selection.selectedRowKeys = ids;
            console.log('onChange', ids, records);
            //拿到变化值后更新配置！！！
            setRowSelection(selection)
        },
        //选中的不是数据，而是配置的一部分
        selectedRowKeys: [100306660940],
        getProps: (record) => {
            return {
                disabled: record.id === 123456
            }
        }
    })

    const clear = () => {
        let selection = { ...rowSelection }
        selection.selectedRowKeys = []
        setRowSelection(selection)
    }

    const render = (value, index, record) => {
        return <a >Remove({record.id})</a>;
    };
    return (
        <div>
            <p>
                <Button onClick={clear}>Clear Selection</Button>&nbsp;
            </p>
            <Table dataSource={dataSource}
                rowSelection={rowSelection}>
                <Table.Column title="Id" dataIndex="id" />
                <Table.Column title="Title" dataIndex="title.name" />
                <Table.Column title="Time" dataIndex="time" />
                <Table.Column cell={render} width={200} />
            </Table>
        </div>
    );

}