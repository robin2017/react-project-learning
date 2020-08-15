import React from 'react'
//这个是通用的封装，将dataAttr和hook,hookParam放在不同层级
export const CompHoc = (Comp, dataAttr) => {
    return ({ hook, hookParam, ...props }) => {
        const data = hook(hookParam);
        // 这里必须添加...props，否则渲染失败
        const newProps = {
            [dataAttr]: data,
            ...props,
        };
        return <Comp {...newProps} />;
    };
};