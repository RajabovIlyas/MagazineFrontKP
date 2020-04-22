import React from "react";
import Add_computers from "./Add_computers";
import {connect} from "react-redux";
import {addComputerThunk, updateNewComputerAction} from "../../../../../redux/computerAddAdmin_reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../../hoc/withAuthRedirect";

class Add_computersContainer extends React.Component{
    state = {
        name: React.createRef(),
        rom: React.createRef(),
        ram: React.createRef(),
        video_card: React.createRef(),
        cpu: React.createRef(),
        manufacturer: React.createRef(),
        img: React.createRef(),
        price: React.createRef(),
    };

    change () {
        let data_change = {
            name: this.state.name.current.value,
            rom: this.state.rom.current.value,
            ram: this.state.ram.current.value,
            video_card: this.state.video_card.current.value,
            cpu: this.state.cpu.current.value,
            manufacturer: this.state.manufacturer.current.value,
            img: this.state.img.current.value,
            price: this.state.price.current.value,
        };

        this.props.updateNewComputer(data_change);
    };

    render() {
        return (
            <>
                <Add_computers {...this.props} change={this.change.bind(this)} state={this.state}/>
            </>
        )
    }
}



const mapStateToProps = (state) => {
    return{
        computers_new_data: state.computer_add.computers_new_data
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
