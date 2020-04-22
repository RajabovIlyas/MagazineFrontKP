import {applyMiddleware, combineReducers, createStore} from "redux";
import computerReducer from "./computer_reducer";
import computerAddAdminReducer from "./computerAddAdmin_reducer";
import computerPageReducer from "./computerPage_reducer";
import authReducer from "./auth_reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers=combineReducers(
    {computers_data:computerReducer,
        computer_add:computerAddAdminReducer,
        computerPage:computerPageReducer,
        auth:authReducer,
        form: formReducer});

let store=createStore(reducers,applyMiddleware(thunk));

export default store;

window.store=store;