import React, { useEffect, useState } from 'react'
import { Progress } from '@alifd/next'
import './comp.scss'
export default ({ value = 80, ratio = 20, color = '#9f76eb', children, size = "small" }) => {
    const [currentValue, setCurrentValue] = useState(0)
    const [showText, setShowText] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            if (currentValue < value) {
                setCurrentValue(currentValue + 1)
            } else {
                setShowText(true)
            }
        }, ratio);
    }, [currentValue])
    return (
        <div className='progress-container'>
            <Progress percent={currentValue}
                size={size}
                shape="circle"
                color={color}
                textRender={() =>
                    <div style={{ display: showText ? 'block' : 'none' }}>{children}</div>
                } />
        </div>
    )
}