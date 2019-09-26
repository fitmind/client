import { all } from 'redux-saga/effects';
import { watchLogoutUserSaga } from './flows/customer-logout/customer-logout.saga';
import { watchSignUpUserSaga } from '../ecosystems/customer-user/customer-register/customer-register.saga';
import { watchLoginUserSaga } from '../ecosystems/customer-user/customer-login/customer-login.saga';
import { watchFetchCustomerUser } from '../ecosystems/customer-user/customer-dashboard/customer-dashboard.saga';
import { watchExpertLoginSaga } from '../ecosystems/expert-user/expert-login/expert-login.saga';
import { watchRegisterExpertSaga } from '../ecosystems/expert-user/expert-register/expert-register.saga';

export function* rootSaga() {
    yield all([
        // user
        watchLoginUserSaga(),
        watchLogoutUserSaga(),
        watchSignUpUserSaga(),
        watchFetchCustomerUser(),

        // expert
        watchExpertLoginSaga(),
        watchRegisterExpertSaga(),
    ]);
}
