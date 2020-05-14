import {message} from "antd";
import {basketAPI, buyAPI, computerAPI} from "../api/api";


const SET_BUY='SET_BUY';



let initialState = {
    buy:[],
};


const buyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BUY: {
            return {...state, ...action.buy,}
        }
        default:
            return state;
    }
};

export const setBuyAction = (buy) => ({type: SET_BUY, buy});

export const getBuyThunk = (id) => dispatch => {
    buyAPI.getBuy(id)
        .then(data => {
            dispatch(setBuyAction(data));
        }, (error) => {
        });
};



export default buyReducer;