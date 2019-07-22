import { fork, takeEvery, all, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setLoadingTrue, setLoadingFalse, setNotification } from '../actions/ui/ui.actions';
import { ServerActions, setCustomerUserAction, userLoginActionInterface } from '../actions/server/server.actions';
import { apiLoginCustomerUser, apiGetUserMe } from '../api';
import { CustomerUserResponse } from '../../interfaces/responses/customer-user-response';
import CONFIG from '../../config';

export function* loginUser(action: userLoginActionInterface) {
    yield put(setLoadingTrue());
    try {
        const loginResponse = yield call(apiLoginCustomerUser, action);
        if (loginResponse.status === 200) {
            try {
                const userResponse: CustomerUserResponse = yield call(apiGetUserMe);
                yield put(setCustomerUserAction(userResponse));
                yield put(push(CONFIG.routes.customerDashboard));
                yield put(setNotification({ type: 'positive', header: `Welcome ${userResponse.name}`, body: '' }));
            } catch (settingCustomerError) {
                yield put(setNotification({ type: 'error', header: ``, body: 'Error setting the user' }));
            }
        }
    } catch (loginError) {
        yield put(setNotification({ type: 'error', header: ``, body: 'Could not login with those details' }));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchLoginUser() {
    yield takeEvery(ServerActions.LOGIN_CUSTOMER_USER, loginUser);
}

function* serverSaga() {
    yield all([fork(watchLoginUser)]);
}

export default serverSaga;