import React from "react";
import classes from './User_cabinet.module.css';
import 'antd/dist/antd.css';
import {Button, Col,  Drawer, Layout, Row, Typography} from "antd";
import ChangeUserContainer from "./ChangeUser/ChangeUserContainer";
import BasketUserContainer from "./BasketUser/BasketUserContainer";
import BuyUserContainer from "./BuyUser/BuyUserContainer";

const {Title} = Typography;
const {Content} = Layout;

const User_cabinet = (props) => {
    return (
        <>
            <Drawer
                title="Редактировать"
                placement="bottom"
                destroyOnClose='true'
                height={330}
                onClose={props.onCloseChange}
                visible={props.state.visibleChange}
            >
                <ChangeUserContainer/>
            </Drawer>
            <Drawer
                width={'1000'}
                title="Корзина"
                placement="right"
                destroyOnClose='true'
                onClose={props.onCloseBasket}
                visible={props.state.visibleBasket}
            >
                <BasketUserContainer/>
            </Drawer>
            <Drawer
                width={'1000'}
                title="Покупки"
                placement="left"
                destroyOnClose='true'
                onClose={props.onCloseBuy}
                visible={props.state.visibleBuy}
            >
                <BuyUserContainer/>
            </Drawer>
            <Content className={classes.computers_section}>
                <Row style={{margin: '8px 8px'}}>
                    <Col span={17}>
                        <div style={{margin: '8px 8px'}}>
                            <Title level={3}>Профиль</Title>
                            <Title level={4}>Полное имя: {props.userData.name}</Title>
                            <Title level={4}>Фамилия: {props.userData.surname}</Title>
                            <Title level={4}>Адрес доставки: {props.userData.address}</Title>
                        </div>
                    </Col>
                    <Col span={7}>
                        <div className={classes.line}>
                        <Title level={4}>Меню пользователя</Title>
                        <Button key="1" style={{margin: '8px 8px'}}
                                onClick={props.showDrawerBuy}>Просмотреть покупки</Button>
                        <br/>
                        <Button key="2" style={{margin: '8px 8px'}}
                                onClick={props.showDrawerBasket}>Просмотреть корзину</Button>
                        <br/>
                        <Button key="3" style={{margin: '8px 8px'}}
                                onClick={props.showDrawerChange}>Редактировать учетную запись</Button>
                        </div>
                    </Col>
                </Row>
            </Content>
        </>
    )
};


export default User_cabinet;