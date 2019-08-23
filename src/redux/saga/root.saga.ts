import { all } from 'redux-saga/effects';
import { watchLogoutUserSaga } from './customer-logout/customer-logout.saga';
import { watchLoginUserSaga } from './customer-login/customer-login.saga';
import { watchCustomerDashboardSaga } from './customer-dashboard/customer-dashboard.saga';
import { watchSignUpUserSaga } from './customer-signup/customer-signup.saga';
import { watchCustomerUserSaga } from './customer-user/customer-user.saga';
import { watchProfileUpdateUserSaga } from './customer-profile-update/customer-profile-update.saga';
import { watchSignUpExpertSaga } from './expert-signup/expert-signup.saga';

export function* rootSaga() {
    yield all([
        watchLoginUserSaga(),
        watchLogoutUserSaga(),
        watchCustomerDashboardSaga(),
        watchSignUpUserSaga(),
        watchCustomerUserSaga(),
        watchProfileUpdateUserSaga(),
        watchSignUpExpertSaga(),
    ]);
}
