import React, { PureComponent } from 'react'
//浅比较props和state来决定是否执行render函数
export default class extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('comp2渲染')
        const { id } = this.props
        return (
            <div>hello,comp{id}</div>
        )
    }
}