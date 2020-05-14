import React from "react";
import {connect} from "react-redux";
import Computer_page from "./Computer_page";
import {withRouter} from "react-router-dom";
import {
    addBasketComputerThunk,
    addCommentUserThunk,
    buyComputerThunk,
    getComputerThunk,
} from "../../../../redux/computerPage_reducer";


class Computer_pageContainer extends React.Component{
    formRef = React.createRef();
    componentWillMount() {
        this.props.getComputer(this.props.match.params.id);
    }
    values(){
        return{
        idUser:this.props.user._id,
        nameUser:this.props.user.name,
        surnameUser:this.props.user.surname,
        addressUser:this.props.user.address,
        name: this.props.computers_section.name,
        price: this.props.computers_section.price,}
    };

    addComment(value){
        this.props.addCommentUser({id:this.props.match.params.id,
            user:{nameUser:this.props.user.name+' '+this.props.user.surname, ...value}});
        this.formRef.current.resetFields();
    }
    selectBuy(){
        this.props.buyComputer(this.values());
    }
    selectAddBasket(){
        this.props.addBasketComputer(this.values());
    }

    render() {
        return (
            <>
                <Computer_page {...this.props} computers_section={this.props.computers_section}
                               formRef={this.formRef} addComment={this.addComment.bind(this)}
                               selectBuy={this.selectBuy.bind(this)}
                               selectAddBasket={this.selectAddBasket.bind(this)}/>
            </>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        user:state.authReducer,
        computers_section: state.computerPage.computers_section,
    }
};

export default connect(mapStateToProps, {
    addCommentUser:addCommentUserThunk,
    getComputer:getComputerThunk,
    buyComputer:buyComputerThunk,
    addBasketComputer:addBasketComputerThunk,
})(withRouter(Computer_pageContainer));