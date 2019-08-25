import { push } from 'connected-react-router';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import CONFIG from '../../../config/config';
import { setExpertUserAction } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiGetExpertMe, apiLoginCustomerUser, apiLoginExpertUser } from '../../api';
import { ExpertLoginExampleResponse } from '../../reducers/server-reducer/server-example-responses/expert-login-example-response';
import { ExpertUserExampleResponse } from '../../reducers/server-reducer/server-example-responses/expert-me-example-response';
import {
    expertDashboardFailedNotification,
    expertLoginFailedNotification,
    expertLoginPositiveNotification,
    loginExpertSaga,
} from './expert-login.saga';

describe('expert login saga', () => {
    it('it logs in', () => {
        return expectSaga(loginExpertSaga, apiLoginExpertUser)
            .provide([
                [matchers.call.fn(apiLoginExpertUser), ExpertLoginExampleResponse],
                [matchers.call.fn(apiGetExpertMe), ExpertUserExampleResponse],
            ])
            .put(setLoadingTrue())
            .put(setExpertUserAction(ExpertUserExampleResponse))
            .put(push(CONFIG.routes.expertDashboard))
            .put(setNotification(expertLoginPositiveNotification))
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

        it('should fail when the get user response fails', () => {
            return expectSaga(loginExpertSaga, apiLoginCustomerUser)
                .provide([
                    [matchers.call.fn(apiLoginExpertUser), ExpertLoginExampleResponse],
                    [matchers.call.fn(apiGetExpertMe), throwError(error)],
                ])
                .put(setLoadingTrue())
                .put(setNotification(expertDashboardFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
