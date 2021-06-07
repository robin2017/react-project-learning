import React from 'react'
import {
    SchemaForm,
    SchemaMarkupField as Field,
    FormButtonGroup,
    Submit,
    Reset
} from '@formily/next'
import { Input, ArrayTable } from "@formily/next-components";
import {   Select,DatePicker } from '@alifd/next'
const TextArea  = Input.TextArea
const { RangePicker, MonthPicker, YearPicker, WeekPicker } = DatePicker;
// 参考文档 https://fusion.formilyjs.org/components/array-table
export default () => {
    return (
        <SchemaForm
            components={{ Input, Select,ArrayTable,TextArea,RangePicker }}
            onSubmit={console.log}>
            <Field type="string"
                name="name"
                title="姓名111"
                x-component="Input" />
            <Field type="string"
                name="gender"
                title="性别"
                enum={['男', '女']}
                x-component="Select" />
                            <Field type="string"
                name="date"
                title="日期"
   
                x-component="RangePicker" />
                   <Field type="string"
                name="other"
                title="其他"
        
                x-component="TextArea" />
            <Field
                title="用户列表"
                name='userList'
                type="array"
                x-component="ArrayTable"
            >
                <Field type="object">
                    <Field name="age" x-component="Input" title="条数" />
                    <Field name="username" x-component="Input" title="用户名" />
                    <Field name="username1" x-component="Input" title="用户名1" />
                    <Field name="username2" x-component="Input" title="用户名2" />
                    <Field name="username3" x-component="Input" title="用户名3" />
                </Field>
            </Field>

            <FormButtonGroup>
                <Submit>查询</Submit>
                <Reset>重置</Reset>
            </FormButtonGroup>
        </SchemaForm>
    )
}


