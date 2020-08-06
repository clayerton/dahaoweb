import React from 'react';
import styles from '../index.less';
import Header from './header';
import { Chart, Interval, Tooltip } from 'bizcharts';

const Worker: React.FC<{}> = (props) => {
    const data = [
        { year: '1951 年', sales: 38 },
        { year: '1952 年', sales: 52 },
        { year: '1956 年', sales: 61 },
        { year: '1957 年', sales: 45 },
        { year: '1958 年', sales: 48 },
        { year: '1959 年', sales: 38 },
        { year: '1960 年', sales: 38 },
        { year: '1962 年', sales: 38 },
    ];
    return (
        <div className={styles.worker}>
            <Header name={'个人产量'} router={'/worker'} />
            <Chart height={264} autoFit data={data} interactions={['active-region']} padding={[30, 30, 40, 50]} >
                <Interval position="year*sales" size={10} color={'#0072FF'} />
                <Tooltip shared />
            </Chart>
        </div>
    )
}
export default Worker;