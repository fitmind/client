import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { ServerActions, setCustomerUserAction, UserLoginActionInterface } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiGetUserDashboard, apiLoginCustomerUser } from '../../api';
import { CustomerUserResponse } from '../../../interfaces/responses/customer-user-response';
import CONFIG from '../../../config/config';
import { NotificationInterface } from '../../../interfaces/Notification.interface';

export const userLoginPositiveNotification: NotificationInterface = { type: 'positive', body: `Welcome` };
export const userLoginFailedNotification: NotificationInterface = {
    type: 'error',
    header: ``,
    body: 'Could not login with those details',
};
export const userDashboardFailedNotification: NotificationInterface = {
    type: 'error',
    header: ``,
    body: 'Error retrieving the dashboard',
};

export function* loginUserSaga(action: UserLoginActionInterface) {
    yield put(setLoadingTrue());
    try {
        const loginResponse = yield call(apiLoginCustomerUser, action);
        if (loginResponse) {
            try {
                const userResponse: CustomerUserResponse = yield call(apiGetUserDashboard);
                yield put(setCustomerUserAction(userResponse));
                yield put(push(CONFIG.routes.customerDashboard));
                yield put(setNotification(userLoginPositiveNotification));
            } catch (settingCustomerError) {
                yield put(setNotification(userDashboardFailedNotification));
            }
        }
    } catch (loginError) {
        yield put(setNotification(userLoginFailedNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchLoginUserSaga() {
    yield takeEvery(ServerActions.LOGIN_CUSTOMER_USER, loginUserSaga);
}
