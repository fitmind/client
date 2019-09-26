import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui.actions';
import CONFIG from '../../../config/config';
import { NotificationType } from '../../../interfaces/notification';
import { createNotification } from '../../../utils/create-notification';
import { serverActions } from '../../actions/server.actions';
import { deleteCustomerUser } from './customer-logout-action';

const API_URL = process.env.REACT_APP_SERVER_URL;

export const userLogoutNegativeNotification = createNotification(NotificationType.negative, `Could not logout`);

export async function apiLogoutCustomerUser() {
    return await fetch(`${API_URL}/user/logout`, {
        method: 'post',
        mode: 'cors',
        credentials: 'include',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
}

export function* logoutUserSaga() {
    yield put(setLoadingTrue());
    try {
        const response = yield call(apiLogoutCustomerUser);
        const status = response.status;
        if (status === 200) {
            yield put(deleteCustomerUser());
            yield put(push(CONFIG.routes.customerLogin));
        } else {
            yield put(setNotification(userLogoutNegativeNotification));
        }
    } catch (logoutUserError) {
        yield put(setNotification(userLogoutNegativeNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchLogoutUserSaga() {
    yield takeEvery(serverActions.LOGOUT_USER, logoutUserSaga);
}
