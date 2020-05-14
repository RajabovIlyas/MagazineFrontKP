import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import User_cabinet from "./User_cabinet";

class User_cabinetContainer extends React.Component{
    state = { visibleChange: false,
        visibleBasket:false,
        visibleBuy:false,};

    showDrawerChange = () => {
        this.setState({
            visibleChange: true,
        });
    };

    onCloseChange = () => {
        this.setState({
            visibleChange: false,
        });
    };
    showDrawerBasket = () => {
        this.setState({
            visibleBasket: true,
        });
    };

    onCloseBasket = () => {
        this.setState({
            visibleBasket: false,
        });
    };
    showDrawerBuy = () => {
        this.setState({
            visibleBuy: true,
        });
    };

    onCloseBuy = () => {
        this.setState({
            visibleBuy: false,
        });
    };
    render() {
        return (
            <>
                <User_cabinet {...this.props}  showDrawerChange={this.showDrawerChange.bind(this)}
                              onCloseChange={this.onCloseChange.bind(this)} state={this.state}
                              showDrawerBuy={this.showDrawerBuy.bind(this)} onCloseBuy={this.onCloseBuy.bind(this)}
                              showDrawerBasket={this.showDrawerBasket.bind(this)}
                              onCloseBasket={this.onCloseBasket.bind(this)}/>
            </>
        )
    }
}



const mapStateToProps = (state) => {
    return{
        userData: state.authReducer
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
    })
)
(User_cabinetContainer);
