import React from "react";
import Registation from "./Registation";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        computers_new_data: state.computer_add.computers_new_data
    }
};

const RegistationContainer = connect(mapStateToProps, {
    })(Registation);


export default RegistationContainer;