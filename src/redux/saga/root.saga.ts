import { all } from 'redux-saga/effects';
import { watchLogoutUserSaga } from './customer-logout/customer-logout.saga';
import { watchLoginUserSaga } from './customer-login/customer-login.saga';
import { watchSignUpUserSaga } from './customer-signup/customer-signup.saga';

export function* rootSaga() {
    yield all([watchLoginUserSaga(), watchLogoutUserSaga(), watchSignUpUserSaga()]);
}
