import React from 'react';
import styles from '../index.less';
import Header from './header';
import { Chart, Line, Point,Axis } from 'bizcharts';

const Yield: React.FC<{}> = (props) => {
    const data = [
        {
            month: "Apr",
            city: "Tokyo",
            temperature: 14.5
        },
        {
            month: "Apr",
            city: "London",
            temperature: 8.5
        },
        {
            month: "May",
            city: "Tokyo",
            temperature: 18.4
        },
        {
            month: "May",
            city: "London",
            temperature: 11.9
        },
        {
            month: "Jun",
            city: "Tokyo",
            temperature: 21.5
        },
        {
            month: "Jun",
            city: "London",
            temperature: 15.2
        },
        {
            month: "Jul",
            city: "Tokyo",
            temperature: 25.2
        },
        {
            month: "Jul",
            city: "London",
            temperature: 17
        },
        {
            month: "Aug",
            city: "Tokyo",
            temperature: 26.5
        },
        {
            month: "Aug",
            city: "London",
            temperature: 16.6
        },
        {
            month: "Sep",
            city: "Tokyo",
            temperature: 23.3
        },
        {
            month: "Sep",
            city: "London",
            temperature: 14.2
        },
        {
            month: "Oct",
            city: "Tokyo",
            temperature: 18.3
        },
        {
            month: "Oct",
            city: "London",
            temperature: 10.3
        },
    ];
    return (
        <div className={styles.yield}>
            <Header name={'产量统计'} router={'/yield'} />
            <Chart scale={{ temperature: { min: 0 } }} padding={[30, 20, 50, 40]} autoFit height={259}  data={data} >
                <Line shape="smooth" position="month*temperature" color="city" size={2} label="temperature" />
                <Point position="month*temperature" color="city" />
            </Chart>
        </div>
    )
}
export default Yield;