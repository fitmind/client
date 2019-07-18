import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { WeatherPage } from './Weather.page';
import { fetchWeatherAction, resetWeatherAction } from '../../redux/actions/weather/weather.actions';
import { WeatherExampleResponse } from '../../redux/reducers/weather/weather-example-response';

describe('WeatherPage', () => {
    const props = {
        fetchWeatherAction,
        resetWeatherAction,
        weather: {},
        dispatch: jest.fn(),
    };
    const wrapper = shallow(<WeatherPage {...props} />);
    it('renders without crashing', () => {
        shallow(<WeatherPage {...props} />);
    });
    it('should render subcomponents', () => {
        expect(wrapper.find('h1')).toBeDefined();
        expect(
            wrapper
                .find('Button')
                .first()
                .render()
                .text(),
        ).toEqual('Fetch Weather from London');
        expect(
            wrapper
                .find('Button')
                .last()
                .render()
                .text(),
        ).toEqual('Reset Weather');
    });

    it('should match snapshot', () => {
        const component = renderer.create(<WeatherPage {...props} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('When weather props are present', () => {
        const propsWithWeather = {
            ...props,
            weather: WeatherExampleResponse,
        };
        const wrapperWithWeather = shallow(<WeatherPage {...propsWithWeather} />);
        it('should render component and sub components', () => {
            expect(
                wrapperWithWeather
                    .find('h1')
                    .last()
                    .render()
                    .text(),
            ).toEqual('Weather in London');
            expect(wrapperWithWeather.find('table')).toBeDefined();
        });

        it('should match snapshot', () => {
            const component = renderer.create(<WeatherPage {...propsWithWeather} />);
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render the right values from the weather example response in the table', () => {
            // testing temperature
            expect(
                wrapperWithWeather
                    .find('td')
                    .first()
                    .render()
                    .text(),
            ).toBe('289.08');
            // testing pressure
            expect(
                wrapperWithWeather
                    .find('td')
                    .at(1)
                    .render()
                    .text(),
            ).toBe('1027');
            // testing humidity
            expect(
                wrapperWithWeather
                    .find('td')
                    .last()
                    .render()
                    .text(),
            ).toBe('87');
        });
    });
});
