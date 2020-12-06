import { all } from 'redux-saga/effects';
import UserSaga from './userSaga';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* indexSaga() {
    yield all([...UserSaga]);
}

export default indexSaga;
