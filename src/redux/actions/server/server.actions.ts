import { Action } from 'redux';
import { CustomerUserResponse } from '../../../interfaces/responses/customer-user-response';

export const ServerActions = {
    LOGIN_CUSTOMER_USER: 'LOGIN_CUSTOMER_USER',
    SET_CUSTOMER_USER: 'SET_CUSTOMER_USER',
};

export interface ServerActionTypes {
    type: string;
    errorMessage?: string;
    customerUser?: CustomerUserResponse;
}

export interface userLoginActionInterface extends Action<'LOGIN_CUSTOMER_USER'> {
    email: string;
    password: string;
}

export const userLoginAction = ({
    email,
    password,
}: {
    email: string;
    password: string;
}): userLoginActionInterface => ({
    type: 'LOGIN_CUSTOMER_USER',
    email,
    password,
});

export interface setCustomerUserActionInterface extends Action<'SET_CUSTOMER_USER'> {
    customerUser: CustomerUserResponse;
}

export const setCustomerUserAction = (customerUser: CustomerUserResponse): setCustomerUserActionInterface => ({
    type: 'SET_CUSTOMER_USER',
    customerUser,
});
