import React, { useState } from 'react'
export default ({ initialValue, onChange, children }) => {
    const [value, setValue] = useState(initialValue)
    const _onChange = (e) => {
        setValue(e.target.value)
        onChange && onChange(e.target.value)
    }
    const newProps = {
        value,
        onChange: _onChange
    }
    return (
        <>
            {/* 1、调用时，组件children必须为函数，不常见*/}
            {children(newProps)}
        </>
    );
}


