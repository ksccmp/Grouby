import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import { IUserInitState } from './userReducer';
import FriendReducer from './friendReducer';
import { IFriendInitState } from './friendReducer';
import GroupReducer from './groupReducer';
import { IGroupInitState } from './groupReducer';
import SpotReducer from './spotReducer';
import { ISpotInitState } from './spotReducer';

export interface IIndexReducer {
    UserReducer: IUserInitState;
    FriendReducer: IFriendInitState;
    GroupReducer: IGroupInitState;
    SpotReducer: ISpotInitState;
}

const IndexReducer = combineReducers({
    UserReducer,
    FriendReducer,
    GroupReducer,
    SpotReducer,
});

export default IndexReducer;
