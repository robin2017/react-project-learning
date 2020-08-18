import React, { Component } from 'react';

import Guide from 'react-guide'
export default class extends Component {
    constructor() {
        super()
        this.state = {
            visible: false
        }
    }
    handleStart() {
        this.setState({
            visible: true
        })
    }
    handleCancel() {
        this.setState({
            visible: false
        })
    }
    render() {
        return (
            <div>
                <Guide
                    visible={this.state.visible}
                    onCancel={this.handleCancel.bind(this)} >
                    <div>
                        <h1 data-step="1" data-tip='Hello World'>Step1</h1>
                    </div>
                    <div data-step="3" data-tip='Welcome to use react-guide'>Step3</div>
                    <h4 data-step="2" data-tip='react-guide is very easy' >Step2</h4>
                    <div><span data-step="4" data-tip='Let start'>Step4</span></div>
                </Guide>
                <button onClick={this.handleStart.bind(this)}>start</button>
            </div>
        );
    }
}

