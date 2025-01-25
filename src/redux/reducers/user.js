import { cloneDeep } from 'lodash';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const USER_ERROR = 'USER_ERROR';
export const INIT = {};

function reducer(state = cloneDeep(INIT), { type, payload }) {
    switch (type) {
        case SET_CURRENT_USER:
            if (payload?.groups?.includes?.('admin')) payload.isAdmin = true;

            return payload;
        case LOGOUT:
            return {};
        case USER_ERROR:
        default:
            return state;
    }
}

export default reducer;
