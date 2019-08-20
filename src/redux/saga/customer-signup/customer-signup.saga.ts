import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { ServerActions, CustomerSignUpActionInterface } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import CONFIG from '../../../config/config';
import { NotificationInterface, NotificationType } from '../../../interfaces/Notification.interface';
import { apiSignUpCustomerUser } from '../../api';

export const userSignUpPositiveNotification: NotificationInterface = {
    type: NotificationType.positive,
    body: `Registration Successful!`,
};
export const userSignUpFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Could not SignUp with entered details',
};

export function* signUpCustomerSaga(action: CustomerSignUpActionInterface) {
    yield put(setLoadingTrue());
    try {
        const signUpCustomerResponse = yield call(apiSignUpCustomerUser, action);
        if (signUpCustomerResponse) {
            yield put(setNotification(userSignUpPositiveNotification));
            yield put(push(CONFIG.routes.customerLogin));
        }
    } catch (signUpCustomerError) {
        yield put(setNotification(userSignUpFailedNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchSignUpUserSaga() {
    yield takeEvery(ServerActions.SIGNUP_CUSTOMER_USER, signUpCustomerSaga);
}
