export const SIGNUP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGN_UP_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_FETCH = 'LOGIN_FETCH';
export const LOGIN_FETCH_FAILURE = 'LOGIN_FETCH_FAILURE';

export const logInUser = (input) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            input[0],
            input[1]
        ).then((response) => {
            dispatch({ type: LOGIN_SUCCESS })
        }).catch(err => {
            dispatch({ type: LOGIN_FAILURE, err })
        })
    }
}

export const signUpUser = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser[2],
            newUser[3]
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                name: newUser[0],
                description: '',
                age: newUser[1],
                email: newUser[2],
                pics: [],
                matchings: [],
                misMatchings: [],
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

export const logOutUser = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: LOGOUT_SUCCESS })
        })
    }
}
