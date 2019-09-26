import { getCustomerUserAction, setCustomerUserAction } from './customer-dashboard.actions';
import { serverActions } from '../../../redux/actions/server.actions';
import { getUserMockResponse } from '../../../tests/mock-responses/get-user';

describe('fetchCustomerUserAction', () => {
    it('should return the correct type and data', () => {
        const expectedAction = {
            type: serverActions.GET_CUSTOMER_USER,
        };
        expect(getCustomerUserAction()).toEqual(expectedAction);
    });
});

describe('set Customer Action', () => {
    it('should return the correct type and data', () => {
        const expectedAction = {
            type: serverActions.SET_CUSTOMER_USER,
            customerUser: getUserMockResponse,
        };

        expect(setCustomerUserAction(getUserMockResponse)).toEqual(expectedAction);
    });
});
