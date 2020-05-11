import api from '../api';

export const SIGNUP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGN_UP_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_LOGOUT = 'LOGIN_LOGOUT';
export const LOGIN_FETCH = 'LOGIN_FETCH';
export const LOGIN_FETCH_FAILURE = 'LOGIN_FETCH_FAILURE';


export const signUpUser = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        console.log("trying to create acc");
        firebase.auth().createUserWithEmailAndPassword(
            newUser[2],
            newUser[3]
        ).then((response) => {
            console.log(response)
            return firestore.collection('users').doc(response.user.uid).set({
                name: newUser[0],
                age: newUser[1],
                email: newUser[2],
                pics: [],
                matchings: [],
                interests: [],
                conversations: []
            })
        }).then(() => {
            dispatch({ type: SIGNUP_SUCCESS })
        }).catch(err => {
            dispatch({ type: SIGNUP_FAILURE, err })
        })
    }
}

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

export const logInUser = (input) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        console.log("trying to login");
        firebase.auth().signInWithEmailAndPassword(
            input[0],
            input[1]
        ).then((response) => {
            console.log(response);
            dispatch({ type: LOGIN_SUCCESS })
        }).catch(err => {
            dispatch({ type: LOGIN_FAILURE, err })
        })
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        // do logout logic and dispach logout action
    }
}