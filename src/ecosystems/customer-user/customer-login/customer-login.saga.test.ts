import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import {
    apiLoginCustomerUser,
    loginUserSaga,
    userLoginFailedNotification,
    userLoginPositiveNotification,
} from './customer-login.saga';
import { push } from 'connected-react-router';
import { throwError } from 'redux-saga-test-plan/providers';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../../redux/actions/ui.actions';
import CONFIG from '../../../config/config';

describe('customer login saga', () => {
    it('it logs in', () => {
        return expectSaga(loginUserSaga, apiLoginCustomerUser)
            .provide([[matchers.call.fn(apiLoginCustomerUser), { status: 201 }]])
            .put(setLoadingTrue())
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
    });
});
