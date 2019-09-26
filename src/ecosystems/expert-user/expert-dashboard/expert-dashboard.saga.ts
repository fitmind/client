import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { serverActions } from '../../../redux/actions/server.actions';
import { clearNotification, setLoadingFalse, setLoadingTrue, setNotification } from '../../../redux/actions/ui.actions';
import { NotificationType } from '../../../interfaces/notification';
import { createNotification } from '../../../utils/create-notification';
import { push } from 'connected-react-router';
import CONFIG from '../../../config/config';
import { ExpertUser } from '../../../interfaces/expert-user';
import { setExpertUserAction } from './expert-dashboard.actions';
import { OK, UNAUTHORIZED } from 'http-status-codes';

const API_URL = process.env.REACT_APP_SERVER_URL;

export const expertFetchFailedNotification = createNotification(
    NotificationType.positive,
    'Could not fetch the dashboard data',
);
export const notAuthorizedExpertPageNotification = createNotification(
    NotificationType.positive,
    'You need to login to view this page',
);

export async function apiGetExpert() {
    return await fetch(`${API_URL}/expert/me`, {
        method: 'get',
        mode: 'cors',
        credentials: 'include',
        headers: { Accept: 'application/json' },
    });
}

export function* getExpertMe() {
    yield put(setLoadingTrue());
    try {
        const fetchUserRequest = yield call(apiGetExpert);
        const status = fetchUserRequest.status;
        if (status === OK) {
            const expert: ExpertUser = yield fetchUserRequest.json();
            yield put(setExpertUserAction(expert));
        }
        if (status === UNAUTHORIZED) {
            yield put(setNotification(notAuthorizedExpertPageNotification));
            yield put(push(CONFIG.routes.expertLogin));
        }
    } catch (e) {
        yield put(setNotification(expertFetchFailedNotification));
    } finally {
        yield put(setLoadingFalse());
        if (process.env.NODE_ENV !== 'test') {
            yield delay(5000);
        }
        yield put(clearNotification());
    }
}

export function* watchGetExpertUser() {
    yield takeEvery(serverActions.GET_EXPERT_USER, getExpertMe);
}
