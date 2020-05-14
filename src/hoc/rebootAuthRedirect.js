import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
    }
};

export const rebootAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {


        render() {
            if(!this.props.isAuth){

            }
            return <Component {...this.props}/>
        }
    }




    return connect(mapStateToPropsForRedirect,{

    })(RedirectComponent);
};