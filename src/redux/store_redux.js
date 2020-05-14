import {applyMiddleware, combineReducers, createStore} from "redux";
import computerReducer from "./computer_reducer";
import computerAddAdminReducer from "./computerAddAdmin_reducer";
import computerPageReducer from "./computerPage_reducer";
import authReducer from "./auth_reducer";
import thunk from "redux-thunk";
import basketReducer from "./basket_reducer";
import buyReducer from "./buy_reducer";

let reducers = combineReducers(
    {
        computers_data: computerReducer,
        computer_add: computerAddAdminReducer,
        computerPage: computerPageReducer,
        authReducer,
        basketPage: basketReducer,
        buyPage: buyReducer,

    });

let store = createStore(reducers, applyMiddleware(thunk));

export default store;

window.store = store;