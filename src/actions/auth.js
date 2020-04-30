import api from '../api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_LOGOUT = 'LOGIN_LOGOUT';
export const LOGIN_FETCH = 'LOGIN_FETCH';
export const LOGIN_FETCH_FAILURE = 'LOGIN_FETCH_FAILURE';

function requestLogin() {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        isFetchingProfile: false,
    }
}

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        user: user,
        message: null,
        isFetchingProfile: false,
    }
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isFetchingProfile: false,
        isAuthenticated: false,
        user: null,
        message
    }
}

function logout() {
    return {
        type: LOGIN_LOGOUT,
        isFetching: false,
        isFetchingProfile: false,
        isAuthenticated: false,
        user: null,
    }
}

export const loginUser = (username, password) => {
    return async (dispatch) => {
        // do login logic and dispach login actions
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        // do logout logic and dispach logout action
    }
}