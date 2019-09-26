import { Action } from 'redux';
import { CustomerUser } from '../../../interfaces/customer-user';

export type getCustomerUserActionInterface = Action<'GET_CUSTOMER_USER'>;

export const getCustomerUserAction = (): getCustomerUserActionInterface => ({
    type: 'GET_CUSTOMER_USER',
});

export interface setCustomerUserActionInterface extends Action<'SET_CUSTOMER_USER'> {
    customerUser: CustomerUser;
}

export const setCustomerUserAction = (customerUser: CustomerUser): setCustomerUserActionInterface => ({
    type: 'SET_CUSTOMER_USER',
    customerUser,
});
