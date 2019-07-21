import React from 'react';
import Button from '../../atoms/Button/Button';
import { connect } from 'react-redux';
import { ApplicationState, ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { fetchWeatherAction, resetWeatherAction } from '../../redux/actions/weather/weather.actions';
import styled from 'styled-components';
import { weatherResponse } from '../../interfaces/responses/weather-response';

interface PropsFromState {
    weather?: weatherResponse;
}

interface PropsFromDispatch {
    fetchWeatherAction: typeof fetchWeatherAction;
    resetWeatherAction: typeof resetWeatherAction;
}

type WeatherPageAllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps;

export const WeatherPage: React.FC<WeatherPageAllProps> = ({ fetchWeatherAction, resetWeatherAction, weather }) => (
    <div>
        <h1>Welcome to the weather page</h1>
        <Button action={fetchWeatherAction} text="Fetch Weather from London" />
        <Button action={resetWeatherAction} text="Reset Weather" />

        {weather.main && (
            <WeatherInfo>
                <h1>Weather in London</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Temperature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                        <tr>
                            <td>{weather.main.temp}</td>
                            <td>{weather.main.pressure}</td>
                            <td>{weather.main.humidity}</td>
                        </tr>
                    </tbody>
                </table>
            </WeatherInfo>
        )}
    </div>
);

const mapStateToProps = (state: ApplicationState) => ({
    weather: state.weather,
});

const mapDispatchToProps = {
    fetchWeatherAction,
    resetWeatherAction,
};

const ConnectedWeatherPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(WeatherPage);

export default ConnectedWeatherPage;

const WeatherInfo = styled.div`
    padding-top: 2rem;
`;
