import React from "react";
import {connect} from "react-redux";
import BasketUser from "./BasketUser";
import {buyBasketsThunk, deleteBasketsThunk, getBasketsThunk} from "../../../../../redux/basket_reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../../hoc/withAuthRedirect";

class BasketUserContainer extends React.Component {
    componentDidMount() {
        this.props.getBaskets(this.props.user._id);
    }

    deleteBasket(id) {
        this.props.deleteBaskets(id,this.props.user._id);
    }

    buyBasket(id) {
        this.props.buyBaskets(id,this.props.user._id);
    }

    render() {
        return (
            <>
                <BasketUser {...this.props} deleteBasket={this.deleteBasket.bind(this)}
                            buyBasket={this.buyBasket.bind(this)}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.authReducer,
        basket: state.basketPage.basket,
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        getBaskets: getBasketsThunk,
        deleteBaskets: deleteBasketsThunk,
        buyBaskets:buyBasketsThunk,
    }))(BasketUserContainer);