import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { ServerActions, userLogoutSuccessAction } from '../../actions/server/server.actions';
import { apiLogoutCustomerUser } from '../../api';
import CONFIG from '../../../config/config';
import { NotificationInterface, NotificationType } from '../../../interfaces/Notification.interface';

export const userLogoutPositiveNotification: NotificationInterface = {
    type: NotificationType.positive,
    body: `See you soon!`,
};
export const userLogoutNegativeNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: `Could not logout`,
};

export function* logoutUserSaga() {
    yield put(setLoadingTrue());
    try {
        yield call(apiLogoutCustomerUser);
        yield put(push(CONFIG.routes.home));
        yield put(setNotification(userLogoutPositiveNotification));
        yield put(userLogoutSuccessAction());
    } catch (logoutUserError) {
        yield put(setNotification(userLogoutNegativeNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchLogoutUserSaga() {
    yield takeEvery(ServerActions.LOGOUT_USER, logoutUserSaga);
}
