export const SET_APP_STATE = 'SET_APP_STATE';
export const APP_STATE_ERROR = 'APP_STATE_ERROR';
export const INIT = {};

function reducer(state = INIT, { type, payload }) {
    if (payload === null || typeof payload !== 'object') payload = {};

    switch (type) {
        case SET_APP_STATE:
            return payload;
        case APP_STATE_ERROR:
        default:
            return state;
    }
}

export default reducer;
