import { combineReducers } from 'redux'

import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

import authReducer from './authReducer'
import chatsReducer from './chatsReducer'


export default combineReducers({
    // combine reducers here
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer,
    chats: chatsReducer,
})