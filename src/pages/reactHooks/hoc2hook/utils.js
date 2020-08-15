import React from 'react'
import {Loading} from '@alifd/next'
//这个是通用的封装，将dataAttr和hook,hookParam放在不同层级
export const CompHoc = (Comp, dataAttr) => {
    return ({ hook, hookParam, ...props }) => {
        const data = hook(hookParam);
        // 这里必须添加...props，否则渲染失败
        const newProps = {
            [dataAttr]: data,
            ...props,
        };
        return <Loading visible={data==null} style={{width:'100%',height:'100%'}}>
            {/* 没拿到数据就不渲染组件(这个策略不好！！！) */}
            {data!==null&& <Comp {...newProps} />}
        </Loading>;
    };
};