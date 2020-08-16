import React, { useRef, useEffect } from 'react'
import { Chart } from '@antv/g2';
const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
];
export default () => {
    const chartRef = useRef(null)
    /**
     * useEffect是在挂载或更新后执行，所以此时可以拿到dom节点
     * 此处等价于:ComponentDidMount
     */
    useEffect(() => {
        // Step 1: 创建 Chart 对象
        const chart = new Chart({
            container: chartRef.current, // 指定图表容器 ID
            width: 600, // 指定图表宽度
            height: 300, // 指定图表高度
        });
        // Step 2: 载入数据源
        chart.data(data);
        // Step 3: 创建图形语法，绘制柱状图
        chart.interval().position('genre*sold');
        console.log('chartRef:', chartRef.current)
        // Step 4: 渲染图表
        chart.render();
    }, [])
    return (
        <div ref={chartRef}></div>
    )
}