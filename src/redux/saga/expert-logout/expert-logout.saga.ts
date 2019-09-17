import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';
import CONFIG from '../../../config/config';
import { NotificationInterface, NotificationType } from '../../../interfaces/Notification.interface';
import { expertLogoutSuccessAction, ServerActions } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiLogoutExpertUser } from '../../api';

export const expertLogoutNegativeNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: `Could not logout`,
};

export function* logoutExpertSaga() {
    yield put(setLoadingTrue());
    try {
        yield call(apiLogoutExpertUser);
        yield put(push(CONFIG.routes.expertLogin));
        yield put(expertLogoutSuccessAction());
    } catch (logoutExpertError) {
        yield put(setNotification(expertLogoutNegativeNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchLogoutExpertSaga() {
    yield takeEvery(ServerActions.LOGOUT_EXPERT, logoutExpertSaga);
}
