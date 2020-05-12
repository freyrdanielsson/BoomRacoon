import api from '../api';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const REMOVE_CHAT = 'REMOVE_CHAT';
export const FETCH_CHATS = 'FETCH_CHATS';
export const FETCH_CHATS_FAILURE = 'FETCH_CHATS_FAILURE';

export const fetchChats = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        console.log("trying to fetch chats");
        const uid = firebase.auth().currentUser.uid;
        var queryOne = firestore.collection('conversations').where('user_uid_one', '==', uid).get()
        .then((snapshot) => {
            let queryOneResult = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                data.chatId = id;
                return data
            });
            return firestore.collection('conversations').where('user_uid_two', '==', uid).get()
                .then((snapshot) => {
                    let queryTwoResult = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        data.chatId = id;
                        return data
                    });
                    let concat = queryOneResult.concat(queryTwoResult);
                    console.log(concat);
                    dispatch({ type: FETCH_CHATS, payload: concat });
                })
        })
        .catch(err => {
            dispatch({ type: FETCH_CHATS_FAILURE, err })  
        })
    }
}