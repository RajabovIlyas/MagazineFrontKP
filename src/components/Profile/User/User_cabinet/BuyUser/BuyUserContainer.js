import React from "react";
import {connect} from "react-redux";
import BuyUser from "./BuyUser";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../../hoc/withAuthRedirect";
import {getBuyThunk} from "../../../../../redux/buy_reducer";

class BuyUserContainer extends React.Component {
    componentDidMount() {
        this.props.getBuy(this.props.user._id);
    }
    render() {
        return (
            <>
                <BuyUser {...this.props} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        buy: state.buyPage.buy,
        user: state.authReducer,
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        getBuy:getBuyThunk,
    }))(BuyUserContainer);