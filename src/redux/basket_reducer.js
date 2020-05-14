import {message} from "antd";
import {basketAPI} from "../api/api";


const SET_BASKET='SET_BASKET';



let initialState = {
    basket:[],
};


const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BASKET: {
            return {...state, ...action.basket,}
        }
        default:
            return state;
    }
};

export const setBasketAction = (basket) => ({type: SET_BASKET, basket});

export const getBasketsThunk = (id) => dispatch => {
    basketAPI.getBasket(id)
        .then(data => {
            dispatch(setBasketAction(data));
        }, (error) => {
        });
};

export const deleteBasketsThunk = (id,idUser) => dispatch => {
    basketAPI.deleteBasket(id)
        .then(data => {
            message.success("Данные успешно удалены");
            dispatch(getBasketsThunk(idUser));
        }, (error) => {message.error("Данные не удалось удалить")
        });
};

export const buyBasketsThunk = (id,idUser) => dispatch => {
    basketAPI.buyBasket(id)
        .then(data => {
            message.success("Продукт успешно куплен");
            dispatch(getBasketsThunk(idUser));
        }, (error) => {message.error("Не удалось купить продукт")
        });
};



export default basketReducer;