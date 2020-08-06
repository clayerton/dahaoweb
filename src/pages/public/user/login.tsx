import React, { Fragment } from 'react';
import { Form, Input } from 'antd';
import { FormInstance } from 'antd/es/form';
import { Link, connect, Dispatch } from 'umi';
import { ConnectState } from '@/models/connect';
import styles from './login.less'

export interface FormValueType {
    user?: string;
    password?: string;
}
export interface LoginProps {
    styles?: React.CSSProperties;
    className?: string;
    from?: FormInstance;
    onSubmit?: (values: FormValueType) => void;
    submitting: boolean;
    dispatch: Dispatch;

}
const FormItem = Form.Item;

const Login: React.FC<LoginProps> = (props) => {
    const [form] = Form.useForm();

    const handleSubmit = async () => {
        const fieldsValue = await form.validateFields();
        const { dispatch } = props;
        dispatch({
            type: 'login/login',
            payload: { ...fieldsValue },
        });
    }
    const renderContent = () => {
        return (
            <Fragment>
                <FormItem
                    name="user"
                    className={styles.userInfo}
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        prefix={<img style={{ width: 28, height: 30 }} src={require('@/assets/home/user.png')} />}
                        autoComplete="off"
                        type="username"
                        className={styles.user}
                        placeholder="请输入手机号或用户名"
                    />
                </FormItem>
                <FormItem
                    name="password"
                    className={styles.userInfo}
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<img style={{ width: 28, height: 30 }} src={require('@/assets/home/password.png')} />}
                        autoComplete="off"
                        type="password"
                        placeholder="请输入登录密码"
                    />
                </FormItem>
            </Fragment>

        )
    }
    return (
        <div className={styles.content}>
            <div className={styles.left}>
                <div className={styles.loginTitle}>欢迎登录大豪云平台</div>
                <div className={styles.loginLogo}>
                    <img src={require('@/assets/home/loginBg.png')} />
                </div>
            </div>
            <div className={styles.right}>
                <Form form={form}>
                    {renderContent()}
                    <div className={styles.forgetPass}><Link to="/user/forgotPwd">忘记密码？</Link></div>
                    <div onClick={handleSubmit} className={styles.onLogin}>立即登录</div>
                </Form>
            </div>
        </div>
    )
}

export default connect(({ login, loading }: ConnectState) => ({
    userLogin: login,
    submitting: loading.effects['login/login'],
}))(Login);