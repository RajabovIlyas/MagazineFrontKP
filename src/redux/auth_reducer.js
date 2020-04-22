import {message} from "antd";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    accessToken: null,
    refreshToken: null,
    isFetching: false,
    isAuth:false,
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

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }

        default:
            return state;
    }

    return state;
};
export const setAuthUserDataAction = (data) => ({type: SET_USER_DATA, data});

export default authReducer;