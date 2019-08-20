import { CustomerUserResponse } from '../interfaces/responses/customer-user-response';
import { CustomerLoginResponse } from '../interfaces/responses/customer-login-response';
import { UserLoginActionInterface } from './actions/server/server.actions';

const API_URL = process.env.REACT_APP_SERVER_URL;

const mode = 'cors';
const credentials = 'include';

export async function apiGetUserDashboard(): Promise<CustomerUserResponse> {
    const res = await fetch(`${API_URL}user/dashboard`, {
        method: 'get',
        mode,
        credentials,
        headers: { Accept: 'application/json' },
    });
    return await res.json();
}

export async function apiLoginCustomerUser({
    email,
    password,
}: UserLoginActionInterface): Promise<CustomerLoginResponse> {
    const response = await fetch(`${API_URL}user/login`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        mode,
        credentials,
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
}

export async function apiGetUserMe({ email, password }: UserLoginActionInterface): Promise<CustomerLoginResponse> {
    const response = await fetch(`${API_URL}user/login`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        mode,
        credentials,
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
}

export async function apiLogoutCustomerUser() {
    const res = await fetch(`${API_URL}user/logout`, {
        method: 'post',
        mode,
        credentials,
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
    return await res.json();
}
