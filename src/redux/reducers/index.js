import { combineReducers } from 'redux';

// Import reducers here
import appState from './appState';
import user from './user';

const rootReducer = combineReducers({
    user,
    appState,
});

export default rootReducer;
