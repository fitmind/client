import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { ServerActions, setCustomerUserAction, UserLoginActionInterface } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiLoginCustomerUser, apiGetUserMe } from '../../api';
import { CustomerUserResponse } from '../../../interfaces/responses/customer-user-response';
import CONFIG from '../../../config/config';
import { NotificationInterface, NotificationType } from '../../../interfaces/Notification.interface';
import { CustomerLoginResponse } from '../../../interfaces/responses/customer-login-response';

export const userLoginPositiveNotification: NotificationInterface = {
    type: NotificationType.positive,
    body: `Welcome`,
};
export const userLoginFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Could not login with those details',
};
export const userDashboardFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Error retrieving the dashboard',
};

export function* loginUserSaga(action: UserLoginActionInterface) {
    yield put(setLoadingTrue());
    try {
        const loginResponse: CustomerLoginResponse = yield call(apiLoginCustomerUser, action);
        if (loginResponse) {
            try {
                const userResponse: CustomerUserResponse = yield call(apiGetUserMe);
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
