import { handleFetch } from './weather.saga';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { WeatherExampleResponse } from '../reducers/weather/weather-example-response';
import { WEATHER_ACTIONS, fetchWeatherAction } from '../actions/weather/weather.actions';
import { call } from 'redux-saga/effects';

describe('weather saga', () => {
    const action = fetchWeatherAction();
    it('it fetches the weathger', () => {
        return expectSaga(handleFetch, action)
            .provide([[call(action.apiCall), WeatherExampleResponse]])
            .put({
                type: 'LOADING_FALSE',
            })
            .put({
                type: WEATHER_ACTIONS.SET_WEATHER,
                weather: WeatherExampleResponse,
            })
            .dispatch({
                type: 'LOADING_TRUE',
            })
            .run();
    });

    it('handles errors', () => {
        return (
            expectSaga(handleFetch, action)
                // There is also a way of mocking the api return values with matchers
                .provide([[matchers.call.fn(action.apiCall), { error: 'could not fetch' }]])
                .put({
                    type: 'LOADING_FALSE',
                })
                .put({
                    type: 'SET_ERROR_MESSAGE',
                    errorMessage: 'error fetching the data',
                })
                .dispatch({
                    type: 'LOADING_TRUE',
                })
                .run()
        );
    });
});
