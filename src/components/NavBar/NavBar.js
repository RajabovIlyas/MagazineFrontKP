import React from "react";
import 'antd/dist/antd.css';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import {Layout, Menu} from "antd";
import {
    ShoppingCartOutlined,
    CrownOutlined,
    UserOutlined,
    LineChartOutlined,
    PlusOutlined,
    ShoppingOutlined,
    SettingFilled,
    StarOutlined,
} from '@ant-design/icons';

const {Sider} = Layout;
const {SubMenu} = Menu;


class NavBar extends React.Component {
    state = {
        collapsed: true,
    };

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <NavLink to='/' activeClassName={classes.logo}>
                    <img src='http://beloweb.ru/wp-content/uploads/2014/04/d8b70a14c08960aa506dc834855d4274.png'/>
                </NavLink>
                <Menu theme="dark" mode="inline">
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                  <ShoppingOutlined/>
                  <span>Каталог продукции</span>
                </span>
                        }
                    >
                        <Menu.Item key="1">
                            <NavLink to='/computers_section'>Компьютерная техника</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to='/phone_and_tablet_section'>Телефоны и планшеты</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to='/audio_equipment_section'>Аудиотехника</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <NavLink to='/phototechnique_section'>Фототехника</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <UserOutlined/>
                                <span>Личный кабинет</span>
                            </span>
                        }>
                        <Menu.Item key="6">
                            <NavLink to='/purchase_history'>
                                <ShoppingCartOutlined/>Покупки
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <NavLink to='/basket_history'>
                                <StarOutlined/>Корзина
                            </NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={
                            <span>
                  <CrownOutlined/>
                  <span>Админ</span>
                </span>
                        }
                    >
                        <Menu.Item key="9"><LineChartOutlined/><NavLink
                            to='/admin/statics_production'>Статистика</NavLink></Menu.Item>
                        <Menu.Item key="10"><PlusOutlined/><NavLink to='/admin'>Работа с
                            продукцией</NavLink></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
};

export default NavBar;