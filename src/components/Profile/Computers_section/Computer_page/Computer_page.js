import React from "react";
import classes from './Computer_page.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import {CreditCardOutlined} from '@ant-design/icons';

import 'antd/dist/antd.css';
import {Button, Col, Descriptions, Layout, Pagination, Rate, Row, Statistic} from "antd";

const {Content} = Layout;

const Computer_page = (props) => {

    return (<>{props.isFetching ? <Preloader/> :(
        <Content className={classes.computers_section}>
            <Row style={{margin: '8px 8px'}}>
                <Col span={17}>
                    <Descriptions title={props.computers_section.name} size='middle' column={2}>
                        <Descriptions.Item
                            label='Процессор'>{props.computers_section.cpu}</Descriptions.Item>
                        <Descriptions.Item
                            label='Оперативная память'>{props.computers_section.rom}</Descriptions.Item>
                        <Descriptions.Item
                            label='Жёсткий диск'>{props.computers_section.ram}</Descriptions.Item>
                        <Descriptions.Item
                            label='Видеокарта '>{props.computers_section.video_card}</Descriptions.Item>
                        <Descriptions.Item
                            label='Производитель'>{props.computers_section.manufacturer}</Descriptions.Item>
                        <Descriptions.Item
                            label='Дата добавления'>{props.computers_section.date_add}</Descriptions.Item>
                        <Descriptions.Item label='Рейтинг'>
                            <Rate disabled defaultValue={props.computers_section.rate}/>
                        </Descriptions.Item>
                    </Descriptions>
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
                            <Statistic title='Цена' prefix='$' value={props.computers_section.price}/>
                        </div>
                </Col>
                <Col span={7}>
                    <img style={{ width: '17em'}} src={props.computers_section.img}/>
                    <br/>
                        <Button key="1" style={{margin: '8px 8px'}}
                                type='primary'><CreditCardOutlined />Купить</Button>
                    <Button key="2" style={{margin: '8px 8px'}} >Добавить в корзину</Button>
                </Col>
            </Row>
            <div style={{margin: '8px 8px'}}>

            </div>
        </Content>

    )
    }
    </>)
};

//<Content className={classes.computers_section}>
//                     <div>
//                         <div className={classes.wrapper}>
//                             <div className={classes.header}>
//                                 <h4>Наименование - {p.name}</h4></div>
//                             <div className={classes.photo}>
//                                 <img src={p.img}/></div>
//                             <div className={classes.information}>
//                                 <h5>Процессор - {p.cpu}</h5>
//                                 <h5>Оперативная память - {p.rom}</h5>
//                                 <h5>Жёсткий диск - {p.ram}</h5>
//                                 <h5>Видеокарта - {p.video_card}</h5>
//                                 <h5>Страна производства - {p.manufacturer}</h5>
//                                 <h5>Цена - {p.price}</h5>
//                             </div>
//                         </div>
//                     </div>
//                 </Content>

export default Computer_page;