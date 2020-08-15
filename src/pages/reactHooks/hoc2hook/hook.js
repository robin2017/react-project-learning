import service from './service'
import { useState, useEffect } from 'react'
export const useData = (params) => {
    //hook中一般使用useEffect，保证多次同样的输入，只需要一次ajax请求
    //将没数据[]和初始值null区分开
    const [data, setData] = useState(null);
    useEffect(() => {
        service.queryAjax(params).then((res) => {
            setData(res.data);
        });
    }, [params]);
    console.log("useData返回值(执行两次)", data);
    return data;
};