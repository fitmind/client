import { serverActions } from '../../actions/server.actions';
import { customerUserLogoutAction } from './customer-logout-action';

describe('userLogoutAction', () => {
    it('should return the correct type and data', () => {
        const expectedAction = {
            type: serverActions.LOGOUT_USER,
        };
        expect(customerUserLogoutAction()).toEqual(expectedAction);
    });
});
