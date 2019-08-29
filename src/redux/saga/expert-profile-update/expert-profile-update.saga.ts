import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';
import CONFIG from '../../../config/config';
import { NotificationInterface, NotificationType } from '../../../interfaces/Notification.interface';
import { ExpertProfileUpdateActionInterface, ServerActions } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiProfileUpdateExpertUser } from '../../api';

export const userProfileUpdatePositiveNotification: NotificationInterface = {
    type: NotificationType.positive,
    body: `Your profile updated Successfully!`,
};
export const userProfileUpdateFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Could not Update profile with entered details',
};

export function* profileUpdateExpertSaga(action: ExpertProfileUpdateActionInterface) {
    yield put(setLoadingTrue());
    try {
        const profileUpdateExpertResponse = yield call(apiProfileUpdateExpertUser, action);
        if (profileUpdateExpertResponse.status === 401) {
            yield put(push(CONFIG.routes.expertLogin));
            yield put(setNotification(userProfileUpdateFailedNotification));
        } else if (profileUpdateExpertResponse.status === 201) {
            const profileUpdateExpertResponseJson = yield profileUpdateExpertResponse.json();
            if (profileUpdateExpertResponseJson) {
                yield put(setNotification(userProfileUpdatePositiveNotification));
                yield put(push(CONFIG.routes.home));
            }
        }
    } catch (profileUpdateExpertError) {
        yield put(setNotification(userProfileUpdateFailedNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchProfileUpdateExpertSaga() {
    yield takeEvery(ServerActions.PROFILE_UPDATE_EXPERT_USER, profileUpdateExpertSaga);
}
