import React, { Component } from 'react'
export default class extends Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate(nextProps) {
        //通过返回结果来决定是否要执行render函数
        return this.props.id !== nextProps.id
    }
    render() {
        console.log('comp1渲染')
        const { id } = this.props
        return (
            <div>hello,comp{id}</div>
        )
    }
}