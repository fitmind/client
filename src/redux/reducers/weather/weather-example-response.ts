import { weatherResponse } from '../../../interfaces/weather-response';

export const WeatherExampleResponse: weatherResponse = {
    coord: { lon: -0.13, lat: 51.51 },
    weather: [
        { id: 701, main: 'Mist', description: 'mist', icon: '50d' },
        { id: 721, main: 'Haze', description: 'haze', icon: '50d' },
    ],
    base: 'stations',
    main: { temp: 289.08, pressure: 1027, humidity: 87, temp_min: 287.04, temp_max: 290.93 },
    visibility: 10000,
    wind: { speed: 3.6, deg: 60 },
    clouds: { all: 90 },
    dt: 1561538423,
    sys: { type: 1, id: 1414, message: 0.0106, country: 'GB', sunrise: 1561520672, sunset: 1561580511 },
    timezone: 3600,
    id: 2643743,
    name: 'London',
    cod: 200,
};
