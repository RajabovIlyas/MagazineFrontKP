import React from "react";
import Add_computers from "./Add_computers";
import {connect} from "react-redux";
import {addComputerThunk, updateNewComputerAction} from "../../../../../redux/computerAddAdmin_reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../../hoc/withAuthRedirect";

class Add_computersContainer extends React.Component{
    onFinish(values) {
        this.props.addNewComputer(values);
        //this.props.changeSaveComputer({id:this.id,...values});
    };

    onFinishFailed(values){

    }
    render() {
        return (
            <>
                <Add_computers {...this.props} onFinish={this.onFinish.bind(this)}
                               onFinishFailed={this.onFinishFailed.bind(this)}/>
            </>
        )
    }
}



const mapStateToProps = (state) => {
    return{
        computer: state.computer_add.computers_new_data
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        addNewComputer:addComputerThunk,
        updateNewComputer:updateNewComputerAction
    })
)
(Add_computersContainer);
