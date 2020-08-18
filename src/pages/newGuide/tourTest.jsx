import React, { Component, useState } from 'react';
import Tour from 'reactour'
import Demo from './tourDemo'
const steps = [
    { selector: '.step1', content: 'aaa' },
    { selector: '.step2', content: 'bbb' },
    { selector: '.step3', content: 'ccc' }
]
const accentColor = "#5cb7b7";
export default () => {
    const [isTourOpen, setIsTourOpen] = useState(false)
    const [isShowingMore, setIsShowingMore] = useState(false)

    const toggleShowMore = () => {
        setIsShowingMore(!isShowingMore)
    }
    const closeTour = () => {
        setIsTourOpen(false)
    }

    const openTour = () => {
        setIsTourOpen(true)
    }
    return (
        <div>
            <Demo />
            <Tour
                onRequestClose={closeTour}
                steps={steps}
                isOpen={isTourOpen}
                className='helper'
                maskClassName="mask"
                rounded={5} 
                accentColor={accentColor} 
            />
            <button onClick={() => {
                openTour()
            }}> 触发</button>
        </div>
    )
}

