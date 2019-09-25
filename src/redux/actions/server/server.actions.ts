import { customerUser } from '../../../interfaces/customer-user';
import { expertUser } from '../../../interfaces/expert-user';

export const serverActions = {
    LOGIN_CUSTOMER_USER: 'LOGIN_CUSTOMER_USER',
    SET_CUSTOMER_USER: 'SET_CUSTOMER_USER',
    FETCH_CUSTOMER_USER: 'FETCH_CUSTOMER_USER',
    REGISTER_CUSTOMER_USER: 'REGISTER_CUSTOMER_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    LOGOUT_EXPERT: 'LOGOUT_EXPERT',
};

export interface ServerActionTypes {
    type: string;
    customerUser?: customerUser;
    expertUser?: expertUser;
}
