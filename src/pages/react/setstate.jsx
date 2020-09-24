import React, { Component } from 'react'
export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this)
    }
    incrementCount() {

        //失败：传入对象，异步
        // this.setState({count:this.state.count+1})
        // this.setState({count:this.state.count+1})

        //成功：传入状态计算函数，保证同步性
        this.setState((prevState, props) => {
            return { count: prevState.count + 1 }
        })
        this.setState((prevState, props) => {
            return { count: prevState.count + 1 }
        })
    }
    render() {
        return (
            <div>
                <h4>react state异步问题</h4>
                <button onClick={this.incrementCount}>加2</button>
                <div>{this.state.count}</div>
            </div>
        )
    }
}
