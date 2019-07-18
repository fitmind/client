import { weatherResponse } from '../interfaces/weather-response';

const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const URL = 'http://api.openweathermap.org/data/2.5/weather?q=london&APPID=';
const FULL_URL = `${URL}${WEATHER_API_KEY}`;

export async function apiFetchWeather(): Promise<weatherResponse> {
    const res = await fetch(FULL_URL, { method: 'get', headers: { Accept: 'application/json' } });
    return await res.json();
}
