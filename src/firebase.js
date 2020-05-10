import firebase from 'firebase';
import 'firebase/firestore';

/*
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
*/

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

firebase.initializeApp(config);
firebase.firestore();
console.log("Initialized");

export default firebase;