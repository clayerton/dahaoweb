import React from 'react';
import styles from '../index.less';
import Header from './header';
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
interface productProps {
    value?: number;
    items?: [];
}
interface itemProps {
    orderName: string;
    state: string;
    estimate: number;
    invalid: number;
    total: number;
    valid: number;
}

const Product: React.FC<productProps> = (props) => {
    const items = props && props.items;

    return (
        <div className={styles.product}>
            <Header name={'款式状态'} router={'/product'} />
            <div className={styles.table}>
                <ul>
                    <li>款式名称</li>
                    <li>状态</li>
                    <li>剩余时间</li>
                    <li>进度</li>
                    <li>完成数量</li>
                </ul>
                {
                    items && items.map((v: itemProps, i:number) => {
                        return (
                            <ul key={i}>
                                <li>{v.orderName}</li>
                                <li className={styles.status}>{v.state && statusType[v.state]}</li>
                                <li>预计:&nbsp;&nbsp;{v.estimate}</li>
                                <li>进度</li>
                                <li>{v.valid && parseInt(v.valid)}</li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Product;