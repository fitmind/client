import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';

import { setCustomerUserAction } from '../../actions/server/server.actions';
import { apiGetUserMe } from '../../api';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { throwError } from 'redux-saga-test-plan/providers';
import { CustomerUserExampleResponse } from '../../reducers/server-reducer/server-example-responses/user-me-example-response';
import { fetchCustomerUserSaga, userFetchFailedNotification } from './customer-user.saga';
import CONFIG from '../../../config/config';
import { push } from 'connected-react-router';

describe('customer user saga', () => {
    it('it fetches user', () => {
        return expectSaga(fetchCustomerUserSaga)
            .provide([[call(apiGetUserMe), { json: () => CustomerUserExampleResponse, status: 200 }]])
            .put(setLoadingTrue())
            .put(setCustomerUserAction(CustomerUserExampleResponse))
            .put(setLoadingFalse())
            .run();
    });

    it('it should handle error 401', () => {
        return expectSaga(fetchCustomerUserSaga)
            .provide([[call(apiGetUserMe), { json: () => CustomerUserExampleResponse, status: 401 }]])
            .put(setLoadingTrue())
            .put(push(CONFIG.routes.customerLogin))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the customer user response fails', () => {
            return expectSaga(fetchCustomerUserSaga)
                .provide([[call(apiGetUserMe), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(userFetchFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});