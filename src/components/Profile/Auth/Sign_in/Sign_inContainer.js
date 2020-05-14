import React from "react";
import {connect} from "react-redux";
import Sign_in from "./Sign_in";
import {setAuthThunk} from "../../../../redux/auth_reducer";


class Sign_inContainer extends React.Component {
    onFinish(values) {
        this.props.setAuthApiPost(values.email, values.password, values.remember);
    };


    onFinishFailed(errorInfo) {
        debugger;
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <>
                <Sign_in {...this.props} onFinish={this.onFinish.bind(this)}
                         onFinishFailed={this.onFinishFailed.bind(this)}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth:state.authReducer.isAuth,
});

export default connect(mapStateToProps, {
    setAuthApiPost:setAuthThunk,
})(Sign_inContainer);