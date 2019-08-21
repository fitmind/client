import { UserLoginActionInterface, CustomerSignUpActionInterface } from './actions/server/server.actions';
import { CustomerLoginResponse } from '../interfaces/responses/customer-login-response';

const API_URL = process.env.REACT_APP_SERVER_URL;

const mode = 'cors';
const credentials = 'include';

export async function apiGetUserDashboard() {
    const res = await fetch(`${API_URL}/user/dashboard`, {
        method: 'get',
        mode,
        credentials,
        headers: { Accept: 'application/json' },
    });
    return res;
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
    const response = await fetch(`${API_URL}/user/me`, {
        method: 'GET',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        mode,
        credentials,
    });
    return await response;
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

export async function apiSignUpCustomerUser(action: CustomerSignUpActionInterface) {
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
