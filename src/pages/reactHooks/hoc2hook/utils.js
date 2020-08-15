import React from 'react'
import { Loading } from '@alifd/next'
//这个是通用的封装，将dataAttr和hook,hookParam放在不同层级
export const CompHoc = (Comp, name, dataAttr, dataInit) => {
    return ({ hook, hookParam, ...props }) => {
        const data = hook(hookParam);
        // 这里必须添加...props，否则渲染失败
        const newProps = {
            [dataAttr]: data || dataInit || [],
            ...props,
        };
        return <Loading id={name + '-loading'}
            visible={data === null}
            style={{ width: '100%', height: '100%' }}>
            {/* 没拿到数据也要渲染，但数据要填充) */}
            <Comp {...newProps} />
        </Loading>;
    };
};