import { CustomerUser } from '../../interfaces/customer-user';
import { ExpertUser } from '../../interfaces/expert-user';
import { Listing } from '../../interfaces/listing';

export const serverActions = {
    // customer user
    LOGIN_CUSTOMER_USER: 'LOGIN_CUSTOMER_USER',
    SET_CUSTOMER_USER: 'SET_CUSTOMER_USER',
    SET_CUSTOMER_LOGGED_IN: 'SET_CUSTOMER_LOGGED_IN',
    SET_CUSTOMER_LOGGED_OUT: 'SET_CUSTOMER_LOGGED_OUT',
    GET_CUSTOMER_USER: 'GET_CUSTOMER_USER',
    DELETE_CUSTOMER_USER: 'DELETE_CUSTOMER_USER',
    REGISTER_CUSTOMER_USER: 'REGISTER_CUSTOMER_USER',
    LOGOUT_USER: 'LOGOUT_USER',

    // expert user
    LOGIN_EXPERT_USER: 'LOGIN_EXPERT_USER',
    SET_EXPERT_LOGGED_IN: 'SET_EXPERT_LOGGED_IN',
    SET_EXPERT_LOGGED_OUT: 'SET_EXPERT_LOGGED_OUT',
    SET_EXPERT_USER: 'SET_EXPERT_USER',
    GET_EXPERT_USER: 'GET_EXPERT_USER',
    REGISTER_EXPERT_USER: 'REGISTER_EXPERT_USER',
    DELETE_EXPERT_USER: 'DELETE_EXPERT_USER',
    LOGOUT_EXPERT: 'LOGOUT_EXPERT',

    // listings-page
    CREATE_LISTING: 'CREATE_LISTING',
    GET_LISTINGS: 'GET_LISTINGS',
    SET_LISTINGS: 'SET_LISTINGS',
};

export interface ServerActionTypes {
    type: string;
    customerUser?: CustomerUser;
    expertUser?: ExpertUser;
    listings?: Listing[];
}
