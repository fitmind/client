import { Action } from 'redux';

export type CustomerUserLogoutActionInterface = Action<'LOGOUT_USER'>;

export const customerUserLogoutAction = (): CustomerUserLogoutActionInterface => ({
    type: 'LOGOUT_USER',
});
