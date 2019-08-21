import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { apiSignUpCustomerUser } from '../../api';
import {
    signUpCustomerSaga,
    userSignUpPositiveNotification,
    userSignUpFailedNotification,
} from './customer-signup.saga';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { push } from 'connected-react-router';
import CONFIG from '../../../config/config';
import { throwError } from 'redux-saga-test-plan/providers';
import { CustomerSignUpExampleResponse } from '../../reducers/server-reducer/server-example-responses/user-signup-example-response';

describe('customer Signup saga', () => {
    it('it signs up', () => {
        return expectSaga(signUpCustomerSaga)
            .provide([[matchers.call.fn(apiSignUpCustomerUser), CustomerSignUpExampleResponse]])
            .put(setLoadingTrue())
            .put(setNotification(userSignUpPositiveNotification))
            .put(push(CONFIG.routes.customerLogin))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the login response fails', () => {
            return expectSaga(signUpCustomerSaga)
                .provide([[matchers.call.fn(apiSignUpCustomerUser), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(userSignUpFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
