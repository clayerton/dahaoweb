import React from 'react';
import styles from './header.less';
import {history} from 'umi';
const Header: React.FC<{
    name: string;
    router?: string;
}> = ({ name, router }) => {
    const _onClick = () => {
        console.log({router})
    }
    return (
        <div className={styles.header}>
           <div className={styles.title}>{name}</div>
           <div onClick={_onClick}  className={styles.more}>
                <span />
                <span />
                <span />
            </div>
        </div>
    )
}
export default Header;