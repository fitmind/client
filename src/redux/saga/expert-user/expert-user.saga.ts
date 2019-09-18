import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';
import CONFIG from '../../../config/config';
import { NotificationInterface, NotificationType } from '../../../interfaces/Notification.interface';
import { ServerActions, setExpertUserAction } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiGetExpertMe } from '../../api';

export const userFetchFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Could not fetch expert',
};
export const userSetFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Error setting the expert',
};

export const mapFetchExpertResponse = expertResponse => {
    const keys = Object.keys(expertResponse.weeklyAvailability);
    let weeklyAvailability = {};
    keys.forEach(k => {
        const key = k.toLowerCase();
        weeklyAvailability[key] = expertResponse.weeklyAvailability[key].map(v => ({
            value: v,
            label: v,
        }));
    });
    const isAnExpertIn = expertResponse.isAnExpertIn.map(e => ({ value: e, label: e }));
    return { ...expertResponse, weeklyAvailability, isAnExpertIn };
};

export function* fetchExpertUserSaga() {
    yield put(setLoadingTrue());
    try {
        const fetchExpertUserResponse = yield call(apiGetExpertMe);
        if (fetchExpertUserResponse.status === 401) {
            yield put(push(CONFIG.routes.expertLogin));
        } else if (fetchExpertUserResponse.status === 200) {
            const fetchExpertUserResponseJson = yield fetchExpertUserResponse.json();
            if (fetchExpertUserResponseJson) {
                try {
                    const mapped = mapFetchExpertResponse(fetchExpertUserResponseJson);
                    yield put(setExpertUserAction(mapped));
                    yield put(setLoadingFalse());
                } catch (settingExpertError) {
                    console.log(settingExpertError);
                    yield put(setNotification(userSetFailedNotification));
                }
            }
        }
    } catch (fetchExpertUserError) {
        yield put(setNotification(userFetchFailedNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchExpertUserSaga() {
    yield takeEvery(ServerActions.FETCH_EXPERT_USER, fetchExpertUserSaga);
}
