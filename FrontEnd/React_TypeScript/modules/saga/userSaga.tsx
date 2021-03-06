import * as actions from '../actions';
import axios from '../../api/axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { goMainHome } from '../../api/common';

function* userSelectByUserIdSaga(action: actions.IuserSelectByUserIdAction) {
    try {
        const res = yield call([axios, 'get'], '/user/notsign/selectByUserId', {
            params: {
                userId: action.payload.userId,
                userPassword: action.payload.userPassword,
            },
        });

        if (res.data.success) {
            yield put(actions.userSetUserAction(res.data.data));
            localStorage.userToken = res.headers['user-token'];
            goMainHome();
        } else {
            alert('정보를 확인해주세요.');
        }
    } catch (e) {
        alert(e);
    }
}

const userSaga = [takeEvery(actions.userSelectByUserId, userSelectByUserIdSaga)];

export default userSaga;
