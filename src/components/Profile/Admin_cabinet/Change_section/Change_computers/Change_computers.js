import React from "react";
import classes from './Change_computers.module.css';
import 'antd/dist/antd.css';
import {Button, Col, Descriptions, Drawer, Layout, Pagination, Rate, Row, Statistic} from "antd";
import Change_page_computerContainer from "./Change_page_computer/Change_page_computerContainer";

const {Content} = Layout;

const Change_computers = (props) => {
    return (
        <>
            <Drawer
                title="Изменить данные о компьютерной технике"
                width={720}
                onClose={props.onClose}
                visible={props.state.visible}
                destroyOnClose={true}
                bodyStyle={{ paddingBottom: 80 }}
            ><Change_page_computerContainer />
            </Drawer>
            <Pagination showSizeChanger onShowSizeChange={props.changePageSizeNow}
                        className={classes.center}
                        onChange={props.selectPageNow} defaultCurrent={props.page}
                        total={props.quantity}/>
            {props.computers_section.map(p =>
                <Content className={classes.computers_section}>
                    <Row style={{margin: '8px 8px'}}>
                        <Col span={18}>
                            <Descriptions key={p._id} title={p.name} size='small' column={2}>
                                <Descriptions.Item label='Производитель'>{p.manufacturer}</Descriptions.Item>
                                <Descriptions.Item label='Дата добавления'>{p.date_add}</Descriptions.Item>
                                <Descriptions.Item label='Рейтинг'><Rate disabled defaultValue={p.rate}/>
                                </Descriptions.Item>
                            </Descriptions>
                        </Col>
                        <Col span={6}>

                            <Button className={classes.button} danger
                                    type="primary" onClick={()=>props.deleteComputer(p._id)}>Удалить</Button>
                            <Button
                                    className={classes.button} onClick={()=>{props.selectChange(p);
                                        props.showDrawer()}}
                                    type="primary" >Изменить</Button>
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


export default Change_computers;