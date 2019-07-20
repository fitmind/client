import { combineReducers, AnyAction, Action } from 'redux';
import { weatherReducer, weatherInitialState } from './weather/weather.reducer';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';
import { Dispatch } from 'react';
import { weatherResponse } from '../../interfaces/weather-response';
import { UIReducer, UIInitialState, UIState } from './ui/ui.reducer';
import { ServerReducer, ServerInitialState, ServerStateInterface } from './server-reducer/server.reducer';

export interface ApplicationState {
    weather: weatherResponse;
    ui: UIState;
    server: ServerStateInterface;
    router?: RouterState;
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        weather: weatherReducer,
        ui: UIReducer,
        server: ServerReducer,
    });

export const storeInitialState = {
    weather: weatherInitialState,
    ui: UIInitialState,
    server: ServerInitialState,
};
