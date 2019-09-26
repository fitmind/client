import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';

import * as matchers from 'redux-saga-test-plan/matchers';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui.actions';
import { push } from 'connected-react-router';
import CONFIG from '../../../config/config';
import { apiLogoutCustomerUser, logoutUserSaga, userLogoutNegativeNotification } from './customer-logout.saga';
import { throwError } from 'redux-saga-test-plan/providers';
import { deleteCustomerUser } from './customer-logout-action';

describe('customer logout saga', () => {
    it('it logs out successfully', () => {
        return expectSaga(logoutUserSaga, apiLogoutCustomerUser)
            .provide([[call(apiLogoutCustomerUser), { status: 200 }]])
            .put(setLoadingTrue())
            .put(deleteCustomerUser())
            .put(push(CONFIG.routes.customerLogin))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the logout response fails', () => {
            return expectSaga(logoutUserSaga, apiLogoutCustomerUser)
                .provide([[matchers.call.fn(apiLogoutCustomerUser), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(userLogoutNegativeNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
