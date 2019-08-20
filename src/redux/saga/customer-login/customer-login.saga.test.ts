import { expectSaga } from 'redux-saga-test-plan';
import { CustomerLoginExampleResponse } from '../../reducers/server-reducer/server-example-responses/user-login-example-response';
import { CustomerUserExampleResponse } from '../../reducers/server-reducer/server-example-responses/user-me-example-response';

import { setCustomerUserAction } from '../../actions/server/server.actions';
import * as matchers from 'redux-saga-test-plan/matchers';
import { apiGetUserMe, apiLoginCustomerUser } from '../../api';
import {
    loginUserSaga,
    userDashboardFailedNotification,
    userLoginFailedNotification,
    userLoginPositiveNotification,
} from './customer-login.saga';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { push } from 'connected-react-router';
import CONFIG from '../../../config/config';
import { throwError } from 'redux-saga-test-plan/providers';

describe('customer login saga', () => {
    it('it logs in', () => {
        return expectSaga(loginUserSaga, apiLoginCustomerUser)
            .provide([
                [matchers.call.fn(apiLoginCustomerUser), CustomerLoginExampleResponse],
                [matchers.call.fn(apiGetUserMe), CustomerUserExampleResponse],
            ])
            .put(setLoadingTrue())
            .put(setCustomerUserAction(CustomerUserExampleResponse))
            .put(push(CONFIG.routes.customerDashboard))
            .put(setNotification(userLoginPositiveNotification))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the login response fails', () => {
            return expectSaga(loginUserSaga, apiLoginCustomerUser)
                .provide([[matchers.call.fn(apiLoginCustomerUser), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(userLoginFailedNotification))
                .put(setLoadingFalse())
                .run();
        });

        it('should fail when the get user dashboard response fails', () => {
            return expectSaga(loginUserSaga, apiLoginCustomerUser)
                .provide([
                    [matchers.call.fn(apiLoginCustomerUser), CustomerLoginExampleResponse],
                    [matchers.call.fn(apiGetUserMe), throwError(error)],
                ])
                .put(setLoadingTrue())
                .put(setNotification(userDashboardFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
