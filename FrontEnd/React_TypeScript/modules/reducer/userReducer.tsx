import { IUser } from '../../api/interface';
import * as actions from '../actions';

export interface IUserInitState {
    user: IUser;
}

const userInitState: IUserInitState = {
    user: {
        userId: 'userId',
        userName: 'userName',
        userPassword: 'userPassword',
        userPhone: 'userPhone',
        regDate: 'regDate',
        modDate: 'modDate',
    },
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const UserReducer = (state = userInitState, action: actions.Iactions) => {
    switch (action.type) {
        default: {
            return {
                ...state,
            };
        }
    }
};

export default UserReducer;
