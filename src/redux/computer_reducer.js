import {message} from "antd";
import {computerAPI} from "../api/api";

const SET_COMPUTERS = 'SET_COMPUTERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SELECT_PAGE = 'SELECT_PAGE';
const CHANGE_SIZE_PAGE = 'CHANGE_SIZE_PAGE';
const DELETE_COMPUTER_ID='DELETE_COMPUTER_ID';

let initialState = {
    computers_section: [],
    page: 1,
    quantity: 1,
    pageSize: 10,
    isFetching: true
};

const computerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPUTERS: {
            return {
                ...state, computers_section: [...action.computers_section.computers_section],
                quantity: action.computers_section.quantity, page: action.computers_section.page
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SELECT_PAGE: {
            return {...state, page: action.page}
        }
        case CHANGE_SIZE_PAGE: {
            return {...state, pageSize: action.pageSize, page: action.page}
        }
        case DELETE_COMPUTER_ID:{
            for(let i=0;i<state.computers_section.length;i++){
                if(action.deleteId===state.computers_section[i]._id){
                    console.log(state.computers_section[i]._id)
                    delete state.computers_section[i]._id;
                    break
                }
            }
            return {...state};
        }
        default:
            return state;
    }
    return state;
};


export const setComputersAction = (computers_section) => ({type: SET_COMPUTERS, computers_section});
export const toggleIsFetchingCA = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const selectPage = (page) => ({type: SELECT_PAGE, page});
export const changeSizePage = (current, pageSize) => ({type: CHANGE_SIZE_PAGE, page: current, pageSize});
export const deleteComputerAction=(id)=>({type: DELETE_COMPUTER_ID, deleteId:id});

export const getComputersThunk = (page, pageSize) => dispatch => {
    dispatch(toggleIsFetchingCA(true));
    computerAPI.getComputers(page, pageSize)
        .then(data => {
            dispatch(setComputersAction(data));
            dispatch(toggleIsFetchingCA(false));
        }, (error) => {
            dispatch(toggleIsFetchingCA(false));
        });
};

export const deleteComputerThunk=(id,page=1, pageSize=10)=>dispatch=>{
    computerAPI.deleteComputer(id)
        .then(data=>{
            message.success("Данные успешно удалены");
            dispatch(getComputersThunk(page, pageSize))
        }).catch(err=>message.error("Данные не удалось удалить"));


};

export default computerReducer;