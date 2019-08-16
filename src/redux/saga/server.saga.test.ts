import { loginUser } from './server.saga';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { CustomerLoginExampleResponse } from '../reducers/server-reducer/server-example-responses/user-login-example-response';
import { CustomerUserExampleResponse } from '../reducers/server-reducer/server-example-responses/user-me-example-response';

import { ServerActions, userLoginAction } from '../actions/server/server.actions';
import { apiLoginCustomerUser } from '../api';

describe('server saga', () => {
    const action = userLoginAction({
        email: 'test@fitmind.io',
        password: 'asd@123',
    });
    it('it logs in', () => {
        return expectSaga(loginUser, action)
            .provide([[matchers.call.fn(apiLoginCustomerUser), CustomerLoginExampleResponse]])
            .put({
                type: 'LOADING_FALSE',
            })
            .put({
                type: ServerActions.SET_CUSTOMER_USER,
                customerUser: CustomerUserExampleResponse,
            })
            .dispatch({
                type: 'LOADING_TRUE',
            })
            .run();
    });

    // it('handles errors', () => {
    //     return (
    //         expectSaga(handleFetch, action)
    //             // There is also a way of mocking the api return values with matchers
    //             .provide([[matchers.call.fn(action.apiCall), { error: 'could not fetch' }]])
    //             .put({
    //                 type: 'LOADING_FALSE',
    //             })
    //             .put({
    //                 type: 'SET_ERROR_MESSAGE',
    //                 errorMessage: 'error fetching the data',
    //             })
    //             .dispatch({
    //                 type: 'LOADING_TRUE',
    //             })
    //             .run()
    //     );
    // });
});
