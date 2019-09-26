import { Action } from 'redux';

export interface UserLoginActionInterface extends Action<'LOGIN_CUSTOMER_USER'> {
    email: string;
    password: string;
}

export const customerUserLoginAction = ({ email, password }): UserLoginActionInterface => ({
    type: 'LOGIN_CUSTOMER_USER',
    email,
    password,
});
