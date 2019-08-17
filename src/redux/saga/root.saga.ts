import { all } from 'redux-saga/effects';
import { watchLogoutUser } from './customer-logout/customer-logout.saga';
import { watchLoginUserSaga } from './customer-login/customer-login';

export function* rootSaga() {
    yield all([watchLoginUserSaga(), watchLogoutUser()]);
}
