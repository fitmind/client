import { all } from 'redux-saga/effects';
import { watchLogoutUserSaga } from '../flows/customer-logout/customer-logout.saga';
import { watchSignUpUserSaga } from '../../ecosystems/customer-register/customer-register.saga';
import { watchLoginUserSaga } from '../../ecosystems/customer-login/customer-login.saga';
import { watchFetchCustomerUser } from '../../ecosystems/customer-dashboard/customer-dashboard.saga';

export function* rootSaga() {
    yield all([
        // user
        watchLoginUserSaga(),
        watchLogoutUserSaga(),
        watchSignUpUserSaga(),
        watchFetchCustomerUser(),
    ]);
}
