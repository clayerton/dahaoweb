import React from 'react';
import styles from '../index.less';
import Header from './header';
import moment from 'moment';
const statusType = {
    queue: '待生产',
  work: '生产中',
  suspend: '已暂停',
  complete: '已完成',
  unallocated: '未分配',
  uncollected: '未领',
  received: '已领',
  finished: '领完',
}
interface OrderProps {
    value?: number;
    items?: [];
}
interface itemProps {
    name: string;
    state: string;
    customer: string;
    created: string; 
    deadline: string;
}
const Order: React.FC<OrderProps> = (props) => {
    const items = props && props.items;
    return (
        <div className={styles.order}>
            <Header name={'订单状态'} router={'/order'} />
            <div className={styles.table}>
                <ul>
                    <li>订单名称</li>
                    <li>客户</li>
                    <li>交期</li>
                    <li>状态</li>
                    <li>进度</li>
                    <li>创建时间</li>
                </ul>
                {
                    items && items.map((v:itemProps, i:number) => {
                        return (
                            <ul key={i}>
                                <li>{v.name}</li>
                                <li>{v.customer}</li>
                                <li>{v.deadline}</li>
                                <li className={styles.status}>{v.state && statusType[v.state]}</li>
                                <li><div className={styles.progress}>
                                    <div className={styles.pro}>
                                        <div className={styles.rate} style={{ width: '50%', background: '#0072FF' }}></div>
                                    </div>
                                    <span>50%</span>
                                </div></li>
                                <li>{v.created && moment(v.created).format('YYYY-MM-DD HH:mm:ss')}</li>
                            </ul>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default Order;