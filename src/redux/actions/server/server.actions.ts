import { Action } from 'redux';
import { CustomerDashboardResponse } from '../../../interfaces/responses/customer-dashboard-response';
import { CustomerUserResponse } from '../../../interfaces/responses/customer-user-response';
import { ExpertUserResponse } from '../../../interfaces/responses/expert-user-response';

export const ServerActions = {
    LOGIN_CUSTOMER_USER: 'LOGIN_CUSTOMER_USER',
    SET_CUSTOMER_USER: 'SET_CUSTOMER_USER',
    FETCH_CUSTOMER_USER: 'FETCH_CUSTOMER_USER',
    FETCH_CUSTOMER_DASHBOARD: 'FETCH_CUSTOMER_DASHBOARD',
    SET_CUSTOMER_DASHBOARD: 'SET_CUSTOMER_DASHBOARD',
    SIGNUP_CUSTOMER_USER: 'SIGNUP_CUSTOMER_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    LOGOUT_EXPERT: 'LOGOUT_EXPERT',
    LOGOUT_USER_SUCCESS: 'LOGOUT_USER_SUCCESS',
    LOGOUT_EXPERT_SUCCESS: 'LOGOUT_EXPERT_SUCCESS',
    PROFILE_UPDATE_CUSTOMER_USER: 'PROFILE_UPDATE_CUSTOMER_USER',
    SIGNUP_EXPERT_USER: 'SIGNUP_EXPERT_USER',
    LOGIN_EXPERT_USER: 'LOGIN_EXPERT_USER',
    SET_EXPERT_USER: 'SET_EXPERT_USER',
};

export interface ServerActionTypes {
    type: string;
    errorMessage?: string;
    customerUser?: CustomerUserResponse;
    customerDashboard?: CustomerDashboardResponse;
    expertUser?: ExpertUserResponse;
}

export interface UserLoginActionInterface extends Action<'LOGIN_CUSTOMER_USER'> {
    email: string;
    password: string;
}

export const userLoginAction = ({ email, password }): UserLoginActionInterface => ({
    type: 'LOGIN_CUSTOMER_USER',
    email,
    password,
});

export type fetchCustomerUserActionInterface = Action<'FETCH_CUSTOMER_USER'>;

export const fetchCustomerUserAction = (): fetchCustomerUserActionInterface => ({
    type: 'FETCH_CUSTOMER_USER',
});

export interface setCustomerUserActionInterface extends Action<'SET_CUSTOMER_USER'> {
    customerUser: CustomerUserResponse;
}

export const setCustomerUserAction = (customerUser: CustomerUserResponse): setCustomerUserActionInterface => ({
    type: 'SET_CUSTOMER_USER',
    customerUser,
});

export type fetchCustomerDashboardActionInterface = Action<'FETCH_CUSTOMER_DASHBOARD'>;

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

export interface CustomerSignUpActionInterface extends Action<'SIGNUP_CUSTOMER_USER'> {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    interestedInExpertiseAreas: string[];
    description: string;
    phone: string;
}

export const customerSignUpAction = ({
    email,
    firstName,
    lastName,
    password,
    interestedInExpertiseAreas,
    description,
    phone,
}: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    interestedInExpertiseAreas: string[];
    description: string;
    phone: string;
}): CustomerSignUpActionInterface => ({
    type: 'SIGNUP_CUSTOMER_USER',
    email,
    firstName,
    lastName,
    password,
    interestedInExpertiseAreas,
    description,
    phone,
});

export interface CustomerProfileUpdateActionInterface extends Action<'PROFILE_UPDATE_CUSTOMER_USER'> {
    _id?: string;
    firstName?: string;
    lastName?: string;
    interestedInExpertiseAreas?: string[];
    description?: string;
    phone?: string;
}

export const customerProfileUpdateAction = ({
    _id,
    firstName,
    lastName,
    interestedInExpertiseAreas,
    description,
    phone,
}: {
    _id?: string;
    firstName?: string;
    lastName?: string;
    interestedInExpertiseAreas?: string[];
    description?: string;
    phone?: string;
}): CustomerProfileUpdateActionInterface => ({
    type: 'PROFILE_UPDATE_CUSTOMER_USER',
    _id,
    firstName,
    lastName,
    interestedInExpertiseAreas,
    description,
    phone,
});
export type UserLogoutActionInterface = Action<'LOGOUT_USER'>;

export const userLogoutAction = (): UserLogoutActionInterface => ({
    type: 'LOGOUT_USER',
});

export type UserLogoutSuccessActionInterface = Action<'LOGOUT_USER_SUCCESS'>;

export const userLogoutSuccessAction = (): UserLogoutSuccessActionInterface => ({
    type: 'LOGOUT_USER_SUCCESS',
});

export interface ExpertSignUpActionInterface extends Action<'SIGNUP_EXPERT_USER'> {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    isAnExpertIn: [{ value: string; label: string }];
    description: string;
    phone: string;
    weeklyAvailability: [{ value: string; label: string }];
    profilePictureUrl?: string;
}

export const expertSignUpAction = ({
    email,
    firstName,
    lastName,
    password,
    isAnExpertIn,
    description,
    phone,
    weeklyAvailability,
    profilePictureUrl,
}) => ({
    type: 'SIGNUP_EXPERT_USER',
    email,
    firstName,
    lastName,
    password,
    isAnExpertIn,
    description,
    phone,
    weeklyAvailability,
    profilePictureUrl,
});
export type ExpertLogoutActionInterface = Action<'LOGOUT_EXPERT'>;

export const expertLogoutAction = (): ExpertLogoutActionInterface => ({
    type: 'LOGOUT_EXPERT',
});

export type ExpertLogoutSuccessActionInterface = Action<'LOGOUT_EXPERT_SUCCESS'>;

export const expertLogoutSuccessAction = (): ExpertLogoutSuccessActionInterface => ({
    type: 'LOGOUT_EXPERT_SUCCESS',
});

export interface ExpertLoginActionInterface extends Action<'LOGIN_EXPERT_USER'> {
    email: string;
    password: string;
}

export const expertLoginAction = ({ email, password }): ExpertLoginActionInterface => ({
    type: 'LOGIN_EXPERT_USER',
    email,
    password,
});

export interface setExpertUserActionInterface extends Action<'SET_EXPERT_USER'> {
    expertUser: ExpertUserResponse;
}

export const setExpertUserAction = (expertUser: ExpertUserResponse): setExpertUserActionInterface => ({
    type: 'SET_EXPERT_USER',
    expertUser,
});
