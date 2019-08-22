import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';
import CONFIG from '../../../config/config';
import { NotificationInterface, NotificationType } from '../../../interfaces/Notification.interface';
import { CustomerProfileUpdateActionInterface, ServerActions } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiProfileUpdateCustomerUser } from '../../api';

export const userProfileUpdatePositiveNotification: NotificationInterface = {
    type: NotificationType.positive,
    body: `Your profile updated Successfully!`,
};
export const userProfileUpdateFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Could not Update profile with entered details',
};

export function* profileUpdateCustomerSaga(action: CustomerProfileUpdateActionInterface) {
    yield put(setLoadingTrue());
    try {
        const profileUpdateCustomerResponse = yield call(apiProfileUpdateCustomerUser, action);
        if (profileUpdateCustomerResponse.status === 401) {
            yield put(push(CONFIG.routes.customerLogin));
            yield put(setNotification(userProfileUpdateFailedNotification));
        } else if (profileUpdateCustomerResponse.status === 201) {
            const profileUpdateCustomerResponseJson = yield profileUpdateCustomerResponse.json();
            if (profileUpdateCustomerResponseJson) {
                yield put(setNotification(userProfileUpdatePositiveNotification));
                yield put(push(CONFIG.routes.home));
            }
        }
    } catch (profileUpdateCustomerError) {
        yield put(setNotification(userProfileUpdateFailedNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchProfileUpdateUserSaga() {
    yield takeEvery(ServerActions.PROFILE_UPDATE_CUSTOMER_USER, profileUpdateCustomerSaga);
}
