import { fork, takeEvery, all, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setLoadingTrue, setLoadingFalse, setNotification } from '../actions/ui/ui.actions';
import {
    ServerActions,
    setCustomerUserAction,
    UserLoginActionInterface,
    CustomerSignUpActionInterface,
} from '../actions/server/server.actions';
import { apiLoginCustomerUser, apiGetUserMe, apiSignUpCustomerUser } from '../api';
import { CustomerUserResponse } from '../../interfaces/responses/customer-user-response';
import CONFIG from '../../config/config';

export function* loginUser(action: UserLoginActionInterface) {
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

export function* signUpCustomer(action: CustomerSignUpActionInterface) {
    yield put(setLoadingTrue());
    try {
        const signUpCustomerResponse = yield call(apiSignUpCustomerUser, action);
        if (signUpCustomerResponse.status === 201) {
            try {
                yield put(push(CONFIG.routes.home));
                yield put(setNotification({ type: 'positive', body: 'Registration Successful!' }));
            } catch (settingCustomerError) {
                yield put(setNotification({ type: 'error', header: ``, body: 'Error setting the user' }));
            }
        }
    } catch (signUpCustomerError) {
        yield put(setNotification({ type: 'error', header: ``, body: 'Could not SignUp with entered details' }));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchLoginUser() {
    yield takeEvery(ServerActions.LOGIN_CUSTOMER_USER, loginUser);
}

export function* watchUserSignUp() {
    yield takeEvery(ServerActions.SIGNUP_CUSTOMER_USER, signUpCustomer);
}

function* serverSaga() {
    yield all([fork(watchLoginUser), fork(watchUserSignUp)]);
}

export default serverSaga;
