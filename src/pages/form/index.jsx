import React, { useState } from 'react';
import {Input,Button} from '@alifd/next'
function Form() {
  // 充当field角色
  const [values,setValues] = useState({})
  return (
    <div>
     <Input name="age" label="年龄"></Input>
     <Button>提交</Button>
    </div>
  );
}

export default Form;
