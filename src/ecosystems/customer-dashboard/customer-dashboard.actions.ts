import { Action } from 'redux';
import { customerUser } from '../../interfaces/customer-user';

export const FETCH_CUSTOMER_DASHBOARD = 'FETCH_CUSTOMER_DASHBOARD';

export type fetchCustomerUserActionInterface = Action<'FETCH_CUSTOMER_USER'>;

export const fetchCustomerUserAction = (): fetchCustomerUserActionInterface => ({
    type: 'FETCH_CUSTOMER_USER',
});

export interface setCustomerUserActionInterface extends Action<'SET_CUSTOMER_USER'> {
    customerUser: customerUser;
}

export const setCustomerUserAction = (customerUser: customerUser): setCustomerUserActionInterface => ({
    type: 'SET_CUSTOMER_USER',
    customerUser,
});
