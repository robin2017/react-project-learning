import React, { useEffect, useState } from 'react'
import './index.scss'
import Comp from './comp'
export default () => {
    return (
        <div>
            <Comp value={80} >
                <div className="comp-content">
                    <div className='comp-title'>hello</div>
                    <div className='comp-text'>world</div>
                </div>
            </Comp>
        </div>
    )
}