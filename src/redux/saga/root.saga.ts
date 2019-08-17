import { all, fork } from 'redux-saga/effects';
import customerLogoutSaga from './customer-logout/customer-logout.saga';
import customerLoginSaga from './customer-login/customer-login';

export function* rootSaga() {
    yield all([fork(customerLoginSaga), fork(customerLogoutSaga)]);
}
