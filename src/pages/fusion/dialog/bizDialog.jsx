
import React from 'react'
import { Dialog, Button } from '@alifd/next'
import './bizDialog.scss'
export default ({ visible, setVisible, list }) => {
    const Content = () => {
        //业务功能模块
        return (
            <div className='biz-content-container'>
                {list.map(item => <div>{item.name}</div>)}
                <Button onClick={() => { setVisible(false) }}>确认</Button>
            </div>
        )
    }
    // 通用模版，去掉默认头尾
    return (
        <Dialog className='common-dialog'
            visible={visible}
            footer={<div />}
            onClose={() => { setVisible(false) }}>
            <Content />
        </Dialog>
    )
}