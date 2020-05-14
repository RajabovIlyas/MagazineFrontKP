import React from "react";
import classes from './Registration.module.css';

import 'antd/dist/antd.css';
import { Form, Input, Button, Layout } from 'antd';
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


const Registration = (props) => {

    if(props.isAuth){
        return <Redirect to={'/personal_area'}/>
    }

    return (
        <>
            <Content className={classes.registration}>

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
                        label="Полное имя"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста заполните данную ячейку!',
                            },
                        ]}
                    >
                        <Input className={classes.input_size}/>
                    </Form.Item>
                    <Form.Item
                        label="Фамилия"
                        name="surname"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста заполните данную ячейку!',
                            },
                        ]}
                    >
                        <Input className={classes.input_size}/>
                    </Form.Item>
                    <Form.Item
                        label="Адрес доставки"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста заполните данную ячейку!',
                            },
                        ]}
                    >
                        <Input className={classes.input_size}/>
                    </Form.Item>
                    <Form.Item
                        label="Логин"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста заполните данную ячейку!',
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
                                message: 'Пожалуйста заполните данную ячейку!',
                            },
                        ]}
                    >
                        <Input.Password className={classes.input_size}/>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Зарегистрировться
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </>
    );
};

export default Registration;