import React from "react";
import classes from './ChangeUser.module.css';
import 'antd/dist/antd.css';
import {Button, Col, Descriptions, Form, Input, Layout, Row, Typography} from "antd";

const {Title} = Typography;
const {Content} = Layout;

export default (props) => {
    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 10,
        },
    };

    return (
        <>
            <Content className={classes.computers_section}>
                <Row style={{margin: '8px 8px'}}>
                    <Col span={12}>
                        <Form
                            {...layout}
                            style={{margin: '16px 0'}}
                            name="basic"
                            onFinish={props.onFinish}
                            onFinishFailed={props.onFinishFailed}
                        >
                            <Form.Item label="Полное имя"
                                       name="name"
                                       rules={[
                                           {
                                               required: true,
                                               message: 'Пожалуйста заполните данную ячейку!',
                                           },
                                       ]}
                            >
                                <Input defaultValue={null} placeholder="Заполните данную ячейку"/>
                            </Form.Item>
                            <Form.Item label="Фамилия"
                                       name="surname"
                                       rules={[
                                           {
                                               required: true,
                                               message: 'Пожалуйста заполните данную ячейку!',
                                           },
                                       ]}
                            >
                                <Input defaultValue={null}
                                       placeholder="Заполните данную ячейку"/>
                            </Form.Item>
                            <Form.Item label="Адрес доставки"
                                       name="address"
                                       rules={[
                                           {
                                               required: true,
                                               message: 'Пожалуйста заполните данную ячейку!',
                                           },
                                       ]}
                            >
                                <Input defaultValue={null} placeholder="Заполните данную ячейку"/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Сохранить</Button>
                            </Form.Item>

                        </Form>
                    </Col>

                    <Col span={12}>
                        <Form
                            {...layout}
                            style={{margin: '16px 0'}}
                            name="basic"
                            onFinish={props.onFinish}
                            onFinishFailed={props.onFinishFailed}
                        >
                            <Form.Item label="Старый пароль"
                                       name="aldPassword"
                                       rules={[
                                           {
                                               required: true,
                                               message: 'Пожалуйста заполните данную ячейку!',
                                           },
                                       ]}
                            >
                                <Input.Password defaultValue={null} placeholder="Заполните данную ячейку"/>
                            </Form.Item>
                            <Form.Item label="Новый пароль"
                                       name="newPassword"
                                       rules={[
                                           {
                                               required: true,
                                               message: 'Пожалуйста заполните данную ячейку!',
                                           },
                                       ]}
                            >
                                <Input.Password defaultValue={null}
                                                placeholder="Заполните данную ячейку"/>
                            </Form.Item>
                            <Form.Item label="Повторите новый пароль"
                                       name="newPassword2"
                                       rules={[
                                           {
                                               required: true,
                                               message: 'Пожалуйста заполните данную ячейку!',
                                           },
                                       ]}
                            >
                                <Input.Password defaultValue={null}
                                                placeholder="Заполните данную ячейку"/>
                            </Form.Item>
                            <Form.Item className={classes.center}>
                                <Button type="primary" htmlType="submit">Сохранить</Button>
                            </Form.Item>

                        </Form>
                    </Col>
                </Row>
            </Content>
        </>
    )
};