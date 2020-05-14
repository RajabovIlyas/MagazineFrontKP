import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import 'antd/dist/antd.css';
import {Row, Col, Button, Layout,Avatar} from 'antd';
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

const {Header} = Layout;

const Header_hed = (props) => {
    return (
        <>
            <Header className='site-layout-background' style={{padding: 0}}>
                <Row>
                    <Col span={18}><h4 style={{margin: '0px 15px'}}>Интернет-магазин электро-техники</h4></Col>
                    <Col span={6}>
                        {props.isAuth ? (
                                <div style={{float: 'right'}}>
                                <NavLink to={'/personal_area'}>
                                    <Avatar
                                        style={{
                                            backgroundColor: ColorList[Math.floor(Math.random() * Math.floor(4))],
                                            verticalAlign: 'middle',
                                            top:'-4px',
                                            margin: '0 20px',
                                        }}
                                        size="large"
                                    >
                                        {props.user.name!==null?props.user.name[0]:'?'}
                                    </Avatar>
                                </NavLink>

                                    <NavLink to={'/sign_in'}>
                                        <Button size={'large'} className={classes.button_size}
                                                onClick={props.logoutApi}>Выйти</Button>
                                    </NavLink>
                                </div>
                            ) :
                            (<div style={{float: 'right'}}>
                                <NavLink to={'/sign_in'}>
                                    <Button size={'large'} className={classes.button_size} type='primary'>Вход</Button>
                                </NavLink>
                                <NavLink to={'/registration'}>
                                    <Button size={'large'} className={classes.button_size}>Регистрация</Button>
                                </NavLink>
                            </div>)
                        }

                    </Col>
                </Row>

            </Header>
        </>
    )
};

export default Header_hed;