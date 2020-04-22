import {message} from "antd";
import {computerAPI} from "../api/api";

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

let checkForEmptiness = (computers_new_data) => {
    if (computers_new_data.name === '' ||
        computers_new_data.rom === '' ||
        computers_new_data.ram === '' ||
        computers_new_data.video_card === '' ||
        computers_new_data.cpu === '' ||
        computers_new_data.manufacturer === '') {
        warning();
        return false;
    }
    return true;
};

let initialState = {
    computers_new_data: {
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


const success = () => {
    message.success('Данные успешно сохранены');
};

const error = () => {
    message.error('Ошибка в сохнанении данных');
};

const warning = () => {
    message.warning('Необходимо заполнить все ячейки');
};

const computerAddAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPUTER: {
            return {...initialState};
        }
        case CHANGE_NEW_COMPUTER: {
            let copyStates = {...state};
            copyStates.computers_new_data = {...action.data};
            return copyStates;
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
    if (checkForEmptiness(state)) {
        dispatch(toggleIsFetchingCA(true));
        dispatch(AddComputerAction);
        computerAPI.addComputer(state)
            .then(data => {
                success();
                dispatch(toggleIsFetchingCA(false));

            }, (err) => {
                error();
                dispatch(toggleIsFetchingCA(false));
            });
    }
};

export default computerAddAdminReducer;