import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { CustomerLoginExampleResponse } from '../../reducers/server-reducer/server-example-responses/user-login-example-response';
import { CustomerDashboardExampleResponse } from '../../reducers/server-reducer/server-example-responses/user-dashboard-example-response';

import { setCustomerDashboardAction } from '../../actions/server/server.actions';
import * as matchers from 'redux-saga-test-plan/matchers';
import { apiCustomerDashboard } from '../../api';
import { fetchCustomerDashboardSaga } from './customer-dashboard.saga';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { push } from 'connected-react-router';
import CONFIG from '../../../config/config';
import { throwError } from 'redux-saga-test-plan/providers';

describe('customer dashboard saga', () => {
    it('it fetches dashboard', () => {
        return expectSaga(fetchCustomerDashboardSaga)
            .provide([[call(apiCustomerDashboard), CustomerDashboardExampleResponse]])
            .put(setLoadingTrue())
            .put(setCustomerDashboardAction(CustomerDashboardExampleResponse))
            .put(setLoadingFalse())
            .run();
    });
});
