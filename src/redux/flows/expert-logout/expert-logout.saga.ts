import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui.actions';
import CONFIG from '../../../config/config';
import { NotificationType } from '../../../interfaces/notification';
import { createNotification } from '../../../utils/create-notification';
import { serverActions } from '../../actions/server.actions';
import { deleteExpertUser } from './expert-logout-action';

const API_URL = process.env.REACT_APP_SERVER_URL;

export const expertLogoutNegativeNotification = createNotification(NotificationType.negative, `Could not logout`);

export async function apiLogoutExpertUser() {
    return await fetch(`${API_URL}/expert/logout`, {
        method: 'post',
        mode: 'cors',
        credentials: 'include',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
}

export function* logoutExpertSaga() {
    yield put(setLoadingTrue());
    try {
        const response = yield call(apiLogoutExpertUser);
        const status = response.status;
        if (status === 200) {
            yield put(deleteExpertUser());
            yield put(push(CONFIG.routes.expertLogin));
        } else {
            yield put(setNotification(expertLogoutNegativeNotification));
        }
    } catch (logoutUserError) {
        yield put(setNotification(expertLogoutNegativeNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchLogoutExpertSaga() {
    yield takeEvery(serverActions.LOGOUT_EXPERT, logoutExpertSaga);
}
