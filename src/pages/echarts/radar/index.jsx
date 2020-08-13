import React from 'react'
import ReactEcharts from 'echarts-for-react'
export default () => {
    const option = {
        radar: [
            {
                indicator: [
                    { text: '语文', max: 150 },
                    { text: '数学', max: 150 },
                    { text: '英语', max: 150 },
                    { text: '物理', max: 120 },
                    { text: '化学', max: 108 },
                    { text: '生物', max: 72 }
                ],
                center: ['50%', '50%'],
                radius: 200,
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['#ffffff']  // 图表背景网格的颜色
                    }
                },
            }
        ],
        series: [
            {
                name: '成绩单',
                type: 'radar',
                data: [
                    {
                        value: [90, 113, 140, 30, 70, 60],
                        name: '李四',
                        label: {
                            show: true,
                            formatter: function (params) {
                                return params.value;
                            }
                        },
                        itemStyle: {
                            color: '#999'
                        },
                        areaStyle: {
                            opacity: 0.6,
                            color: '#6A18FF'
                        },
                        lineStyle: {
                            color: "white" // 图表中各个图区域的边框线颜色
                        },
                    }
                ]
            }
        ]
    }
    return (
        <div>
            <ReactEcharts
                style={{ height: 500, width: 600 }}
                option={option}
                onEvents={() => { }}
                notMerge={true}
                lazyUpdate={true} />
        </div>
    )
}