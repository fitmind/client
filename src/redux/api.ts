import { CustomerUserResponse } from '../interfaces/responses/customer-user-response';
import { UserLoginActionInterface, CustomerSignUpActionInterface } from './actions/server/server.actions';
import { CustomerLoginResponse } from '../interfaces/responses/customer-login-response';

const API_URL = process.env.REACT_APP_SERVER_URL;

const mode = 'cors';
const credentials = 'include';

export async function apiGetUserDashboard(): Promise<CustomerUserResponse> {
    const res = await fetch(`${API_URL}/user/dashboard`, {
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
    const response = await fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        mode,
        credentials,
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
}

export async function apiGetUserMe({ email, password }: UserLoginActionInterface): Promise<CustomerLoginResponse> {
    const response = await fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        mode,
        credentials,
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
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
    const res = await fetch(`${API_URL}user/register`, {
        method: 'post',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: action.email,
            firstName: action.firstName,
            lastName: action.lastName,
            password: action.password,
            interestedInExperiseAreas: action.interestedInExperiseAreas,
            description: action.description,
            phone: action.phone,
        }),
    });
    return res.json();
}
