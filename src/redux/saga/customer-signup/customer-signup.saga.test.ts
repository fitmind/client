import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { CustomerLoginExampleResponse } from '../../reducers/server-reducer/server-example-responses/user-login-example-response';
import { CustomerUserExampleResponse } from '../../reducers/server-reducer/server-example-responses/user-me-example-response';

import { setCustomerUserAction, userLoginAction, customerSignUpAction } from '../../actions/server/server.actions';
import * as matchers from 'redux-saga-test-plan/matchers';
import { apiGetUserDashboard, apiGetUserMe, apiLoginCustomerUser, apiSignUpCustomerUser } from '../../api';
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
    const mockSignup = customerSignUpAction({
        email: 'hello@fitmind.io',
        firstName: 'Fitmind',
        lastName: 'User',
        password: 'asd@123',
        interestedInExperiseAreas: ['YOGA_TEACHER'],
        description: 'blahblah',
        phone: '123123123',
    });

    it('it signs up', () => {
        return expectSaga(signUpCustomerSaga)
            .provide([[matchers.call.fn(apiSignUpCustomerUser), CustomerSignUpExampleResponse]])
            .put(setLoadingTrue())
            .put(setNotification(userSignUpPositiveNotification))
            .put(push(CONFIG.routes.home))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the login response fails', () => {
            return expectSaga(signUpCustomerSaga, apiSignUpCustomerUser)
                .provide([[matchers.call.fn(apiSignUpCustomerUser), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(userSignUpFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
