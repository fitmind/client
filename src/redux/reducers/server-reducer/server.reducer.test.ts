import { ServerReducer, ServerInitialState } from './server.reducer';
import { CustomerDashboardExampleResponse } from './server-example-responses/user-dashboard-example-response';

import { fetchCustomerDashboardAction, setCustomerDashboardAction } from '../../actions/server/server.actions';

describe('server reducer', () => {
    it('should have an initial state and it should return it if the action type is not recognised', () => {
        expect(ServerReducer(ServerInitialState, { type: '' })).toEqual(ServerInitialState);
    });

    it('should handle Fetch Customer Dashboard action', () => {
        expect(ServerReducer(ServerInitialState, fetchCustomerDashboardAction())).toEqual(ServerInitialState);
    });

    it('should handle Set Customer Dashboard action', () => {
        const expectedResponse = {
            expertUser: {},
            customerUser: {},
            customerDashboard: CustomerDashboardExampleResponse,
        };
        expect(ServerReducer(ServerInitialState, setCustomerDashboardAction(CustomerDashboardExampleResponse))).toEqual(
            expectedResponse,
        );
    });
});
