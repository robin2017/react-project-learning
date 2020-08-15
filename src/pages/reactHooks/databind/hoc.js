import React, { useState } from 'react'
export default (WrapperComponent) => {
    return ({ initialValue, onChange }) => {
        const [value, setValue] = useState(initialValue)
        const _onChange = (e) => {
            setValue(e.target.value)
            onChange && onChange(e.target.value)
        }
        const newProps = {
            value,
            onChange: _onChange
        }
        return <WrapperComponent {...newProps} />
    }
}
