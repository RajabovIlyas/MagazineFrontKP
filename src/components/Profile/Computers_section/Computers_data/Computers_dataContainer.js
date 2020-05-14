import React from "react";
import {connect} from "react-redux";
import Computers_data from "./Computers_data";
import {changeSizePage, getComputersThunk, selectPage} from "../../../../redux/computer_reducer";

class Computers_dataContainer extends React.Component{
    componentDidMount() {
        this.props.getComputers(this.props.page,this.props.pageSize);
    }

    selectPageNow(current){
        this.props.selectPage(current);
        this.props.getComputers(current,this.props.pageSize);
    }
    changePageSizeNow(current,pageSize){
        this.props.changeSizePage(1,pageSize);
        this.props.getComputers(1,pageSize);
    }

    render() {
        return (
            <>
                <Computers_data {...this.props} selectPageNow={this.selectPageNow.bind(this)}
                                changePageSizeNow={this.changePageSizeNow.bind(this)}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computers_section: state.computers_data.computers_section,
        quantity: state.computers_data.quantity,
        page: state.computers_data.page,
        pageSize: state.computers_data.pageSize,
    }
};

export default connect(mapStateToProps, {
    selectPage,
    changeSizePage,
    getComputers:getComputersThunk,
})(Computers_dataContainer);