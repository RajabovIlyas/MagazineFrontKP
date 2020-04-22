import React from "react";
import classes from './Add_computers.module.css';
import 'antd/dist/antd.css';
import {Button, Row, Col, Layout, Typography} from "antd";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../utils";
import {TextBox} from "../../../../Common/FormsControls/FormsControls";

const {Title} = Typography;
const {Content} = Layout;

const maxLength=maxLengthCreator(50);

const Add_computersForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Row style={{margin: '8px 0'}} className={classes.text1}>
                <Col span={12}>
                    <p>Название компьютера:</p>
                    <Field component={TextBox} validate={[required,maxLength]} name={'name'}
                           className={classes.example_input}/>
                </Col>
                <Col span={12}>
                    <p>Жёсткий диск:</p>
                    <Field component={TextBox} validate={[required,maxLength]} name={'ram'}
                           className={classes.example_input} />
                </Col>
            </Row>
            <Row className={classes.text1}>
                <Col span={12}>
                    <p>Процессор:</p>
                    <Field component={TextBox} validate={[required,maxLength]} name={'cpu'}
                           className={classes.example_input} />
                </Col>
                <Col span={12}>
                    <p>Видеокарта:</p>
                    <Field component={TextBox} validate={[required,maxLength]} name={'video_card'}
                           className={classes.example_input} />
                </Col>
            </Row>
            <Row className={classes.text1}>
                <Col span={12}>
                    <p>Оперативная память:</p>
                    <Field component={TextBox} validate={[required,maxLength]} name={'rom'}
                           className={classes.example_input} />
                </Col>
                <Col span={12}>
                    <p>Страна производства:</p>
                    <Field component={TextBox} validate={[required,maxLength]} name={'manufacturer'}
                           className={classes.example_input} />
                </Col>
            </Row>
            <Row className={classes.text1}>
                <Col span={12}>
                    <p>URL для картинки:</p>
                    <Field component={TextBox} validate={[required,maxLength]} name={'img'}
                           className={classes.example_input} />
                </Col>
                <Col span={12}>
                    <p>Цена:</p>
                    <Field component={TextBox} validate={[required,maxLength]} name={'price'}
                           className={classes.example_input} />
                </Col>
            </Row>
            <Row style={{margin: '16px 0'}} className={classes.text1}>
                <Col><button>Добавить</button></Col>
            </Row>
        </form>
    )
};

const ReduxAddForm=reduxForm({
    form: 'addComputer'
})(Add_computersForm);

const Add_computers = (props) => {
    const onSubmit=(formData)=>{
        console.log(formData)
    };

    return (
        <>
            <Title style={{margin: '8px 16px'}} level={4}>Добавление компьютера</Title>
            <Content className={classes.computers_section}>
                <ReduxAddForm {...props} onSubmit={onSubmit}/>
            </Content>
        </>
    );
};

export default Add_computers;