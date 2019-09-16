import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';

import { userLogoutSuccessAction } from '../../actions/server/server.actions';
import * as matchers from 'redux-saga-test-plan/matchers';
import { apiLogoutCustomerUser } from '../../api';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { push } from 'connected-react-router';
import CONFIG from '../../../config/config';
import { throwError } from 'redux-saga-test-plan/providers';
import { logoutUserSaga, userLogoutNegativeNotification } from './customer-logout.saga';

const logoutResponse = { message: 'Successfully removed cookie' };

describe('customer logout saga', () => {
    it('it logs out successfully', () => {
        return expectSaga(logoutUserSaga, apiLogoutCustomerUser)
            .provide([[call(apiLogoutCustomerUser), logoutResponse]])
            .put(setLoadingTrue())
            .put(push(CONFIG.routes.customerLogin))
            .put(userLogoutSuccessAction())
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
