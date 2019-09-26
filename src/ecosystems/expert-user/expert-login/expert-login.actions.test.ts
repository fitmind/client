import { serverActions } from '../../../redux/actions/server.actions';
import { expertUserLoginAction } from './expert-login.actions';

describe('expert login action', () => {
    it('should return the correct type and data', () => {
        const values = {
            email: 'fitmindexpert@fitmind.io',
            password: 'Testing123!',
        };
        const expectedAction = {
            type: serverActions.LOGIN_EXPERT_USER,
            ...values,
        };
        expect(expertUserLoginAction(values)).toEqual(expectedAction);
    });
});
