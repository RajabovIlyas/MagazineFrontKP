import React from "react";
import 'antd/dist/antd.css';
import classes from "./Admin_cabinet.module.css";
import {Drawer, Input, Button, Layout, Tabs} from 'antd';
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import Change_computersContainer from "./Change_section/Change_computers/Change_computersContainer";
import Add_computersContainer from "./Create_section/Add_computers/Add_computersContainer";
import { PlusOutlined } from '@ant-design/icons';
import {
    addComputerSelectThunk,
} from "../../../redux/computerAddAdmin_reducer";
import {connect} from "react-redux";

const {TabPane} = Tabs;
const {Content} = Layout;

class Admin_cabinet extends React.Component {
    state = {visible: false, placement: 'left'};
    showDrawer = () => {
        this.props.addComputerSelect();
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        return (
            <>
                <Content className={classes.admin_cabinet}>
                    <Tabs defaultActiveKey="1" className={classes.tabs}>
                        <TabPane tab="Компьютерная техника" key="1">
                            <Drawer
                                width={720}
                                title="Добавление компьютерной техники"
                                placement={this.state.placement}
                                onClose={this.onClose}
                                visible={this.state.visible}
                            >
                                <Add_computersContainer/>
                            </Drawer>
                            <Button type="primary" onClick={this.showDrawer}>
                                <PlusOutlined />Добавить компютерную технику
                            </Button>
                            <Change_computersContainer/>
                        </TabPane>
                        <TabPane tab="Телефоны и планшеты" key="2">
                        </TabPane>
                        <TabPane tab="Аудиотехника" key="3">
                        </TabPane>
                        <TabPane tab="Фототехника" key="4">
                        </TabPane>
                    </Tabs>
                    {/*<Create_section/>*/}
                </Content>
            </>
        );
    }
};

export default compose(
    withAuthRedirect,
    connect(null,{
        addComputerSelect:addComputerSelectThunk,
    })
)
(Admin_cabinet);