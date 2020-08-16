import React, { useRef, useEffect } from 'react'
import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';
const { DataView } = DataSet;

const data = [
    { item: 'Design', a: 70, b: 30 },
    { item: 'Development', a: 60, b: 70 },
    { item: 'Marketing', a: 50, b: 60 },
    { item: 'Users', a: 40, b: 50 },
    { item: 'Test', a: 60, b: 70 },
    { item: 'Language', a: 70, b: 50 },
    { item: 'Technology', a: 50, b: 40 },
    { item: 'Support', a: 30, b: 40 },
    { item: 'Sales', a: 60, b: 40 },
    { item: 'UX', a: 50, b: 60 },
];
const dv = new DataView().source(data);
dv.transform({
    type: 'fold',
    fields: ['a'], // 展开字段集
    key: 'user', // key字段
    value: 'score', // value字段
});
export default () => {
    const chartRef = useRef(null)
    useEffect(() => {
        const chart = new Chart({
            container: chartRef.current,
            autoFit: true,
            height: 500,//1、只控制高度，宽度100%
        });
        chart.data(dv.rows);
        chart.scale('score', {
            min: 0,
            max: 80,
        });
        chart.coordinate('polar', {
            radius: 0.4,//2、控制雷达图大小
        });
        chart.tooltip({
            shared: true,
            showCrosshairs: true,
            crosshairs: {
                line: {
                    style: {
                        lineDash: [4, 4],
                        stroke: '#f00' //3、这里没啥用！！！
                    }
                }
            }
        });
        chart.axis('item', {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    style: {
                        lineDash: null,
                    },
                },
            },
        });
        chart.axis('score', {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    type: 'line',
                    style: {
                        lineDash: null,
                    },
                },
            },
        });

        chart.line()//5、控制包络线样式，不是蜘蛛线
            .position('item*score')
            .color('user')
            .size(2)    
            .style({
                stroke: '#0f0',
                lineWidth: 1,
                fillOpacity: 1,
            });
        chart.point()//4、控制点的样式
            .position('item*score')
            .color('user')
            .shape('circle')
            .size(4)
            .style({
                stroke: '#f00',
                lineWidth: 1,
                fillOpacity: 1,
            });
        chart.area()
            .position('item*score')
            .color('user')     
        chart.render();
    }, [])
    return (
        <div ref={chartRef}></div>
    )
}