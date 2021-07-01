import React from 'react';
import { Button } from '@alifd/next'
// 这就是一个树克隆的问题！！！
// 1、给满足条件的第一层孩子添加属性,不满足条件孩子去掉
const addAttrToValidSon = (children, addAttr = {}, validFunc) => {
  const validChildren = [];
  React.Children.forEach(children, (child) => {
    if (!child) return;
    if (validFunc(child)) {
      // 不能给child加属性，只能clone一次
      validChildren.push(React.cloneElement(child, addAttr));
    }
  });
  return validChildren;
}

// 2、给满足条件的孙子添加属性,不满足条件孩子不添加
const addAttrToValidChildren = (children, addAttr = {}, validFunc) => {
  const validChildren = [];
  const loop = (children,validChildren,addAttr,validFunc) =>{
    React.Children.forEach(children, (child) => {
      debugger
      if(!child) return;
      if(child?.props?.children){
        loop(child.props.children,validChildren,addAttr,validFunc)
      }else{
        validChildren.push(React.cloneElement(child, validFunc(child) ? addAttr : {}));
      }
    })
  }
 loop(children,validChildren,addAttr,validFunc)
  return validChildren;
}

// 给第一层Button添加type属性
const Wrapper1 = ({ children }) => {
  const newChildren = addAttrToValidSon(children, { type: 'primary' }, (child) => {
    const { type } = child
    if (type === Button) return true
    return false
  })
  return <div className='wrapper-container'>{newChildren}</div>
}

// 给所有Button添加type属性
const Wrapper2 = ({ children }) => {
  const newChildren = addAttrToValidChildren(children, { type: 'primary' }, (child) => {
    const { type } = child
    if (type === Button) return true
    return false
  })
  return <div className='wrapper-container'>{newChildren}</div>
}

function GetChildren() {
  return (
    <div className='container'>
      <Wrapper1>
        <div className='ddd'>
          <div className='fff'>
            <Button>hello</Button>
          </div>
        </div>
        <Button>world</Button>

      </Wrapper1>
    </div>
  );
}

export default GetChildren;
