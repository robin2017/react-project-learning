import React, { Component, useState } from 'react'
import Comp1 from './comp1'
import Comp2 from './comp2'
export default () => {
    const [count, setCount] = useState(0)
    const btnClick = () => {
        setCount(count + 1)
    }
    console.log('父组件渲染')
    return (
        <div>
            <div>{count}</div>
            <button onClick={btnClick}>增加</button>
            <Comp1 id={1}/>
            <Comp2 id={2}/>
        </div>
    )
}