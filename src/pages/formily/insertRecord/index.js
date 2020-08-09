import React from 'react'
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit,
  Reset
} from '@formily/antd' // 或者 @formily/next
import Printer from '@formily/printer'
import {
  Input,
  Radio,
  Checkbox,
  Select,
  DatePicker,
  NumberPicker,
  TimePicker,
  Upload,
  Switch,
  Range,
  Transfer,
  Rating
} from '@formily/antd-components' // 或者@formily/next-components
import 'antd/dist/antd.css'

const components = {
  Input,
  Radio: Radio.Group,
  Checkbox: Checkbox.Group,
  TextArea: Input.TextArea,
  NumberPicker,
  Select,
  Switch,
  DatePicker,
  DateRangePicker: DatePicker.RangePicker,
  YearPicker: DatePicker.YearPicker,
  MonthPicker: DatePicker.MonthPicker,
  WeekPicker: DatePicker.WeekPicker,
  TimePicker,
  TimeRangePicker: TimePicker.RangePicker,
  Upload,
  Range,
  Rating,
  Transfer
}

export default () => (
  <Printer>
    <SchemaForm labelCol={5} wrapperCol={14} components={components}>
      <Field type="string" title="String" name="string" x-component="Input" />
      <Field
        type="string"
        enum={['1', '2', '3', '4']}
        title="Radio"
        name="radio"
        x-component="Radio"
      />
      <Field
        type="string"
        enum={['1', '2', '3', '4']}
        title="Select"
        name="select"
        x-component="Select"
      />
      <Field
        type="string"
        enum={['1', '2', '3', '4']}
        title="Checkbox"
        name="checkbox"
        x-component="Checkbox"
      />
      <FormButtonGroup offset={5}>
        <Submit>查询</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </SchemaForm>
  </Printer>
)