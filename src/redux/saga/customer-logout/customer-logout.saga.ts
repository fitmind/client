import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setLoadingTrue, setLoadingFalse, setNotification } from '../../actions/ui/ui.actions';
import { ServerActions, userLogoutSuccessAction } from '../../actions/server/server.actions';
import { apiLogoutCustomerUser } from '../../api';
import CONFIG from '../../../config/config';

export function* logoutUser() {
    yield put(setLoadingTrue());
    try {
        yield call(apiLogoutCustomerUser);
        yield put(push(CONFIG.routes.home));
        yield put(setNotification({ type: 'positive', body: `See you soon!` }));
    } catch (logoutUserError) {
        yield put(setNotification({ type: 'error', header: ``, body: 'Could not logout' }));
    } finally {
        yield put(userLogoutSuccessAction());
        yield put(setLoadingFalse());
    }
}

export function* watchLogoutUser() {
    yield takeEvery(ServerActions.LOGOUT_USER, logoutUser);
}
