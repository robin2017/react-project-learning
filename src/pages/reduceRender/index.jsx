import React, { Component, useState, useMemo } from 'react'
import Comp1 from './comp1'
import Comp2 from './comp2'
import Comp3 from './comp3'
export default () => {
    const [count, setCount] = useState(0)
    const btnClick = () => {
        setCount(count + 1)
    }
    console.log('父组件渲染')
    let id3 = 3
    return (
        <div>
            <div>{count}</div>
            <button onClick={btnClick}>增加</button>
            <Comp1 id={1} />
            <Comp2 id={2} />
            {
                // 在组件调用的时候，包裹一层useMemo，但是不优雅
                useMemo(() => <Comp3 id={id3} />, [id3])
            }
        </div>
    )
}
