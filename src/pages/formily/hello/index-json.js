import React from 'react'
import {
    SchemaForm,
    FormButtonGroup,
    Submit,
    Reset
} from '@formily/next'
import { Input, Select } from '@alifd/next'
export default () => {
    return (
        <SchemaForm inline
            components={{ Input, Select }}
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
                        enum: ['男', '女'],
                        title: "性别",
                        'x-component': "Select"
                    }
                }
            }}>
            <FormButtonGroup  >
                <Submit /> <Reset />
            </FormButtonGroup>
        </SchemaForm>
    )
}

