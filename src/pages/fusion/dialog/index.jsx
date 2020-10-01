import React, { useState } from 'react'
import { Button } from '@alifd/next'
import BizDialog from './bizDialog'
const list = [{ name: 'bota' }, { name: 'robin' }]
export default () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <h4>通用dialog模版示例</h4>
            <Button type='primary' onClick={() => { setVisible(true) }}>打开</Button>
            <BizDialog
                visible={visible}
                setVisible={setVisible}
                list={list} />
        </div>
    )
}