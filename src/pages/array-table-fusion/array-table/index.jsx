import React, { useEffect, useState } from 'react';
import {Table,Input,Select,Button} from '@alifd/next'
import ColumnInput from './column-input' // 没有任何增增强的Input
const TableColumn = Table.Column
// bota1、formitem的孩子组件必须具有value/onChange属性,且额外需要name属性(怎么处理？)
function ArrayTable({value=[],onChange}) {
  const [dataSource,setDataSource] = useState(value)
  useEffect(()=>{
    // bota2:由外到内变化
    setDataSource(value)
  },[value])
  const columnChange = (name,index)=>(v)=>{
    setDataSource((source)=>{
      source[index][name] = v
      return [...source]
    })
  }
  const sourceChange = (source) =>{
    setDataSource(source)
    // bota3:由内到外变化
    onChange(source)
  }
  return (
    <div>
      <Table dataSource={dataSource}>
        <TableColumn title="学校名称" dataIndex="name" cell={(value,index)=> <Input value={value} onChange={columnChange('name',index)}/>} />
        <TableColumn title="学校类型" dataIndex="type" cell={(value,index)=> <Select value={value} onChange={columnChange('type',index)} dataSource={['985','211']}/>} />
        <TableColumn title="操作"   cell={(_,index)=> <Button onClick={()=>sourceChange([...dataSource.slice(0,index),...dataSource.slice(index+1)]) }>删除</Button>} />
      </Table>
      <Button type='primary' onClick={()=> sourceChange([...dataSource,{}]) }>增加</Button>
    </div>
  );
}

export default ArrayTable;
