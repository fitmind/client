import { weatherReducer, weatherInitialState } from './weather.reducer';
import { setWeatherAction, resetWeatherAction } from '../../actions/weather/weather.actions';
import { WeatherExampleResponse } from './weather-example-response';

describe('weather reducer', () => {
    it('should have an initial state and it should return it if the action type is not recognised', () => {
        expect(weatherReducer(weatherInitialState, { type: '' })).toEqual(weatherInitialState);
    });
    it('should handle set weather action', () => {
        expect(weatherReducer(weatherInitialState, setWeatherAction(WeatherExampleResponse))).toEqual(
            WeatherExampleResponse,
        );
    });
    it('should handle reset weather action', () => {
        expect(weatherReducer(weatherInitialState, resetWeatherAction())).toEqual({});
    });
});
