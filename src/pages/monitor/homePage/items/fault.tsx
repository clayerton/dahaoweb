import React from 'react';
import styles from '../index.less';
import Header from './header';

const Fault: React.FC<{}> = (props) => {

    return (
        <div className={styles.fault}>
            <Header name={'故障统计'} router={'/fault'} />
            <table>
                <thead>
                    <tr>
                        <th>机器编号</th>
                        <th>机器名称</th>
                        <th>车间</th>
                        <th>故障次数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1001</td>
                        <td>10号机器</td>
                        <td>一车间</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>10号机器</td>
                        <td>一车间</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>10号机器</td>
                        <td>一车间</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>10号机器</td>
                        <td>一车间</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>10号机器</td>
                        <td>一车间</td>
                        <td>22</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Fault;