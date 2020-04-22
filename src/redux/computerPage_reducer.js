import {message} from "antd";
import {computerAPI} from "../api/api";

const SET_COMPUTER = 'SET_COMPUTER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    computers_section: {},
    pageSize: 10,
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

const computerPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPUTER: {
            return {...state, computers_section: action.computers_section}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

    return state;
};
export const setComputerAction = (computers_section) => ({type: SET_COMPUTER, computers_section});
export const toggleIsFetchingCA = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getComputerThunk = (id) => dispatch => {
    dispatch(toggleIsFetchingCA(true));
    computerAPI.getComputer(id)
        .then(data => {
            dispatch(setComputerAction(data.computers_section));
            dispatch(toggleIsFetchingCA(false));
        }, (error) => {
            dispatch(toggleIsFetchingCA(false));
        });
};

export default computerPageReducer;