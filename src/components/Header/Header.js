import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import 'antd/dist/antd.css';
import {Row, Col, Button, Layout} from 'antd';

const {Header} = Layout;

const Header_hed = (props) => {
    return (
        <>
            <Header className='site-layout-background' style={{padding: 0}}>
                <Row>
                    <Col span={18}>Что то нужно придумать сюда</Col>
                    <Col span={6}>
                        <NavLink to={'/sign_in'}>
                            <Button size={'large'} className={classes.button_size} type='primary'>Вход</Button>
                        </NavLink>
                        <NavLink to={'/registration'}>
                            <Button size={'large'} className={classes.button_size}>Регистрация</Button>
                        </NavLink>
                    </Col>
                </Row>

            </Header>
        </>
    )
};

export default Header_hed;