import React from 'react'
import {
    SchemaForm,
    FormButtonGroup,
    Submit,
    Reset
} from '@formily/next'
import './index.css'
import { Input, Select,ArrayTable } from '@formily/next-components'
export default () => {
    return (
        <SchemaForm inline
            components={{ Input, Select,ArrayTable }}
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
                    },
                    userList:{
                        type:"array",
                        title:"列表",
                        "x-component":'ArrayTable',
                        'x-component-props': {
                            pagination: { pageSize: 10 },
                            style: { width: '100%' },
                          },
                        items:{
                            type:'object',
                            properties:{
                                column3: {
                                    type: 'string',
                                    title:'name',
                                    'x-component': 'Input',
                                    'x-component-props': { width: 100,   },
                                  },
                                  column4: {
                                    type: 'string',
                                    title:'age',
                                    'x-component': 'Input',
                                    'x-component-props': { width: 100,   },
                                 
                                  }
                            }
                        }
                    }
                }
            }}>
            <FormButtonGroup  >
                <Submit /> <Reset />
            </FormButtonGroup>
        </SchemaForm>
    )
}

