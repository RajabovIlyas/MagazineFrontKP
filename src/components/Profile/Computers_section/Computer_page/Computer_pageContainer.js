import React from "react";
import {connect} from "react-redux";
import Computer_page from "./Computer_page";
import {withRouter} from "react-router-dom";
import {getComputerThunk, } from "../../../../redux/computerPage_reducer";


class Computer_pageContainer extends React.Component{
    componentDidMount() {
        this.props.getComputer(this.props.match.params.id);
    }

    render() {
        return (
            <>
                <Computer_page {...this.props} computers_section={this.props.computers_section}/>
            </>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        computers_section: state.computerPage.computers_section,
    }
};

export default connect(mapStateToProps, {
    getComputer:getComputerThunk,
})(withRouter(Computer_pageContainer));