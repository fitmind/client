import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { CustomerDashboardExampleResponse } from '../../reducers/server-reducer/server-example-responses/user-dashboard-example-response';
import { push } from 'connected-react-router';
import { setCustomerDashboardAction } from '../../actions/server/server.actions';
import { apiGetUserDashboard } from '../../api';
import { fetchCustomerDashboardSaga, userDashboardFetchFailedNotification } from './customer-dashboard.saga';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { throwError } from 'redux-saga-test-plan/providers';
import CONFIG from '../../../config/config';

describe('customer dashboard saga', () => {
    it('it fetches dashboard', () => {
        return expectSaga(fetchCustomerDashboardSaga)
            .provide([[call(apiGetUserDashboard), { json: () => CustomerDashboardExampleResponse, status: 200 }]])
            .put(setLoadingTrue())
            .put(setCustomerDashboardAction(CustomerDashboardExampleResponse))
            .put(setLoadingFalse())
            .run();
    });

    it('it should handle error 401', () => {
        return expectSaga(fetchCustomerDashboardSaga)
            .provide([[call(apiGetUserDashboard), { json: () => CustomerDashboardExampleResponse, status: 401 }]])
            .put(setLoadingTrue())
            .put(push(CONFIG.routes.customerLogin))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the customer dashboard response fails', () => {
            return expectSaga(fetchCustomerDashboardSaga)
                .provide([[call(apiGetUserDashboard), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(userDashboardFetchFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
