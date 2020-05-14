import {message} from "antd";
import {authAPI} from "../api/api";
import {Redirect} from "react-router-dom";
import React from "react";
import * as axios from "axios";

const SET_TOKEN_DATA = 'SET_TOKEN_DATA';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGOUT = 'SET_LOGOUT';

let initialState = {
    _id:null,
    accessToken: null,
    refreshToken: null,
    name: null,
    surname: null,
    address: null,
    isAuth: false,
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        case SET_LOGOUT: {
            return {...state, isAuth: false}
        }
        default:
            return state;
    }
};
export const setAuthUserDataAction = (data) => ({type: SET_TOKEN_DATA, data});
export const setUserDataAction = (data) => ({type: SET_USER_DATA, data});
export const setLogOutAction = (data) => ({type:SET_LOGOUT,data});

export const setAuthThunk = (email, password, remember) => dispatch => {
    authAPI.sing_in_post(email, password, remember)
        .then(data => {
            localStorage.setItem('login', JSON.stringify({
                login: true,
                token: data.accessToken
            }));
            dispatch(setAuthUserDataAction(data));
            dispatch(getUserThunk(data.accessToken));
            message.success("Авторизация прошла успешно");
        }).catch((error) => {
        message.error("Неправильный введен логин или пароль");
    });
};

export const getUserThunk = () => dispatch => {
    const accessToken = JSON.parse(localStorage.getItem('login'));
    if (accessToken) {
        authAPI.authMe(accessToken.token)
            .then(data => {
                dispatch(setUserDataAction(data));
                axios.defaults.headers.common['Authorization'] ='Bearer '+
                    accessToken.token;
            }, (error) => {
                localStorage.removeItem('login');
            });
    }
};

export const logoutThunk = () => dispatch => {
    const accessToken = JSON.parse(localStorage.getItem('login'));
    if (accessToken) {
        authAPI.logout(accessToken.token)
            .then(data => {
                dispatch(setLogOutAction({accessToken: null,
                    refreshToken: null,
                    name: null,
                    surname: null,
                    address: null,}));
                localStorage.removeItem('login');
            }, (error) => {

            });
    }
};

export const setRegistrationThunk = (data) => dispatch => {
    authAPI.registration_post(data)
        .then(data => {
            debugger
            message.success("Регистрация прошла успешно");
            return <Redirect to={'/sing_in'}/>
        }).catch((error) => {
            console.log(error);
        debugger
        message.error("Такой логин уже существует прошу его поменять");
    });
};

export default authReducer;