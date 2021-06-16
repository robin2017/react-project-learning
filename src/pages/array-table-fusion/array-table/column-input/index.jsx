import React, { useEffect, useState } from 'react';
import {Input} from '@alifd/next'
// bota1、tablecolumn的孩子组件必须具有value,onChange属性
function ColumnInput({value,onChange,...other}) {
  const [_value,_setValue] = useState(value)
  // bota2:由外到内变化
  useEffect(()=>{_setValue(value)},[value])
  const _onChange = (v)=>{
    _setValue(v)
    // bota3:由内到外变化
    onChange(v)
  }
  return (
    <div>
      <Input value={_value} onChange={_onChange} {...other}/>
    </div>
  );
}
// 这就是在Input上套一层，没有任何增强啊！！！
export default ColumnInput;
