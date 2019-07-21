import { UiActionTypes } from '../../actions/ui/ui.actions';
import { Reducer } from 'redux';
import { ServerActions, ServerActionTypes } from '../../actions/server/server.actions';

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
    action: ServerActionTypes,
) => {
    switch (action.type) {
        case ServerActions.SET_CUSTOMER_USER:
            return { ...state, customerUser: action.customerUser };
        default:
            return state;
    }
};
