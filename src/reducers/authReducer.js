const initState = {}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            console.log('Signup success!')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_FAILURE':
            console.log('Signup failed')
            return {
                ...state,
                authError: action.err.message
            }
        default: 
            return state;
    }
}

export default authReducer