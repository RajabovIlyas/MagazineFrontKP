import React from "react";
import classes from './BuyUser.module.css';
import 'antd/dist/antd.css';
import {Button, Col, Descriptions, Layout, Rate, Row, Statistic} from "antd";
import {NavLink} from "react-router-dom";
import {getNiceDate} from "../../../../../utils";

const {Content} = Layout;

const BuyUser = (props) => {
    return (
        <>
            {props.buy ? props.buy.map(p =>

                <Content className={classes.computers_section}>
                    <Row style={{margin: '8px 8px'}}>
                        <Col span={18}>
                            <Descriptions key={p._id} title={p.name} size='small' column={2}>
                                <Descriptions.Item label='Дата добавления'>
                                    {getNiceDate(p.date_buy)}</Descriptions.Item>
                            </Descriptions>
                        </Col>
                        <Col span={6}>
                            <div
                                style={{
                                    display: 'flex',
                                    width: 'max-content',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <Statistic title='Статус'
                                           value='В наличии'
                                           style={{
                                               marginRight: '32px',
                                           }}
                                />
                                <Statistic title='Цена' prefix='$' value={p.price}/>
                            </div>
                        </Col>
                    </Row>
                </Content>) : null}
        </>)
};

export default BuyUser;