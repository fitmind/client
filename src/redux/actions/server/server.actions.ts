import { Action } from 'redux';
import { CustomerUserResponse } from '../../../interfaces/responses/customer-user-response';
import { CustomerDashboardResponse } from '../../../interfaces/responses/customer-dashboard-response';

export const ServerActions = {
    LOGIN_CUSTOMER_USER: 'LOGIN_CUSTOMER_USER',
    SET_CUSTOMER_USER: 'SET_CUSTOMER_USER',
    FETCH_CUSTOMER_DASHBOARD: 'FETCH_CUSTOMER_DASHBOARD',
    SET_CUSTOMER_DASHBOARD: 'SET_CUSTOMER_DASHBOARD',
};

export interface ServerActionTypes {
    type: string;
    errorMessage?: string;
    customerUser?: CustomerUserResponse;
    customerDashboard?: CustomerDashboardResponse;
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

export interface fetchCustomerDashboardActionInterface extends Action<'FETCH_CUSTOMER_DASHBOARD'> {}

export const fetchCustomerDashboardAction = (): fetchCustomerDashboardActionInterface => ({
    type: 'FETCH_CUSTOMER_DASHBOARD',
});

export interface setCustomerDashboardActionInterface extends Action<'SET_CUSTOMER_DASHBOARD'> {
    customerDashboard: CustomerDashboardResponse;
}

export const setCustomerDashboardAction = (
    customerDashboard: CustomerDashboardResponse,
): setCustomerDashboardActionInterface => ({
    type: 'SET_CUSTOMER_DASHBOARD',
    customerDashboard,
});
