import React from "react";
import classes from './Registation.module.css';

import 'antd/dist/antd.css';
import {Button, Row, Col, Layout, Typography} from "antd";

const { Title } = Typography;
const {Content} = Layout;


const Registation = (props) => {
    let state = {
        name: React.createRef(),
        rom: React.createRef(),
        ram: React.createRef(),
        video_card: React.createRef(),
        cpu: React.createRef(),
        manufacturer: React.createRef(),
        img: React.createRef(),
        price: React.createRef(),
    };
    let change = () => {
        let data_change = {
            name: state.name.current.value,
            rom: state.rom.current.value,
            ram: state.ram.current.value,
            video_card: state.video_card.current.value,
            cpu: state.cpu.current.value,
            manufacturer: state.manufacturer.current.value,
            img: state.img.current.value,
            price: state.price.current.value,
        };

        props.updateNewComputer(data_change);
    };

    const onKeyPress=(event)=> {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (/\+|-/.test(keyValue))
            event.preventDefault();
    };

    return (
        <>
            <Title style={{ margin: '8px 16px' }} level={4}>Добавление компьютера</Title>
            <Content className={classes.computers_section}>
                <Row style={{ margin: '8px 0' }} className={classes.text1}>
                    <Col span={12}>
                        <p>Название компьютера:</p>
                        <input className={classes.example_input} onChange={change} ref={state.name}
                               value={props.computers_new_data.name}/>
                    </Col>
                    <Col span={12}>
                        <p>Жёсткий диск:</p>
                        <input className={classes.example_input} onChange={change} ref={state.ram}
                               value={props.computers_new_data.ram}/>
                    </Col>
                </Row>
                <Row className={classes.text1}>
                    <Col span={12}>
                        <p>Процессор:</p>
                        <input className={classes.example_input} onChange={change} ref={state.cpu}
                               value={props.computers_new_data.cpu}/>
                    </Col>
                    <Col span={12}>
                        <p>Видеокарта:</p>
                        <input className={classes.example_input} onChange={change} ref={state.video_card}
                               value={props.computers_new_data.video_card}/>
                    </Col>
                </Row>
                <Row className={classes.text1}>
                    <Col span={12}>
                        <p>Оперативная память:</p>
                        <input className={classes.example_input} onChange={change} ref={state.rom}
                               value={props.computers_new_data.rom}/>
                    </Col>
                    <Col span={12}>
                        <p>Страна производства:</p>
                        <input className={classes.example_input} onChange={change} ref={state.manufacturer}
                               value={props.computers_new_data.manufacturer}/>
                    </Col>
                </Row>
                <Row className={classes.text1}>
                    <Col span={12}>
                        <p>URL для картинки:</p>
                        <input className={classes.example_input} onChange={change} ref={state.img}
                               value={props.computers_new_data.img}/>
                    </Col>
                    <Col span={12}>
                        <p>Цена:</p>
                        <input className={classes.example_input}   onChange={change} ref={state.price}
                                   value={props.computers_new_data.price}/>
                    </Col>
                </Row>
                <Row style={{ margin: '16px 0' }} className={classes.text1}>
                    <Col><Button onClick={props.addNewComputer}>Добавить</Button></Col>
                </Row>
            </Content>
        </>
    );
};

export default Registation;