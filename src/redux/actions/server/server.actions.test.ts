import { ServerActions, userLoginAction, userLogoutAction, userLogoutSuccessAction } from './server.actions';

describe('server actions', () => {
    describe('userLoginAction', () => {
        it('should return the correct type and data', () => {
            const values = {
                email: 'testing@test.com',
                password: 'testing123',
            };
            const expectedAction = {
                type: ServerActions.LOGIN_CUSTOMER_USER,
                ...values,
            };
            expect(userLoginAction(values)).toEqual(expectedAction);
        });
    });

    describe('userLogoutAction', () => {
        it('should return the correct type and data', () => {
            const expectedAction = {
                type: ServerActions.LOGOUT_USER,
            };
            expect(userLogoutAction()).toEqual(expectedAction);
        });
    });

    describe('userLogoutSuccessAction', () => {
        it('should return the correct type and data', () => {
            const expectedAction = {
                type: ServerActions.LOGOUT_USER_SUCCESS,
            };
            expect(userLogoutSuccessAction()).toEqual(expectedAction);
        });
    });
});
