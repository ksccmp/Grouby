import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import { IUserInitState } from './userReducer';

export interface IIndexReducer {
    UserReducer: IUserInitState;
}

const IndexReducer = combineReducers({
    UserReducer,
});

export default IndexReducer;
