import { CustomerLoginResponse } from '../interfaces/responses/customer-login-response';

import {
    CustomerProfileUpdateActionInterface,
    ExpertLoginActionInterface,
    UserLoginActionInterface,
} from './actions/server/server.actions';
import { ExpertLoginResponse } from '../interfaces/responses/expert-login-response';

const API_URL = process.env.REACT_APP_SERVER_URL;

const mode = 'cors';
const credentials = 'include';

export async function apiGetUserDashboard() {
    return await fetch(`${API_URL}/user/dashboard`, {
        method: 'get',
        mode,
        credentials,
        headers: { Accept: 'application/json' },
    });
}

export async function apiLoginCustomerUser({
    email,
    password,
}: UserLoginActionInterface): Promise<CustomerLoginResponse> {
    const response = await fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        mode,
        credentials,
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
}

export async function apiGetUserMe() {
    return await fetch(`${API_URL}/user/me`, {
        method: 'GET',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        mode,
        credentials,
    });
}

export async function apiLogoutCustomerUser() {
    const res = await fetch(`${API_URL}/user/logout`, {
        method: 'post',
        mode,
        credentials,
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
    return await res.json();
}

export async function apiSignUpCustomerUser(action) {
    const res = await fetch(`${API_URL}/user/register`, {
        method: 'post',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: action.email,
            firstName: action.firstName,
            lastName: action.lastName,
            password: action.password,
            interestedInExpertiseAreas: action.interestedInExpertiseAreas,
            description: action.description,
            phone: action.phone,
        }),
    });
    return res.json();
}

export async function apiSignUpExpertUser(action) {
    const res = await fetch(`${API_URL}/expert/register`, {
        method: 'post',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: action.email,
            firstName: action.firstName,
            lastName: action.lastName,
            password: action.password,
            isAnExpertIn: action.isAnExpertIn,
            description: action.description,
            phone: action.phone,
            weeklyAvailability: action.weeklyAvailability,
        }),
    });
    return res.json();
}

export async function apiProfileUpdateCustomerUser(action: CustomerProfileUpdateActionInterface) {
    return await fetch(`${API_URL}/user/me`, {
        method: 'put',
        mode,
        credentials,
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: action.firstName,
            lastName: action.lastName,
            interestedInExpertiseAreas: action.interestedInExpertiseAreas,
            description: action.description,
            phone: action.phone,
        }),
    });
}

export async function apiLoginExpertUser({
    email,
    password,
}: ExpertLoginActionInterface): Promise<ExpertLoginResponse> {
    const response = await fetch(`${API_URL}/expert/login`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        mode,
        credentials,
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
}

export async function apiGetExpertMe() {
    return await fetch(`${API_URL}/expert/me`, {
        method: 'GET',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        mode,
        credentials,
    });
}

export async function apiLogoutExpertUser() {
    const res = await fetch(`${API_URL}/expert/logout`, {
        method: 'post',
        mode,
        credentials,
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
    return await res.json();
}

export async function apiGetExpertDashboard() {
    return await fetch(`${API_URL}/expert/dashboard`, {
        method: 'get',
        mode,
        credentials,
        headers: { Accept: 'application/json' },
    });
}
