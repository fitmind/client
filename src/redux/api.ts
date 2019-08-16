import { weatherResponse } from '../interfaces/responses/weather-response';
import { CustomerUserResponse } from '../interfaces/responses/customer-user-response';
import { userLoginActionInterface, customerSignUpActionInterface } from './actions/server/server.actions';

const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const URL = 'http://api.openweathermap.org/data/2.5/weather?q=london&APPID=';
const FULL_URL = `${URL}${WEATHER_API_KEY}`;
const API_URL = process.env.REACT_APP_SERVER_URL;

export async function apiFetchWeather(): Promise<weatherResponse> {
    const res = await fetch(FULL_URL, { method: 'get', headers: { Accept: 'application/json' } });
    return await res.json();
}

export async function apiGetUserMe(): Promise<CustomerUserResponse> {
    const res = await fetch(`${API_URL}user/me`, { method: 'get', headers: { Accept: 'application/json' } });
    return await res.json();
}

// Sets cookie for the customer user
export async function apiLoginCustomerUser(action: userLoginActionInterface) {
    const res = await fetch(`${API_URL}user/login`, {
        method: 'post',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: action.email, password: action.password }),
    });
    return res;
}

export async function apiSignUpCustomerUser(action: customerSignUpActionInterface) {
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
    return res;
}
