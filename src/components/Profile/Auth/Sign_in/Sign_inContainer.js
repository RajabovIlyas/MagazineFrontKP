import React from "react";
import {connect} from "react-redux";
import Sign_in from "./Sign_in";
import {setAuthUserDataAction} from "../../../../redux/auth_reducer";
import {message} from "antd";
import {authAPI} from "../../../../api/api";


class Sign_inContainer extends React.Component {
    onFinish(values) {

        authAPI.sing_in_post(values.email,values.password,values.remember)
            .then(data => {
                message.success("Авторизация прошла успешно");
                this.props.setAuthUserData(data);
            }, (error) => {
                message.error(error.response.data.message);
            });
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
    setAuthUserData: setAuthUserDataAction,
})(Sign_inContainer);