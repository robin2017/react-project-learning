//1、此处不需要引入React，因为没有渲染JSX
import { useState } from 'react'
export const useBind = (initialValue, _onChange) => {
    const [value, setValue] = useState(initialValue)
    const onChange = e => {
        setValue(e.target.value)
        _onChange && _onChange(e.target.value)
    }
    return { value, onChange }
}

