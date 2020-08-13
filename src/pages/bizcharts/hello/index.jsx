import React from 'react'
import { Chart, Interval } from 'bizcharts';
const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 }
];
export default () => {
    return (
        <div>
            <Chart height={320} autoFit data={data} >
                {/* genre为横坐标，sold为纵坐标 */}
                <Interval position="genre*sold" />
            </Chart>
        </div>
    )

}