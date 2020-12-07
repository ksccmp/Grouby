import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import { IUserInitState } from './userReducer';
import FriendReducer from './friendReducer';
import { IFriendInitState } from './friendReducer';

export interface IIndexReducer {
    UserReducer: IUserInitState;
    FriendReducer: IFriendInitState;
}

const IndexReducer = combineReducers({
    UserReducer,
    FriendReducer,
});

export default IndexReducer;
