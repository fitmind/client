import { call, put, takeEvery } from 'redux-saga/effects';
import { ServerActions, setCustomerUserAction } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiGetUserMe } from '../../api';
import { NotificationInterface, NotificationType } from '../../../interfaces/Notification.interface';
import { push } from 'connected-react-router';
import CONFIG from '../../../config/config';

export const userFetchFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Could not fetch user',
};
export const userSetFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Error setting the user',
};
export function* fetchCustomerUserSaga() {
    yield put(setLoadingTrue());
    try {
        const fetchCustomerUserResponse = yield call(apiGetUserMe);
        if (fetchCustomerUserResponse.status === 401) {
            yield put(push(CONFIG.routes.customerLogin));
        } else if (fetchCustomerUserResponse.status === 200) {
            const fetchCustomerUserResponseJson = yield fetchCustomerUserResponse.json();
            if (fetchCustomerUserResponseJson) {
                try {
                    yield put(setCustomerUserAction(fetchCustomerUserResponseJson));
                } catch (settingCustomerError) {
                    yield put(setNotification(userSetFailedNotification));
                }
            }
        }
    } catch (fetchCustomerUserError) {
        yield put(setNotification(userFetchFailedNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchCustomerUserSaga() {
    yield takeEvery(ServerActions.FETCH_CUSTOMER_USER, fetchCustomerUserSaga);
}
