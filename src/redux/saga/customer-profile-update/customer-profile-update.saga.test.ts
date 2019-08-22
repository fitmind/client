import { push } from 'connected-react-router';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import CONFIG from '../../../config/config';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiProfileUpdateCustomerUser } from '../../api';
import { CustomerProfileUpdateExampleResponse } from '../../reducers/server-reducer/server-example-responses/user-profile-update-example-response';
import {
    profileUpdateCustomerSaga,
    userProfileUpdatePositiveNotification,
    userProfileUpdateFailedNotification,
} from './customer-profile-update.saga';
import { throwError } from 'redux-saga-test-plan/providers';

describe('customer Profile Update saga', () => {
    it('it updates profile', () => {
        return expectSaga(profileUpdateCustomerSaga)
            .provide([
                [
                    matchers.call.fn(apiProfileUpdateCustomerUser),
                    { json: () => CustomerProfileUpdateExampleResponse, status: 201 },
                ],
            ])
            .put(setLoadingTrue())
            .put(setNotification(userProfileUpdatePositiveNotification))
            .put(push(CONFIG.routes.home))
            .put(setLoadingFalse())
            .run();
    });

    it('it should handle error 401', () => {
        return expectSaga(profileUpdateCustomerSaga)
            .provide([
                [
                    matchers.call.fn(apiProfileUpdateCustomerUser),
                    { json: () => CustomerProfileUpdateExampleResponse, status: 401 },
                ],
            ])
            .put(setLoadingTrue())
            .put(push(CONFIG.routes.customerLogin))
            .put(setNotification(userProfileUpdateFailedNotification))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the customer dashboard response fails', () => {
            return expectSaga(profileUpdateCustomerSaga)
                .provide([[matchers.call.fn(apiProfileUpdateCustomerUser), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(userProfileUpdateFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
