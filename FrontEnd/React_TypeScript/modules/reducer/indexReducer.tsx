import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import { IUserInitState } from './userReducer';
import FriendReducer from './friendReducer';
import { IFriendInitState } from './friendReducer';
import GroupReducer from './groupReducer';
import { IGroupInitState } from './groupReducer';

export interface IIndexReducer {
    UserReducer: IUserInitState;
    FriendReducer: IFriendInitState;
    GroupReducer: IGroupInitState;
}

const IndexReducer = combineReducers({
    UserReducer,
    FriendReducer,
    GroupReducer,
});

export default IndexReducer;
