import React from "react";
import {connect} from "react-redux";
import {getUserThunk, logoutThunk} from "../../redux/auth_reducer";
import Header from "./Header";


class Sign_inContainer extends React.Component {

    componentWillMount() {
            this.props.getUserApi();
    }

    render() {
        return (
            <>
                <Header {...this.props} logoutApi={this.props.logoutApi}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    user:state.authReducer,
    isAuth:state.authReducer.isAuth
}};

export default connect(mapStateToProps, {
    getUserApi:getUserThunk,
    logoutApi:logoutThunk,
})(Sign_inContainer);