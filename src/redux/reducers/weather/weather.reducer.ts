import { WEATHER_ACTIONS } from '../../actions/weather/weather.actions';
import { Reducer } from 'redux';
import { weatherResponse } from '../../../interfaces/weather-response';

export const weatherInitialState: weatherResponse = {};

const reducer: Reducer<weatherResponse> = (state: weatherResponse = weatherInitialState, action) => {
    switch (action.type) {
        case WEATHER_ACTIONS.SET_WEATHER:
            return { ...action.weather };
        case WEATHER_ACTIONS.RESET_WEATHER:
            return weatherInitialState;
        default:
            return state;
    }
};

export { reducer as weatherReducer };
