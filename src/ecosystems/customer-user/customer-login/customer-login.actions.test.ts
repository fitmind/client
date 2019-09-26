import { customerUserLoginAction } from './customer-login.actions';
import { serverActions } from '../../../redux/actions/server.actions';

describe('customer login action', () => {
    it('should return the correct type and data', () => {
        const values = {
            email: 'fitmindexpert@fitmind.io',
            password: 'Testing123!',
        };
        const expectedAction = {
            type: serverActions.LOGIN_CUSTOMER_USER,
            ...values,
        };
        expect(customerUserLoginAction(values)).toEqual(expectedAction);
    });
});
