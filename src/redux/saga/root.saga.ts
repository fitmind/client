import { all } from 'redux-saga/effects';
import { watchCustomerDashboardSaga } from './customer-dashboard/customer-dashboard.saga';
import { watchLoginUserSaga } from './customer-login/customer-login.saga';
import { watchLogoutUserSaga } from './customer-logout/customer-logout.saga';
import { watchProfileUpdateUserSaga } from './customer-profile-update/customer-profile-update.saga';
import { watchSignUpUserSaga } from './customer-signup/customer-signup.saga';
import { watchCustomerUserSaga } from './customer-user/customer-user.saga';
import { watchExpertDashboardSaga } from './expert-dashboard/expert-dashboard.saga';
import { watchLoginExpertSaga } from './expert-login/expert-login.saga';
import { watchLogoutExpertSaga } from './expert-logout/expert-logout.saga';
import { watchProfileUpdateExpertSaga } from './expert-profile-update/expert-profile-update.saga';
import { watchSignUpExpertSaga } from './expert-signup/expert-signup.saga';
import { watchExpertUserSaga } from './expert-user/expert-user.saga';

export function* rootSaga() {
    yield all([
        watchLoginUserSaga(),
        watchLogoutUserSaga(),
        watchCustomerDashboardSaga(),
        watchSignUpUserSaga(),
        watchCustomerUserSaga(),
        watchProfileUpdateUserSaga(),
        watchLoginExpertSaga(),
        watchLogoutExpertSaga(),
        watchExpertDashboardSaga(),
        watchExpertUserSaga(),
        watchSignUpExpertSaga(),
        watchProfileUpdateExpertSaga(),
    ]);
}
