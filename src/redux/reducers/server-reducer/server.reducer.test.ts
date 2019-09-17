import {
    fetchCustomerDashboardAction,
    fetchExpertDashboardAction,
    setCustomerDashboardAction,
    setExpertDashboardAction,
    setExpertUserAction,
    userLogoutAction,
    userLogoutSuccessAction,
} from '../../actions/server/server.actions';
import { ExpertDashboardExampleResponse } from './server-example-responses/expert-dashboard-example-response';
import { ExpertUserExampleResponse } from './server-example-responses/expert-me-example-response';
import { CustomerDashboardExampleResponse } from './server-example-responses/user-dashboard-example-response';
import { ServerInitialState, ServerReducer } from './server.reducer';

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

    it('should handle Fetch Expert Dashboard action', () => {
        expect(ServerReducer(ServerInitialState, fetchExpertDashboardAction())).toEqual(ServerInitialState);
    });

    it('should handle Set Expert Dashboard action', () => {
        const expectedResponse = {
            expertUser: {},
            customerUser: {},
            customerDashboard: {},
            expertDashboard: ExpertDashboardExampleResponse,
        };
        expect(ServerReducer(ServerInitialState, setExpertDashboardAction(ExpertDashboardExampleResponse))).toEqual(
            expectedResponse,
        );
    });
});
