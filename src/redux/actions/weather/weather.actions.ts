import { Action } from 'redux';
import { weatherResponse } from '../../../interfaces/weather-response';
import { apiFetchWeather } from '../../api';

export const WEATHER_ACTIONS = {
    FETCH_WEATHER: 'FETCH_WEATHER',
    RESET_WEATHER: 'RESET_WEATHER',
    SET_WEATHER: 'SET_WEATHER',
};

export interface FetchWeatherActionType extends Action<'FETCH_WEATHER'> {
    apiCall: () => Promise<weatherResponse>;
}

export const fetchWeatherAction = (): FetchWeatherActionType => ({
    type: 'FETCH_WEATHER',
    apiCall: apiFetchWeather,
});

export interface SetWeatherAction extends Action<'SET_WEATHER'> {
    weather: weatherResponse;
}

export const setWeatherAction = (weather: weatherResponse): SetWeatherAction => ({
    type: 'SET_WEATHER',
    weather,
});

export const resetWeatherAction = (): Action<'RESET_WEATHER'> => ({
    type: 'RESET_WEATHER',
});
