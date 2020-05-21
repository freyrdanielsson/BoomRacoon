const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_FAILURE':
            return {
                ...state,
                authError: action.err.message
            }
        case 'LOGOUT_SUCCESS':
            return state
        default: 
            return state;
    }
}

export default authReducer