import { all } from 'redux-saga/effects';
import { watchLogoutUserSaga } from './customer-logout/customer-logout.saga';
import { watchLoginUserSaga } from './customer-login/customer-login.saga';
import { watchCustomerDashboardSaga } from './customer-dashboard/customer-dashboard.saga';

export function* rootSaga() {
    yield all([watchLoginUserSaga(), watchLogoutUserSaga(), watchCustomerDashboardSaga()]);
}
