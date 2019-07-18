import { apiFetchWeather } from './api';
import { WeatherExampleResponse } from './reducers/weather/weather-example-response';

describe('api', () => {
    test('api fetch weather', done => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => WeatherExampleResponse }));
        apiFetchWeather().then(res => {
            expect(res).toEqual(WeatherExampleResponse);
            done();
        });
    });
});
