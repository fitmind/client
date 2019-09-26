import { initialCustomerUser, ServerInitialState, ServerReducer, ServerStateInterface } from './server.reducer';
import { getUserMockResponse } from '../../../tests/mock-responses/get-user';
import { setCustomerUserActionInterface } from '../../../ecosystems/customer-user/customer-dashboard/customer-dashboard.actions';
import { DeleteCustomerUser } from '../../flows/customer-logout/customer-logout-action';

describe('server reducer', () => {
    it('should have an initial state and it should return it if the action type is not recognised', () => {
        expect(ServerReducer(ServerInitialState, { type: '' })).toEqual(ServerInitialState);
    });
    it('should react to SET_CUSTOMER_USER', () => {
        const expectedState: ServerStateInterface = {
            ...ServerInitialState,
            customerUser: getUserMockResponse,
        };
        const action: setCustomerUserActionInterface = { type: 'SET_CUSTOMER_USER', customerUser: getUserMockResponse };
        expect(ServerReducer(ServerInitialState, action)).toEqual(expectedState);
    });

    it('should react to DELETE_CUSTOMER_USER', () => {
        const expectedState: ServerStateInterface = {
            ...ServerInitialState,
            customerUser: initialCustomerUser,
        };
        const action: DeleteCustomerUser = { type: 'DELETE_CUSTOMER_USER' };
        expect(ServerReducer(ServerInitialState, action)).toEqual(expectedState);
    });
});
