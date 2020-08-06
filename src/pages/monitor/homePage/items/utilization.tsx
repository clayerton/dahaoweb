import React from 'react';
import styles from '../index.less';
import Header from './header';

const Utilization: React.FC<{}> = (props) => {

    return (
        <div className={styles.utilization}>
            <Header name={'稼动率'} router={'/utilization'} />
            <table>
                <thead>
                    <tr>
                        <th>机器编号</th>
                        <th>机器名称</th>
                        <th>车间</th>
                        <th>稼动率</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1001</td>
                        <td>10号机器1</td>
                        <td>一车间</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>10号机器1</td>
                        <td>一车间</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>10号机器1</td>
                        <td>一车间</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>10号机器1</td>
                        <td>一车间</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>10号机器1</td>
                        <td>一车间</td>
                        <td>20%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Utilization;