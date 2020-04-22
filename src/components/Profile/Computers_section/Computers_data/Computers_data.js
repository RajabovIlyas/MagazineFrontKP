import React from "react";
import classes from './Computers_data.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import 'antd/dist/antd.css';
import {Button, Col, Descriptions, Layout, Pagination, Rate, Row, Statistic} from "antd";
import {NavLink} from "react-router-dom";

const {Content} = Layout;

const Computers_data = (props) => {

    return (
        <>
            <Pagination showSizeChanger onShowSizeChange={props.changePageSizeNow}
                        className={classes.center}
                        onChange={props.selectPageNow} defaultCurrent={props.page}
                        total={props.quantity}/>
            {props.isFetching ? <Preloader/> : props.computers_section.map(p =>

                <Content className={classes.computers_section}>
                    <Row style={{margin: '8px 8px'}}>
                        <Col span={18}>
                            <Descriptions title={p.name} size='small' column={2}>
                                <Descriptions.Item label='Производитель'>{p.manufacturer}</Descriptions.Item>
                                <Descriptions.Item label='Дата добавления'>{p.date_add}</Descriptions.Item>
                                <Descriptions.Item label='Рейтинг'><Rate disabled defaultValue={p.rate}/>
                                </Descriptions.Item>
                            </Descriptions>
                        </Col>
                        <Col span={6}>
                            <NavLink to={'/computers_section/' + p._id}><Button key="1"
                                                                                style={{float: 'right', right: '10px'}}
                                                                                type='primary'>Описание</Button>
                            </NavLink>
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

export default Computers_data;