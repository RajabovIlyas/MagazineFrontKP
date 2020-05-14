import React from "react";
import {connect} from "react-redux";
import Change_page_computer from "./Change_page_computer";
import {changeSaveComputerThunk} from "../../../../../../redux/computerAddAdmin_reducer";

class Change_page_computerContainer extends React.Component{
    id=this.props.computer._id;
    onFinish(values) {
        this.props.changeSaveComputer({id:this.id,...values});
    };

    onFinishFailed(values){

    }
    render() {
        return (
            <>
                <Change_page_computer  {...this.props} onFinish={this.onFinish.bind(this)}
                                       onFinishFailed={this.onFinishFailed.bind(this)} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.computer_add.computers_new_data,
    }
};

export default connect(mapStateToProps,{
    changeSaveComputer:changeSaveComputerThunk,
} )(Change_page_computerContainer);