import {message} from "antd";
import {basketAPI, buyAPI, computerAPI} from "../api/api";

const SET_COMPUTER = 'SET_COMPUTER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    computers_section: {},
    pageSize: 10,
    isFetching: true
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

export const addCommentUserThunk=(values)=>dispatch=>{
    computerAPI.commentAdd(values.id,values.user)
        .then(data => {
            dispatch(getComputerThunk(values.id));
            message.success('Коменнтарий успешно добавлен');
        }, (error) => {
            message.warning('Ошибка в сохранении коментария');
        });
};

export const buyComputerThunk=(values)=>dispatch=>{
    buyAPI.addBuy(values)
         .then(data => {
             message.success('Покупка успешно выполнена');
         }, (error) => {
             message.warning('Ошибка в покупке продукции');
         });
};
export const addBasketComputerThunk=(values)=>dispatch=>{
    basketAPI.addBasket(values)
        .then(data => {
            message.success('Продукт успешно добавлен в корзину');
        }, (error) => {
            message.warning('Ошибка в добавлении в корзину');
        });
};

export default computerPageReducer;