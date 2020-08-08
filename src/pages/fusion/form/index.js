import React from 'react'
import moment from 'moment'
import { Form, Input, Checkbox, Select, DatePicker } from '@alifd/next';
export default () => {
    const levels = ['first', 'second']
    const handleSubmit = (values) => {
        console.log('Get form value:', values);
    }
    // 时间必须为今天之前
    const disabledAfter = (date) => date.format('YYYYMMDD') >= moment().format('YYYYMMDD')
    return (
        <Form inline>
            <Form.Item label="密码:" required >
                <Input htmlType="password" name="basePass" placeholder="Please Enter Password" />
            </Form.Item>
            <Form.Item label='级别' style={{backgroundColor:'red'}}>
                <Select name="baseLevel" defaultValue="first">
                    {/* Select.Option必须有key，Form.Item不必有key */}
                    {levels.map(item => <Select.Option value={item} key={item}>{item}</Select.Option>)}
                </Select>
            </Form.Item>
            <Form.Item label="时间:">
                <DatePicker name='baseTime' disabledDate={disabledAfter}></DatePicker>
            </Form.Item>
            <Form.Item label="同意:">
                <Checkbox name="baseAgreement">Agree</Checkbox>
            </Form.Item>
            <Form.Item>
                {/* Form.Submit是Form非常重要子组件，否则拿不到数据 */}
                <Form.Submit onClick={handleSubmit} type='primary'>确认</Form.Submit>
            </Form.Item>
        </Form>
    )
}
