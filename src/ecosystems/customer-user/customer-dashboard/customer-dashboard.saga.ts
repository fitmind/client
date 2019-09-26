import { call, put, takeEvery } from 'redux-saga/effects';
import { serverActions } from '../../../redux/actions/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../../redux/actions/ui.actions';
import { NotificationType } from '../../../interfaces/notification';
import { createNotification } from '../../../utils/create-notification';
import { setCustomerUserAction } from './customer-dashboard.actions';
import { push } from 'connected-react-router';
import CONFIG from '../../../config/config';

const API_URL = process.env.REACT_APP_SERVER_URL;

export const userFetchFailedNotification = createNotification(
    NotificationType.positive,
    'Could not fetch the dashboard data',
);
export const notAuthorizedNotification = createNotification(
    NotificationType.positive,
    'You need to login to view this page',
);

const mode = 'cors';
const credentials = 'include';

export async function apiGetuser() {
    return await fetch(`${API_URL}/user/me`, {
        method: 'get',
        mode,
        credentials,
        headers: { Accept: 'application/json' },
    });
}

export function* fetchCustomerUser() {
    yield put(setLoadingTrue());
    try {
        const fetchUserRequest = yield call(apiGetuser);
        const status = fetchUserRequest.status;
        if (status === 200) {
            const user = yield fetchUserRequest.json();
            yield put(setCustomerUserAction(user));
        }
        if (status === 401) {
            yield put(setNotification(notAuthorizedNotification));
            yield push(CONFIG.routes.customerLogin);
        }
    } catch (e) {
        yield put(setNotification(userFetchFailedNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchFetchCustomerUser() {
    yield takeEvery(serverActions.GET_CUSTOMER_USER, fetchCustomerUser);
}
