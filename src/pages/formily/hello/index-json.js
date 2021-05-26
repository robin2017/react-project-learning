import React from 'react'
import {
    SchemaForm,
    FormButtonGroup,
    Submit,
    Reset
} from '@formily/next'
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
                            style: { width: '600px' },
                          },
                        items:{
                            type:'object',
                            properties:{
                                column3: {
                                    type: 'string',
                                    title:'name',
                                    'x-component': 'Input',
                                    'x-component-props': { width: 200,   },
                                    // properties: {
                                    //   a1: {
                                    //     type: 'string',
               
                                    //     'x-component': 'Input',
                                    //   },
                                    // },
                                  },
                            
                                // column1:{
                                //     type:'string',
                                //     title:"name",
                                //     'x-component-props': { width: 80, title: 'Sort', align: 'center' },
                                //     'x-component': 'ArrayTable.Column',
                                //     properties: {
                                //         a1: {
                                //           type: 'string',
                                       
                                //           'x-component': 'Input',
                                //         },
                                //       },

                                // },
                                // column2:{
                                //     type:'string',
                                //     title:"age",
                                //     // 'x-component-props': { width: 200, title: 'A4' },
                                //     "x-component":"Input"
                                // }
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

