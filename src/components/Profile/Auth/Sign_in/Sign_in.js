import React from "react";
import classes from './Sign_in.module.css';
import 'antd/dist/antd.css';
import {Form, Input, Button, Checkbox, Layout} from 'antd';
import {Redirect} from "react-router-dom";
const { Content} = Layout;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Sign_in = (props) => {
    if(props.isAuth){
        return <Redirect to={'/personal_area'}/>
    }

    return (
        <Content className={classes.sign_in}>
            <Form
                style={{margin: '16px 0'}}
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={props.onFinish}
                onFinishFailed={props.onFinishFailed}
            >
                <Form.Item
                    label="Логин"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите ваш логин!',
                        },
                    ]}
                >
                    <Input className={classes.input_size}/>
                </Form.Item>
                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите ваш пароль!',
                        },
                    ]}
                >
                    <Input.Password className={classes.input_size}/>
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Вход
                    </Button>
                </Form.Item>
            </Form>
        </Content>
    );
};

export default Sign_in;