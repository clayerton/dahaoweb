import React from 'react';
import styles from '../index.less';

const Statistics: React.FC<{
    img: string;
    name: string;
    count: number;
    unit?: string;
}> = ({ img, name, count, unit }) => {
    return (
        <div className={styles.items}>
            <img src={img} />
            <div className={styles.item}>
                <div>{name}</div>
                <div>{count || 0}<span>{unit || '个'}</span></div>
            </div>
        </div>
    )
}
export default Statistics;