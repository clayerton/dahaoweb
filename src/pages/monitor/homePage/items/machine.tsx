import React from 'react';
import styles from '../index.less';
import Header from './header';
import Circle from 'react-circle';

const machineType = [
    { type: 'runs', name: '开车', color: '#11830E' },
    { type: 'stops', name: '停车', color: '#FA6400' },
    { type: 'errors', name: '故障', color: '#B80F0F' },
    { type: 'offlines', name: '离线', color: '#6D7278' }]
interface MachineType {
    all: number;
    errors: number;
    offlines: number;
    runs: number;
    stops: number;
}
const Machine: React.FC<MachineType> = (props) => {
    return (
        <div className={styles.machine}>
            <Header name={'机器状态'} router={'/machine'} />
            <div className={styles.device}>
                {
                    machineType.map((v, i) => {
                        let progress = props.all && props[v.type] && (props[v.type]/props.all * 100) || 0;
                        progress = Number(progress.toFixed(1))
                        return (
                            <div className={styles.items} key={i}>
                                <div className={styles.title}>{v.name}:&nbsp;&nbsp;
                                <span style={{color: v.color}}>{props[v.type]}</span>/{props.all}</div>
                                <div className={styles.rate}>
                                <Circle
                                    animate={true} 
                                    animationDuration="0.5s"
                                    size='120'
                                    lineWidth="26"
                                    progressColor={v.color}
                                    bgColor="rgb(207,207,207)"
                                    roundedStroke={true}
                                    textColor='#333'
                                    textStyle={{
                                        font: '4rem Helvetica, Arial, sans-serif'
                                    }}
                                    progress={progress}
                                />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Machine;