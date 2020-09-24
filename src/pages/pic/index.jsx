import React from 'react'
import pic from './pic.png'
import './pic.scss'
export default () => {
    return (
            <div className="dimback">
                <img src={pic} className="dim" />
            </div>
    )
}