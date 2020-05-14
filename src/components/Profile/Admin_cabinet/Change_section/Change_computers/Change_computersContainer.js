import React from "react";
import {connect} from "react-redux";
import Change_computers from "./Change_computers";
import {
    changeSizePage,
    deleteComputerThunk,
    getComputersThunk,
    selectPage
} from "../../../../../redux/computer_reducer";
import {changeComputerSelectThunk} from "../../../../../redux/computerAddAdmin_reducer";

class Change_computersContainer extends React.Component{
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
    deleteSelect(id,current=1,pageSize=10){
        this.props.deleteComputer(id,current,pageSize);
    }

    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    selectChange=(values)=>{
        this.props.changeComputerSelect(values);
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    render() {
        return (
            <>
                <Change_computers {...this.props} selectPageNow={this.selectPageNow.bind(this)}
                                  changePageSizeNow={this.changePageSizeNow.bind(this)}
                                  showDrawer={this.showDrawer.bind(this)} onClose={this.onClose.bind(this)}
                   state={this.state} selectChange={this.selectChange.bind(this)}
                                  deleteComputer={this.deleteSelect.bind(this)}/>
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
    changeComputerSelect:changeComputerSelectThunk,
    selectPage,
    changeSizePage,
    getComputers:getComputersThunk,
    deleteComputer:deleteComputerThunk,
})(Change_computersContainer);