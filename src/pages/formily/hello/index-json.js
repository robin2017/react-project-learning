import React from 'react'
import {
    SchemaForm,
    SchemaMarkupField as Field,
    FormButtonGroup,

    Submit,
    Reset
} from '@formily/next'
import { Input,Select } from '@alifd/next'
export default () => {
    return (
        <SchemaForm
            components={{
                Input,
                Select
            }}
            onSubmit={console.log}
            schema={{
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        title: '姓名',
                        'x-component': 'Input'
                    },
                    gender: {
                        type: "string",
                        enum: ['男','女'],
                        title: "性别",
                        'x-component': "Select"
                    },
                }
            }}>
            <FormButtonGroup  >
                <Submit>查询</Submit>
                <Reset>重置</Reset>
            </FormButtonGroup>
        </SchemaForm>
    )

}