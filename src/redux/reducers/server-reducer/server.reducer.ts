import { Reducer } from 'redux';
import { ServerActions, ServerActionTypes } from '../../actions/server/server.actions';
import { bookingInterface } from '../../../interfaces/responses/customer-dashboard-response';

export interface expertUserInterface {
    _id?: string;
}

export interface customerUserInterface {
    _id?: string;
    name?: string;
    createdAt?: string;
    description?: string;
    email?: string;
    interestedInExpertiseAreas?: string[];
    phone?: string;
    pictureUrl?: string;
}

export interface customerDashboardInterface {
    upcomingBookings?: bookingInterface[];
    pastBookings?: bookingInterface[];
}

export interface ServerStateInterface {
    expertUser: expertUserInterface;
    customerUser?: customerUserInterface;
    customerDashboard?: customerDashboardInterface;
}

export const ServerInitialState: ServerStateInterface = {
    expertUser: {},
    customerUser: {},
    customerDashboard: {},
};

export const ServerReducer: Reducer<ServerStateInterface> = (
    state: ServerStateInterface = ServerInitialState,
    action: ServerActionTypes,
) => {
    switch (action.type) {
        case ServerActions.SET_CUSTOMER_USER:
            return { ...state, customerUser: action.customerUser };
        case ServerActions.SET_CUSTOMER_DASHBOARD:
            return { ...state, customerDashboard: action.customerDashboard };
        case ServerActions.LOGOUT_USER_SUCCESS:
            return { ...state, customerUser: {} };
        default:
            return state;
    }
};
