import { customerUser } from '../../interfaces/customer-user';
import { expertUser } from '../../interfaces/expert-user';

export const serverActions = {
    // customer user
    LOGIN_CUSTOMER_USER: 'LOGIN_CUSTOMER_USER',
    SET_CUSTOMER_USER: 'SET_CUSTOMER_USER',
    GET_CUSTOMER_USER: 'GET_CUSTOMER_USER',
    DELETE_CUSTOMER_USER: 'DELETE_CUSTOMER_USER',
    REGISTER_CUSTOMER_USER: 'REGISTER_CUSTOMER_USER',
    LOGOUT_USER: 'LOGOUT_USER',

    // expert user
    LOGIN_EXPERT_USER: 'LOGIN_EXPERT_USER',
    SET_EXPERT_USER: 'SET_EXPERT_USER',
    GET_EXPERT_USER: 'GET_EXPERT_USER',
    REGISTER_EXPERT_USER: 'REGISTER_EXPERT_USER',
    LOGOUT_EXPERT: 'LOGOUT_EXPERT',
};

export interface ServerActionTypes {
    type: string;
    customerUser?: customerUser;
    expertUser?: expertUser;
}
