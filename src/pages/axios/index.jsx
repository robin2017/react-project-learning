import React, { useEffect } from 'react'
import axios from 'axios'
export default () => {

    useEffect(() => {
        console.log('开始测试axios功能')

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            console.log('aixos对象响应拦截器：',response)
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
        const instance = axios.create({})
        // 添加响应拦截器
        // instance.interceptors.response.use(function (response) {
        //     console.log('aixos实例响应拦截器：',response)
        //     // 对响应数据做点什么
        //     return response;
        // }, function (error) {
        //     // 对响应错误做点什么
        //     return Promise.reject(error);
        // });

        // axios.get('https://mocks.alibaba-inc.com/mock/OGSiFQmpd/cbs/message/pageGetMessageList').then(res => {
        //     console.log('axios对象返回数据：', res)
        // })
        instance.get('/api/persons').then(res => {
            console.log('axios实例返回数据：', res)
        })

    }, [])
    return (
        <div>axios test</div>
    )
}