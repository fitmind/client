import { call, put, takeEvery } from 'redux-saga/effects';
import { NotificationType } from '../../../interfaces/notification';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../../redux/actions/ui.actions';
import { createNotification } from '../../../utils/create-notification';
import CONFIG from '../../../config/config';
import { push } from 'connected-react-router';
import { serverActions } from '../../../redux/actions/server.actions';
import { ExpertLoginAction } from './expert-login.actions';
import { BAD_REQUEST, NOT_FOUND, CREATED } from 'http-status-codes';

const mode = 'cors';
const credentials = 'include';
const API_URL = process.env.REACT_APP_SERVER_URL;

export const expertLoginPositiveNotification = createNotification(NotificationType.positive, 'Welcome :)');
export const expertLoginFailedNotification = createNotification(
    NotificationType.negative,
    'Could not login with those details',
);
export const expertWrongDetails = createNotification(NotificationType.negative, 'The information entered is invalid');
export const expertEmailNotFound = createNotification(NotificationType.negative, 'Could not find user');
export const expertLoginServerError = createNotification(NotificationType.negative, 'Server Error');

export async function apiLoginExpertUser({ email, password }: ExpertLoginAction) {
    return await fetch(`${API_URL}/expert/login`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        mode,
        credentials,
        body: JSON.stringify({ email, password }),
    });
}

export function* loginExpertSaga(action: ExpertLoginAction) {
    yield put(setLoadingTrue());
    try {
        const loginResponse = yield call(apiLoginExpertUser, action);
        const statusCode = loginResponse.status;
        if (statusCode === BAD_REQUEST) {
            yield put(setNotification(expertWrongDetails));
        }
        if (statusCode === NOT_FOUND) {
            yield put(setNotification(expertEmailNotFound));
        }
        if (statusCode === CREATED) {
            try {
                yield put(push(CONFIG.routes.expertDashboard));
                yield put(setNotification(expertLoginPositiveNotification));
            } catch (settingCustomerError) {
                yield put(setNotification(expertLoginServerError));
            }
        }
    } catch (loginError) {
        yield put(setNotification(expertLoginFailedNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchExpertLoginSaga() {
    yield takeEvery(serverActions.LOGIN_EXPERT_USER, loginExpertSaga);
}
