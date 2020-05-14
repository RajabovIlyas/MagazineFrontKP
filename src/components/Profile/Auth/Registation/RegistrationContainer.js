import React from "react";
import Registration from "./Registration";
import {connect} from "react-redux";
import {setRegistrationThunk} from "../../../../redux/auth_reducer";

class RegistrationContainer extends React.Component{
    onFinish(values) {
        this.props.setRegistrationApi(values);
    };

    onFinishFailed(errorInfo) {
        debugger;
        console.log('Failed:', errorInfo);
    };

    render() {
        return(
            <>
                <Registration {...this.props} onFinish={this.onFinish.bind(this)}
                              onFinishFailed={this.onFinishFailed.bind(this)}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        computers_new_data: state.computer_add.computers_new_data
    }
};

export default connect(mapStateToProps, {
    setRegistrationApi:setRegistrationThunk
    })(RegistrationContainer);