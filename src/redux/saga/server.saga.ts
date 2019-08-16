import { fork, takeEvery, all, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setLoadingTrue, setLoadingFalse, setNotification } from '../actions/ui/ui.actions';
import {
    ServerActions,
    setCustomerUserAction,
    userLoginActionInterface,
    setCustomerDashboardAction,
} from '../actions/server/server.actions';
import { apiLoginCustomerUser, apiGetUserMe, apiCustomerDashboard } from '../api';
import { CustomerUserResponse } from '../../interfaces/responses/customer-user-response';
import CONFIG from '../../config/config';

export function* loginUser(action: userLoginActionInterface) {
    yield put(setLoadingTrue());
    try {
        const loginResponse = yield call(apiLoginCustomerUser, action);
        if (loginResponse.status === 201) {
            try {
                const userResponse: CustomerUserResponse = yield call(apiGetUserMe);
                yield put(setCustomerUserAction(userResponse));
                yield put(push(CONFIG.routes.customerDashboard));
                yield put(setNotification({ type: 'positive', body: `Welcome ${userResponse.name}` }));
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

export function* fetchCustomerDashboard() {
    try {
        const fetchCustomerDashboardResponse = yield call(apiCustomerDashboard);
        if (fetchCustomerDashboardResponse.status === 200) {
            try {
                const customerDashboard = yield fetchCustomerDashboardResponse.json();
                yield put(setCustomerDashboardAction(customerDashboard));
            } catch (settingCustomerError) {
                yield put(setNotification({ type: 'error', header: ``, body: 'Error setting the user dashboard' }));
            }
        }
    } catch (fetchCustomerDashboardError) {
        yield put(setNotification({ type: 'error', header: ``, body: 'Could not SignUp with entered details' }));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchLoginUser() {
    yield takeEvery(ServerActions.LOGIN_CUSTOMER_USER, loginUser);
}
export function* watchFetchCustomerDashboard() {
    yield takeEvery(ServerActions.FETCH_CUSTOMER_DASHBOARD, fetchCustomerDashboard);
}

function* serverSaga() {
    yield all([fork(watchLoginUser), fork(watchFetchCustomerDashboard)]);
}

export default serverSaga;
