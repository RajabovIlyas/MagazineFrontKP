import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import ChangeUser from "./ChangeUser";
import {withAuthRedirect} from "../../../../../hoc/withAuthRedirect";

class ChangeUserContainer extends React.Component{
    onFinish(values) {
        this.props.addNewComputer(values);
        //this.props.changeSaveComputer({id:this.id,...values});
    };

    onFinishFailed(values){

    }
    render() {
        return (
            <>
                <ChangeUser {...this.props} onFinish={this.onFinish.bind(this)}
                            onFinishFailed={this.onFinishFailed.bind(this)}/>
            </>
        )
    }
}



const mapStateToProps = (state) => {
    return{

    }
};

export default compose(
    withAuthRedirect,
    connect(null, {

    })
)
(ChangeUserContainer);
