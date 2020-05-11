const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login success!')
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_FAILURE':
            console.log('Login failed')
            return {
                ...state,
                authError: 'Login failed'
            }
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