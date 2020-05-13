export const SET_FUNCTION = 'SET_FUNCTION';

export function setFunction(cb, active) {
    return {
        type: SET_FUNCTION,
        cb,
        active
    }
}