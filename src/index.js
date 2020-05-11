import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import firebase from './firebase';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider , getFirebase } from 'react-redux-firebase';

import rootReducer from './reducers'
import App from './App';
import './index.scss';

const config = {
  apiKey: "AIzaSyDQHwzyIOmrS-d0GJJoOB78QOD9iKs1-T4",
  authDomain: "dm2518-project-matching.firebaseapp.com",
  databaseURL: "https://dm2518-project-matching.firebaseio.com",
  projectId: "dm2518-project-matching",
  storageBucket: "dm2518-project-matching.appspot.com",
  messagingSenderId: "752684525992",
  appId: "1:752684525992:web:7cec7ffa7210049f45159d",
  measurementId: "G-Q7P4XSH56P"
};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase)
  )
);

const rrfProps = {
  firebase,
  config: config,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>, document.getElementById('root'));