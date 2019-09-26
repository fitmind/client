import { combineReducers, AnyAction, Action } from 'redux';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';
import { Dispatch } from 'react';
import { UIReducer, UIInitialState, UIState } from './ui/ui.reducer';
import { ServerReducer, ServerInitialState, ServerStateInterface } from './server/server.reducer';

export interface ApplicationState {
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
        ui: UIReducer,
        server: ServerReducer,
    });

export const storeInitialState = {
    ui: UIInitialState,
    server: ServerInitialState,
};
