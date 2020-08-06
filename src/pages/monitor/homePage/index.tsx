import React, { useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import { connect, Dispatch } from 'umi';
import { ConnectState } from '@/models/connect';
import { Statistics, Order, Product, Yield, Machine, Worker, Utilization, Fault } from './items';
import moment from 'moment';
import home1 from '@/assets/home/home1.jpeg';
import home2 from '@/assets/home/home2.jpeg';
import home3 from '@/assets/home/home3.jpeg';
import home4 from '@/assets/home/home4.jpeg';
import home5 from '@/assets/home/home5.jpeg';
const assembly = [
    { title: 'statistic', img: home1, name: '今日产量', unit: '万针' },
    { title: 'order', img: home2, name: '未完成订单', },
    { title: 'plan', img: home3, name: '未完成款式', },
    { title: 'device', img: home4, name: '在线设备数', },
    { title: 'worker', img: home5, name: '在岗工人数', }
];
interface HomePageProps {
    dispatch: Dispatch;
    home: ConnectState;
}
const HomePage: React.FC<HomePageProps> = (props) => {
    const { dispatch, home: { overData } } = props;
    useEffect(() => {
        if (dispatch) {
            dispatch({
                type: 'home/fetch',
                payload: {
                    yieldCount: 1,
                    planCount: 5,
                    noticeCount: 5,
                    orderCount: 5
                }
            })
        }
    }, [])
    const { order, plan, device } = overData || [];
    let count = 0;
    if (overData && overData.yield && overData.yield.items && overData.yield.items[0]) {
        let end_date = moment(), date = overData.yield.items[0].date;
        let timeDiff = end_date.diff(date, 'days')
        if (timeDiff !== 0) count = 0;
        else count = Number((overData.yield.items[0].count).toFixed(2));
    }
    const data = {
        statistic: count,
        order: order && order.active,
        plan: plan && plan.active,
        device: device && device.runs,
    }
    return (
        <div className={styles.content}>
            <div className={styles.header}>
                {
                    assembly.map((v, i) => {
                        return <Statistics {...v} count={data[v.title]} key={i} />
                    })
                }
            </div>
            <div className={styles.work}>
                <Order {...order} />
                <Product {...plan} />
            </div>
            <div className={styles.static}>
                <Yield />
                <Machine {...device} />
            </div>
            <div className={styles.info}>
                <Worker />
                <Utilization />
                <Fault />

            </div>
        </div>
    )
}
export default connect(({ home, loading }: ConnectState) => ({
    home,
    // loading: loading.effects[]
}))(HomePage)
