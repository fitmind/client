import { ServerReducer, ServerInitialState } from './server.reducer';
import { CustomerDashboardExampleResponse } from './server-example-responses/user-dashboard-example-response';

import {
    fetchCustomerDashboardAction,
    setCustomerDashboardAction,
    setExpertUserAction,
} from '../../actions/server/server.actions';

import { userLogoutAction, userLogoutSuccessAction } from '../../actions/server/server.actions';
import { ExpertUserExampleResponse } from './server-example-responses/expert-me-example-response';

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

    it('should handle User Logout action', () => {
        expect(ServerReducer(ServerInitialState, userLogoutAction())).toEqual(ServerInitialState);
    });

    it('should handle User Logout Success action', () => {
        const expectedResponse = {
            expertUser: {},
            customerUser: {},
            customerDashboard: {},
        };
        expect(ServerReducer(ServerInitialState, userLogoutSuccessAction())).toEqual(expectedResponse);
    });

    it('should handle Set Expert User action', () => {
        const expectedResponse = {
            expertUser: ExpertUserExampleResponse,
            customerUser: {},
            customerDashboard: {},
        };
        expect(ServerReducer(ServerInitialState, setExpertUserAction(ExpertUserExampleResponse))).toEqual(
            expectedResponse,
        );
    });
});
