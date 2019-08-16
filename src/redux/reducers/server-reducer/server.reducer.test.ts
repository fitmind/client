import { ServerReducer, ServerInitialState } from './server.reducer';

import { userLogoutAction, userLogoutSuccessAction } from '../../actions/server/server.actions';

describe('server reducer', () => {
    it('should have an initial state and it should return it if the action type is not recognised', () => {
        expect(ServerReducer(ServerInitialState, { type: '' })).toEqual(ServerInitialState);
    });
    it('should handle User Logout action', () => {
        expect(ServerReducer(ServerInitialState, userLogoutAction())).toEqual(ServerInitialState);
    });
    it('should handle User Logout Success action', () => {
        const expectedResponse = {
            expertUser: {},
            customerUser: {},
        };
        expect(ServerReducer(ServerInitialState, userLogoutSuccessAction())).toEqual(expectedResponse);
    });
});
