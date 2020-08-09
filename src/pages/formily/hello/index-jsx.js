import React from 'react'
import {
    SchemaForm,
    SchemaMarkupField as Field,
    FormButtonGroup,
    Submit,
    Reset
} from '@formily/next'
import { Input, Select } from '@alifd/next'
export default () => {
    return (
        <SchemaForm
            components={{ Input, Select }}
            onSubmit={console.log}>
            <Field type="string"
                name="name"
                title="姓名"
                x-component="Input" />
            <Field type="string"
                name="gender"
                title="性别"
                enum={['男', '女']}
                x-component="Select" />
            <FormButtonGroup>
                <Submit>查询</Submit>
                <Reset>重置</Reset>
            </FormButtonGroup>
        </SchemaForm>
    )
}


