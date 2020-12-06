import { IUser } from '../../api/interface';
import * as actions from '../actions';

export interface IUserInitState {
    user: IUser;
}

const userInitState: IUserInitState = {
    user: {
        userId: '',
        userName: '',
        userPassword: '',
        userPhone: '',
        regDate: '',
        modDate: '',
    },
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const UserReducer = (state = userInitState, action: actions.Iactions) => {
    switch (action.type) {
        // not saga
        case actions.userSetUser: {
            return {
                ...state,
                user: (action as actions.IuserSetUserAction).payload,
            };
        }

        // saga
        case actions.userSelectByUserId: {
            return {
                ...state,
                payload: (action as actions.IuserSelectByUserIdAction).payload,
            };
        }

        default: {
            return {
                ...state,
            };
        }
    }
};

export default UserReducer;
