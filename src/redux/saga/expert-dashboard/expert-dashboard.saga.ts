import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';
import CONFIG from '../../../config/config';
import { NotificationInterface, NotificationType } from '../../../interfaces/Notification.interface';
import { ServerActions, setExpertDashboardAction } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiGetExpertDashboard } from '../../api';

export const expertDashboardFetchFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Could not fetch expert Dashboard',
};
export const expertDashboardSetFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Error setting the expert dashboard',
};
export function* fetchExpertDashboardSaga() {
    yield put(setLoadingTrue());
    try {
        const fetchExpertDashboardResponse = yield call(apiGetExpertDashboard);
        if (fetchExpertDashboardResponse.status === 401) {
            yield put(push(CONFIG.routes.expertLogin));
        } else if (fetchExpertDashboardResponse.status === 200) {
            const fetchExpertDashboardResponseJson = yield fetchExpertDashboardResponse.json();
            if (fetchExpertDashboardResponseJson) {
                try {
                    yield put(setExpertDashboardAction(fetchExpertDashboardResponseJson));
                } catch (settingExpertError) {
                    yield put(setNotification(expertDashboardSetFailedNotification));
                }
            }
        }
    } catch (fetchExpertDashboardError) {
        yield put(setNotification(expertDashboardFetchFailedNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchExpertDashboardSaga() {
    yield takeEvery(ServerActions.FETCH_EXPERT_DASHBOARD, fetchExpertDashboardSaga);
}
