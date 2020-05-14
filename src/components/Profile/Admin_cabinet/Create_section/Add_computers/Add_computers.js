import React from "react";
import classes from './Add_computers.module.css';
import 'antd/dist/antd.css';
import {Button, Form, Input} from "antd";

const Add_computers = (props) => {
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
            <Form
                {...layout}
                style={{margin: '16px 0'}}
                name="basic"
                onFinish={props.onFinish}
                onFinishFailed={props.onFinishFailed}
            >
                <Form.Item label="Название компьютера"
                           name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста заполните данную ячейку!',
                        },
                    ]}
                >
                    <Input defaultValue={props.computer.name} placeholder="Заполните данную ячейку"/>
                </Form.Item>
                <Form.Item label="Жёсткий диск"
                           name="ram"
                           rules={[
                               {
                                   required: true,
                                   message: 'Пожалуйста заполните данную ячейку!',
                               },
                           ]}
                >
                    <Input defaultValue={props.computer.ram}
                           placeholder="Заполните данную ячейку"/>
                </Form.Item>
                <Form.Item label="Процессор"
                           name="cpu"
                           rules={[
                               {
                                   required: true,
                                   message: 'Пожалуйста заполните данную ячейку!',
                               },
                           ]}
                >
                    <Input defaultValue={props.computer.cpu} placeholder="Заполните данную ячейку"/>
                </Form.Item>
                <Form.Item label="Видеокарта"
                           name="video_card"
                           rules={[
                               {
                                   required: true,
                                   message: 'Пожалуйста заполните данную ячейку!',
                               },
                           ]}
                >
                    <Input defaultValue={props.computer.video_card} placeholder="Заполните данную ячейку"/>
                </Form.Item>
                <Form.Item label="Оперативная память"
                           name="rom"
                           rules={[
                               {
                                   required: true,
                                   message: 'Пожалуйста заполните данную ячейку!',
                               },
                           ]}
                >
                    <Input defaultValue={props.computer.rom} placeholder="Заполните данную ячейку"/>
                </Form.Item>
                <Form.Item label="Страна производства"
                           name="manufacturer"
                           rules={[
                               {
                                   required: true,
                                   message: 'Пожалуйста заполните данную ячейку!',
                               },
                           ]}
                >
                    <Input defaultValue={props.computer.manufacturer} placeholder="Заполните данную ячейку"/>
                </Form.Item>
                <Form.Item label="Цена"
                           name="price"
                           rules={[
                               {
                                   required: true,
                                   message: 'Пожалуйста заполните данную ячейку!',
                               },
                           ]}
                >
                    <Input defaultValue={props.computer.price}
                           value={props.computer.price}
                           placeholder="Заполните данную ячейку"/>
                </Form.Item>
                <Form.Item label="URL для картинки"
                           name="img"
                >
                    <Input defaultValue={props.computer.img} placeholder="Заполните данную ячейку"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Сохранить</Button>
                </Form.Item>

            </Form>
        </>)
};

export default Add_computers;