import React from "react";
import classes from './Computer_page.module.css';
import {CreditCardOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Button, Col, Descriptions, Form, Input, Layout, Rate, Row, Statistic} from "antd";
import CommentSelect from "../../CommentSelect/CommentSelect";
import {getNiceDate} from "../../../../utils";

const { TextArea } = Input;
const {Content} = Layout;

const Computer_page = (props) => {

    return (
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
                            label='Дата добавления'>{props.computers_section.date_add?
                            getNiceDate(props.computers_section.date_add):
                            props.computers_section.date_add
                            }</Descriptions.Item>
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
                    <img style={{width: '17em'}} src={props.computers_section.img}/>
                    <br/>
                    {(props.user.isAuth)?<Button key="1" style={{margin: '8px 8px'}}
                            type='primary' onClick={props.selectBuy}><CreditCardOutlined/>Купить</Button>:
                        <Button key="1" style={{margin: '8px 8px'}}
                                type='primary' onClick={props.selectBuy} disabled><CreditCardOutlined/>Купить</Button>}
                    {(props.user.isAuth)?<Button key="2" style={{margin: '8px 8px'}}
                        onClick={props.selectAddBasket}>Добавить в корзину</Button>:
                        <Button key="2" style={{margin: '8px 8px'}} disabled>Добавить в корзину</Button>}
                </Col>
            </Row>
            <div style={{margin: '8px 8px'}}>
            </div>
            <Form
                style={{margin: '16px 16px'}}
                name="basic"
                ref={props.formRef}
                onFinish={props.addComment}>
                <Form.Item
                    name="commentUser"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста заполните данную ячейку!',
                        },
                    ]}>
                    <TextArea allowClear={true} autoSize={ {minRows: 1, maxRows: 3} } style={{width: '70%'}} placeholder="Комментарий"/>
                </Form.Item>
                <Form.Item>
                    {(props.user.isAuth)?<Button type="primary" htmlType="submit" >
                        Добавить комментарий
                    </Button>:
                        <Button type="primary" htmlType="submit" disabled>
                            Добавить комментарий
                        </Button>}

                </Form.Item>
            </Form>
            {props.computers_section.comments?
                <CommentSelect comments={props.computers_section.comments}/>:null
            }
            {/*<CommentSelect comments={props.computers_section}/>*/}
        </Content>)
};


export default Computer_page;