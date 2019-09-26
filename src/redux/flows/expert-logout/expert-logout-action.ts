import { Action } from 'redux';

export type CustomerUserLogoutActionInterface = Action<'LOGOUT_EXPERT'>;

export const expertUserLogoutAction = (): CustomerUserLogoutActionInterface => ({
    type: 'LOGOUT_EXPERT',
});
