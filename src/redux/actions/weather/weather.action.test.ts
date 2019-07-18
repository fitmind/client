import { Store } from 'redux';
import { ApplicationState } from '../../reducers/root.reducer';
import { configureStore } from '../../store';
import { fetchWeatherAction, resetWeatherAction, setWeatherAction, WEATHER_ACTIONS } from './weather.actions';
import { weatherInitialState } from '../../reducers/weather/weather.reducer';
import { WeatherExampleResponse } from '../../reducers/weather/weather-example-response';
import { apiFetchWeather } from '../../api';

describe('weather action', () => {
    describe('set weather action', () => {
        it('should return the correct type and weather data', () => {
            const expectedAction = {
                type: WEATHER_ACTIONS.SET_WEATHER,
                weather: WeatherExampleResponse,
            };
            expect(setWeatherAction(WeatherExampleResponse)).toEqual(expectedAction);
        });
    });

    describe('fetch weather action', () => {
        it('should return the correct type', () => {
            const expectedAction = {
                type: WEATHER_ACTIONS.FETCH_WEATHER,
                apiCall: apiFetchWeather,
            };
            expect(fetchWeatherAction()).toEqual(expectedAction);
        });
    });

    describe('reset weather action', () => {
        it('should return the correct type', () => {
            const expectedAction = {
                type: WEATHER_ACTIONS.RESET_WEATHER,
            };
            expect(resetWeatherAction()).toEqual(expectedAction);
        });
    });
});
