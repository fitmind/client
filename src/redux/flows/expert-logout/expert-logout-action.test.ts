import { deleteExpertUser, expertUserLogoutAction } from './expert-logout-action';
import { serverActions } from '../../actions/server.actions';

describe('userLogoutAction', () => {
    it('should return the correct type and data', () => {
        const expectedAction = {
            type: serverActions.LOGOUT_EXPERT,
        };
        expect(expertUserLogoutAction()).toEqual(expectedAction);
    });
});

describe('deleteCustomerUserAction', () => {
    it('should return the correct type and data', () => {
        const expectedAction = {
            type: serverActions.DELETE_EXPERT_USER,
        };
        expect(deleteExpertUser()).toEqual(expectedAction);
    });
});
