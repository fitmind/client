import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import {
    signUpCustomerSaga,
    apiRegisterCustomerUser,
    registerPositiveNotification,
    registerNegativeNotification,
} from './customer-register.saga';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../redux/actions/ui/ui.actions';
import { push } from 'connected-react-router';
import CONFIG from '../../config/config';
import { throwError } from 'redux-saga-test-plan/providers';

describe('customer Sign up saga', () => {
    it('it signs up', () => {
        return expectSaga(signUpCustomerSaga)
            .provide([[matchers.call.fn(apiRegisterCustomerUser), { status: 201 }]])
            .put(setLoadingTrue())
            .put(setNotification(registerPositiveNotification))
            .put(push(CONFIG.routes.customerLogin))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the login response fails', () => {
            return expectSaga(signUpCustomerSaga)
                .provide([[matchers.call.fn(apiRegisterCustomerUser), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(registerNegativeNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
