import { Action } from 'redux';
import { customerUser } from '../../../interfaces/customer-user';

export type getCustomerUserActionInterface = Action<'GET_CUSTOMER_USER'>;

export const getCustomerUserAction = (): getCustomerUserActionInterface => ({
    type: 'GET_CUSTOMER_USER',
});

export interface setCustomerUserActionInterface extends Action<'SET_CUSTOMER_USER'> {
    customerUser: customerUser;
}

export const setCustomerUserAction = (customerUser: customerUser): setCustomerUserActionInterface => ({
    type: 'SET_CUSTOMER_USER',
    customerUser,
});
