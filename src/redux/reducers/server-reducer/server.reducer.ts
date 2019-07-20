import { UIActions, UiActionTypes } from '../../actions/ui/ui.actions';
import { Reducer } from 'redux';

export interface expertUserInterface {
    _id?: string;
}

export interface customerUserInterface {
    _id?: string;
}

export interface ServerStateInterface {
    expertUser: expertUserInterface;
    customerUser?: customerUserInterface;
}

export const ServerInitialState: ServerStateInterface = {
    expertUser: {},
    customerUser: {},
};

export const ServerReducer: Reducer<ServerStateInterface> = (
    state: ServerStateInterface = ServerInitialState,
    action: UiActionTypes,
) => {
    switch (action.type) {
        default:
            return state;
    }
};
