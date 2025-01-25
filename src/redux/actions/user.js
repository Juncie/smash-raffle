import { createSelector } from '@reduxjs/toolkit';

class UserReduxClass {
    static select = createSelector(
        (state) => state.user,
        (user) => user,
    );
}

const UserRedux = new UserReduxClass();

export default UserRedux;
