const initState = {
    chatList: []
}

const chatsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return state
        case 'SEND_MESSAGE_FAILURE':
            return {
                ...state,
                err: null
            }
        case 'REMOVE_MESSAGE':
            return state
        case 'REMOVE_CHAT':
            return state
        case 'FETCH_CHATS':
            console.log('FETCH CHATS REDUCER');
            return {
                ...state,
                chatList: action.payload
            }
        case 'FETCH_CHATS_FAILURE':
            return {
                ...state,
                err: null
            }
        default:
            return state
    }
}

export default chatsReducer