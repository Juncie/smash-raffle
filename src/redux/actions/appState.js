import { createSelector } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';
import { SET_APP_STATE } from '@/redux/reducers/appState';

class AppStateReduxClass {
    select = createSelector(
        (state) => state.appState,
        (appState) => appState,
    );

    update = (payload) => (dispatch, getState) => {
        const appState = cloneDeep(getState().appState);

        dispatch({
            type: SET_APP_STATE,
            payload: { ...appState, ...payload },
        });
    };

    set = (payload) => (dispatch, getState) => {
        dispatch({
            type: SET_APP_STATE,
            payload,
        });
    };

    reset = () => (dispatch, getState) => {
        dispatch({
            type: SET_APP_STATE,
            payload: {},
        });
    };
}

const AppStateRedux = new AppStateReduxClass();

export default AppStateRedux;
