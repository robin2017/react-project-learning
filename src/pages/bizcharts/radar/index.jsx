import React from 'react'
import {
    Chart,
    Point,
    Line,
    Area,
    Tooltip,
    Coordinate
} from 'bizcharts';
import DataSet from '@antv/data-set';
const data = [
    { item: 'Design', a: 70, b: 30 },
    { item: 'Development', a: 60, b: 70 },
    { item: 'Marketing', a: 50, b: 60 },
    { item: 'Users', a: 40, b: 50 },
    { item: 'Test', a: 60, b: 70 }
];
export default () => {
    const { DataView } = DataSet;
    const dv = new DataView().source(data);
    dv.transform({
        type: 'fold',
        fields: ['a'], // 展开字段集
        key: 'user', // key字段
        value: 'score', // value字段
    });

    return <Chart
        height={400}
        data={dv.rows}
        autoFit
        scale={{
            score: {
                min: 0,
                max: 80,
            }
        }}
        interactions={['legend-highlight']}>
        {/* 坐标系组件，分为极坐标系(polar,theta,helix)和笛卡尔坐标系(rect/cartesian) */}
        <Coordinate type="polar" radius={0.9} />
        <Tooltip shared />
        <Point
            position="item*score"
            color="user"
            shape="circle"
        />
        <Line
            position="item*score"
            color="user"
            size="2"
        />
        <Area
            position="item*score"
            color="user"
        />
    </Chart>
}