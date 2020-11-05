import React from 'react'
import { Table } from '@alifd/next';

const onRowClick = function (record, index, e) {
    console.log(record, index, e);
};
const dataSource = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
        result.push({
            title: `title${3 + i}`,
            id:   i,
            date: `2019-10-2${3 + i}`,
            time: `16:39:${23 + i}`
        });
    }
    console.log('dataSource:',result)
    return result;
}
 
 const cellProps = (rowIndex, colIndex) => {
        if (rowIndex === 2 && colIndex === 1) {
            return {
                // take 3 rows's space
                rowSpan: 3
            };
        }

        if (rowIndex === 0 && colIndex === 2) {
            return {
                // take 2 cols' space
                colSpan: 2
            };
        }
    };

export default () => {
    return (
        <Table dataSource={dataSource()} onRowClick={onRowClick} cellProps={cellProps}>
            <Table.Column title="Id" dataIndex="id" />
            <Table.Column title="Title" dataIndex="title" />
            <Table.Column title="date" colSpan={1} dataIndex="date" />
            <Table.Column title="Time" colSpan={1} dataIndex="time" />
        </Table>
    )
}
