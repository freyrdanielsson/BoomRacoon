export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const REMOVE_CHAT = 'REMOVE_CHAT';
export const FETCH_CHATS = 'FETCH_CHATS';
export const FETCH_CHATS_FAILURE = 'FETCH_CHATS_FAILURE';
export const UPDATE_CHATS = 'UPDATE_CHATS';

export const fetchChats = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const uid = firebase.auth().currentUser.uid;
        let queryOne, queryTwo = null;
        let documents = [];
        queryOne = firestore.collection('conversations').where('user_uid_one', '==', uid)
        queryOne.get()
        .then((snapshot) => {
            let queryOneResult = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                data.chatId = id;
                documents.push(id);
                return data
            });
            queryTwo = firestore.collection('conversations').where('user_uid_two', '==', uid)
            return queryTwo.get()
                .then((snapshot) => {
                    let queryTwoResult = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        data.chatId = id;
                        documents.push(id);
                        return data
                    });
                    let concat = queryOneResult.concat(queryTwoResult);
                    
                    firestore.collection('users').get()
                    .then((snapshot) => {
                        snapshot.docs.map(doc => {
                            let user = doc.data();
                            let userId = doc.id;
                            for(let k = 0; k < concat.length; k++) {
                                if ((concat[k].user_uid_one === userId || concat[k].user_uid_two === userId) && (userId !== uid)) {
                                    concat[k].otherUser = {name: user.name, url: user.pics[0].url};
                                }
                            }
                            return ""
                        })
                        for(let i = 0; i < documents.length; i++) {
                            firestore.collection('conversations').doc(documents[i])
                            .onSnapshot((doc) => {
                                let data = doc.data();
                                const id = doc.id;
                                data.chatId = id;
                                let query = null;
                                if (uid === data.user_uid_one) {
                                    query = firestore.collection('users').doc(data.user_uid_two)
                                } else if (uid === data.user_uid_two) {
                                    query = firestore.collection('users').doc(data.user_uid_one)
                                }
                                query.get()
                                .then((doc) => {
                                    let user = doc.data();
                                    let userId = doc.id;
                                    if (data.user_uid_one === userId || data.user_uid_two === userId) {
                                        data.otherUser = {name: user.name, url: user.pics[0].url};
                                    }
                                }).then(() => {
                                    dispatch({ type: UPDATE_CHATS, payload: [data] });
                                })
                            })
                        }
                        dispatch({ type: FETCH_CHATS, payload: concat });
                    })
                })
        })
        .catch(err => {
            dispatch({ type: FETCH_CHATS_FAILURE, err })  
        })
    }
}

export const sendMessage = (conversationId, content) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const uid = firebase.auth().currentUser.uid;
        firestore.collection('conversations').doc(conversationId).update({
            messages: firestore.FieldValue.arrayUnion({
                content: content,
                sender_uid: uid,
                message_id: Math.floor(Math.random() * 100000000),
                time: firestore.Timestamp.now()
            })
        })
        .then(() => {
            dispatch({ type: SEND_MESSAGE })
        })
        .catch((err) => {
            dispatch({ type: SEND_MESSAGE_FAILURE, err })
        })
    }
}

export const removeMessage = (conversationId, messageIndex) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        let collectionRef = firestore.collection('conversations').doc(conversationId)
        collectionRef.get()
            .then(doc => {
                let data = doc.data();
                data.messages.splice(messageIndex, 1);
                return collectionRef.update({
                    messages: data.messages
                }).then(() => dispatch({ type: REMOVE_MESSAGE }))
            })
    }
}