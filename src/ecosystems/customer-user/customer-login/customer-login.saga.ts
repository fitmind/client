import { setCustomerLoggedIn, UserLoginActionInterface } from './customer-login.actions';
import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { Notification, NotificationType } from '../../../interfaces/notification';
import { clearNotification, setLoadingFalse, setLoadingTrue, setNotification } from '../../../redux/actions/ui.actions';
import { createNotification } from '../../../utils/create-notification';
import CONFIG from '../../../config/config';
import { push } from 'connected-react-router';
import { serverActions } from '../../../redux/actions/server.actions';

const mode = 'cors';
const credentials = 'include';
const API_URL = process.env.REACT_APP_SERVER_URL;

export const userLoginPositiveNotification = createNotification(NotificationType.positive, 'Welcome :)');
export const userLoginFailedNotification = createNotification(
    NotificationType.negative,
    'Could not login with those details',
);
export const userWrongDetails = createNotification(NotificationType.negative, 'The information entered is invalid');
export const emailNotFound = createNotification(NotificationType.negative, 'Could not find user');
export const userDashboardFailedNotification: Notification = {
    type: NotificationType.negative,
    body: 'Error retrieving the dashboard',
};

export async function apiLoginCustomerUser({ email, password }: UserLoginActionInterface) {
    return await fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        mode,
        credentials,
        body: JSON.stringify({ email, password }),
    });
}

export function* loginUserSaga(action: UserLoginActionInterface) {
    yield put(setLoadingTrue());
    try {
        const loginResponse = yield call(apiLoginCustomerUser, action);
        const statusCode = loginResponse.status;
        if (statusCode === 400) {
            yield put(setNotification(userWrongDetails));
        }
        if (statusCode === 404) {
            yield put(setNotification(emailNotFound));
        }
        if (statusCode === 201) {
            try {
                yield put(setCustomerLoggedIn());
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
        if (process.env.NODE_ENV !== 'test') {
            yield delay(5000);
        }
        yield put(clearNotification());
    }
}

export function* watchLoginUserSaga() {
    yield takeEvery(serverActions.LOGIN_CUSTOMER_USER, loginUserSaga);
}
