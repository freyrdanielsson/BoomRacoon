import { SET_FUNCTION } from '../actions/header';

const initialState = {
    cb: () => { },
    active: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FUNCTION:
            return {
                ...state,
                cb: action.cb,
                active: action.active,
            }
        default:
            return state;
    }
}