import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';
import CONFIG from '../../../config/config';
import { NotificationInterface, NotificationType } from '../../../interfaces/Notification.interface';
import { ExpertLoginActionInterface, ServerActions, setExpertUserAction } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiGetExpertMe, apiLoginExpertUser } from '../../api';
import { ExpertLoginResponse } from '../../../interfaces/responses/expert-login-response';
import { ExpertUserResponse } from '../../../interfaces/responses/expert-user-response';

export const expertLoginPositiveNotification: NotificationInterface = {
    type: NotificationType.positive,
    body: `Welcome`,
};
export const expertLoginFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Could not login with those details',
};
export const expertDashboardFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Error retrieving the expert dashboard',
};

export function* loginExpertSaga(action: ExpertLoginActionInterface) {
    yield put(setLoadingTrue());
    try {
        const loginResponse: ExpertLoginResponse = yield call(apiLoginExpertUser, action);
        if (loginResponse) {
            try {
                const expertResponse: ExpertUserResponse = yield call(apiGetExpertMe);
                yield put(setExpertUserAction(expertResponse));
                yield put(push(CONFIG.routes.expertDashboard));
                yield put(setNotification(expertLoginPositiveNotification));
            } catch (settingExpertError) {
                yield put(setNotification(expertDashboardFailedNotification));
            }
        }
    } catch (loginError) {
        yield put(setNotification(expertLoginFailedNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchLoginExpertSaga() {
    yield takeEvery(ServerActions.LOGIN_EXPERT_USER, loginExpertSaga);
}
