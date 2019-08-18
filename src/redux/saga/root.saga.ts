import { all } from 'redux-saga/effects';
import { watchLogoutUserSaga } from './customer-logout/customer-logout.saga';
import { watchLoginUserSaga } from './customer-login/customer-login.saga';

export function* rootSaga() {
    yield all([watchLoginUserSaga(), watchLogoutUserSaga()]);
}
