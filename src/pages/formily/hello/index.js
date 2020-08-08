import React from 'react'
import {
    SchemaForm,
    SchemaMarkupField as Field,
    FormButtonGroup,
    Submit,
    Reset
} from '@formily/next'
import { Input } from '@alifd/next'
export default () => {
    return (
        <SchemaForm
            components={{ Input }}
            onSubmit={values => {
                console.log(values)
            }}>
            <Field type="string" name="name" title="Name" x-component="Input" />
            <FormButtonGroup>
                <Submit>查询</Submit>
                <Reset>重置</Reset>
            </FormButtonGroup>
        </SchemaForm>
    )
}