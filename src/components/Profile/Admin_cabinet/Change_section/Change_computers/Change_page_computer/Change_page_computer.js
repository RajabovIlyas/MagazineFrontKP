import React from "react";
import classes from './Change_page_computer.module.css';
import 'antd/dist/antd.css';
import { Form, Input, Button, Radio } from 'antd';

const Change_page_computer = (props) => {
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
                           // rules={[
                           //     {
                           //         required: true,
                           //         message: 'Пожалуйста заполните данную ячейку!',
                           //     },
                           // ]}
                    >
                    <Input defaultValue={props.computer.name} placeholder="Заполните данную ячейку" />
                </Form.Item>
                <Form.Item label="Жёсткий диск"
                           name="ram"
                           >
                    <Input defaultValue={props.computer.ram} value={props.computer.ram} placeholder="Заполните данную ячейку" />
                </Form.Item>
                <Form.Item label="Процессор"
                           name="cpu"
                           >
                    <Input defaultValue={props.computer.cpu} placeholder="Заполните данную ячейку" />
                </Form.Item>
                <Form.Item label="Видеокарта"
                           name="video_card"
                           >
                    <Input defaultValue={props.computer.video_card} placeholder="Заполните данную ячейку" />
                </Form.Item>
                <Form.Item label="Оперативная память"
                           name="rom"
                           >
                    <Input defaultValue={props.computer.rom} placeholder="Заполните данную ячейку" />
                </Form.Item>
                <Form.Item label="Страна производства"
                           name="manufacturer"
                           >
                    <Input defaultValue={props.computer.manufacturer} placeholder="Заполните данную ячейку" />
                </Form.Item>
                <Form.Item label="Цена"
                           name="price"
                           min={1}
                           >
                    <Input defaultValue={props.computer.price}
                           value={props.computer.price}
                           placeholder="Заполните данную ячейку" />
                </Form.Item>
                <Form.Item label="URL для картинки"
                           name="img"
                           >
                    <Input defaultValue={props.computer.img} placeholder="Заполните данную ячейку" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">Сохранить</Button>
                </Form.Item>

            </Form>
        </>)
};


export default Change_page_computer;