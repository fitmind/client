import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { push } from 'connected-react-router';
import { throwError } from 'redux-saga-test-plan/providers';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../../redux/actions/ui.actions';
import CONFIG from '../../../config/config';
import {
    apiLoginExpertUser,
    expertEmailNotFound,
    expertLoginFailedNotification,
    expertLoginPositiveNotification,
    expertWrongDetails,
    loginExpertSaga,
} from './expert-login.saga';
import { BAD_REQUEST, NOT_FOUND, OK } from 'http-status-codes';

describe('expert login saga', () => {
    it('if created CREATED', () => {
        return expectSaga(loginExpertSaga, apiLoginExpertUser)
            .provide([[matchers.call.fn(apiLoginExpertUser), { status: OK }]])
            .put(setLoadingTrue())
            .put(push(CONFIG.routes.expertDashboard))
            .put(setNotification(expertLoginPositiveNotification))
            .put(setLoadingFalse())
            .run();
    });

    it('if BAD_REQUEST', () => {
        return expectSaga(loginExpertSaga, apiLoginExpertUser)
            .provide([[matchers.call.fn(apiLoginExpertUser), { status: BAD_REQUEST }]])
            .put(setLoadingTrue())
            .put(setNotification(expertWrongDetails))
            .put(setLoadingFalse())
            .run();
    });

    it('if NOT_FOUND', () => {
        return expectSaga(loginExpertSaga, apiLoginExpertUser)
            .provide([[matchers.call.fn(apiLoginExpertUser), { status: NOT_FOUND }]])
            .put(setLoadingTrue())
            .put(setNotification(expertEmailNotFound))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the login response fails', () => {
            return expectSaga(loginExpertSaga, apiLoginExpertUser)
                .provide([[matchers.call.fn(apiLoginExpertUser), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(expertLoginFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
