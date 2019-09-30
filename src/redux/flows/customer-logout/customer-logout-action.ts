import { Action } from 'redux';

export type CustomerUserLogoutActionInterface = Action<'LOGOUT_USER'>;

export const customerUserLogoutAction = (): CustomerUserLogoutActionInterface => ({
    type: 'LOGOUT_USER',
});

export type DeleteCustomerUser = Action<'DELETE_CUSTOMER_USER'>;

export const deleteCustomerUser = (): DeleteCustomerUser => ({
    type: 'DELETE_CUSTOMER_USER',
});

export type SetCustomerLoggedOut = Action<'SET_CUSTOMER_LOGGED_OUT'>;

export const SetCustomerLoggedOut: SetCustomerLoggedOut = {
    type: 'SET_CUSTOMER_LOGGED_OUT',
};
