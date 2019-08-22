import { call, put, takeEvery } from 'redux-saga/effects';
import { ServerActions, setCustomerDashboardAction } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiGetUserDashboard } from '../../api';
import { NotificationInterface, NotificationType } from '../../../interfaces/Notification.interface';
import { push } from 'connected-react-router';
import CONFIG from '../../../config/config';

export const userDashboardFetchFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Could not fetch user Dashboard',
};
export const userDashboardSetFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Error setting the user dashboard',
};
export function* fetchCustomerDashboardSaga() {
    yield put(setLoadingTrue());
    try {
        const fetchCustomerDashboardResponse = yield call(apiGetUserDashboard);
        if (fetchCustomerDashboardResponse.status === 401) {
            yield put(push(CONFIG.routes.customerLogin));
        } else if (fetchCustomerDashboardResponse.status === 200) {
            const fetchCustomerDashboardResponseJson = yield fetchCustomerDashboardResponse.json();
            if (fetchCustomerDashboardResponseJson) {
                try {
                    yield put(setCustomerDashboardAction(fetchCustomerDashboardResponseJson));
                } catch (settingCustomerError) {
                    yield put(setNotification(userDashboardSetFailedNotification));
                }
            }
        }
    } catch (fetchCustomerDashboardError) {
        yield put(setNotification(userDashboardFetchFailedNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchCustomerDashboardSaga() {
    yield takeEvery(ServerActions.FETCH_CUSTOMER_DASHBOARD, fetchCustomerDashboardSaga);
}
