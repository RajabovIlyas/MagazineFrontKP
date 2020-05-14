import {message} from "antd";
import {computerAPI} from "../api/api";
import {getComputersThunk} from "./computer_reducer";

const CHANGE_NEW_COMPUTER = 'CHANGE_NEW_COMPUTER';
const ADD_COMPUTER = 'ADD_COMPUTER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let computerChangeDelete = (computers_new_data) => {
    computers_new_data.name = '';
    computers_new_data.rom = '';
    computers_new_data.ram = '';
    computers_new_data.video_card = '';
    computers_new_data.cpu = '';
    computers_new_data.manufacturer = '';
    computers_new_data.price = 0;
    return computers_new_data;
};

let initialState = {
    computers_new_data: {
        _id:'',
        name: '',
        rom: '',
        ram: '',
        video_card: '',
        cpu: '',
        manufacturer: '',
        img: 'https://cooler.by/images/computer_case/preview/35/aerocool-v3x_1.jpg',
        price: 0
    },
    isFetching: true
};



const computerAddAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPUTER: {
            return {...initialState};
        }
        case CHANGE_NEW_COMPUTER:{
            return {...state,computers_new_data: action.data};
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
};

export const AddComputerAction = () => ({type: ADD_COMPUTER});
export const updateNewComputerAction = (data_change) => ({type: CHANGE_NEW_COMPUTER, data: data_change});
export const toggleIsFetchingCA = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const addComputerThunk = (state) => dispatch => {
        dispatch(AddComputerAction);
        computerAPI.addComputer(state)
            .then(data => {
                dispatch(AddComputerAction);
                message.success('Данные успешно сохранены');
                dispatch(getComputersThunk(1,10));
            }, (err) => {
                    message.error('Ошибка в сохнанении данных');
            });
};
export const addComputerSelectThunk=()=>dispatch=>{
    dispatch(AddComputerAction());
};

export const changeComputerSelectThunk=(state)=>dispatch=>{
    dispatch(updateNewComputerAction(state));
};

export const changeSaveComputerThunk=(data)=>dispatch=>{
    computerAPI.changeComputer(data)
        .then(data=>{
            message.success("Данные успешно изменены");
            dispatch(getComputersThunk(1,10));})
        .catch(err=>message.error("Данные не удалось изменить"));
};

export default computerAddAdminReducer;