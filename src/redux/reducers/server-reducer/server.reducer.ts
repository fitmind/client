import { Reducer } from 'redux';
import { bookingInterface } from '../../../interfaces/responses/customer-dashboard-response';
import { ListingInterface } from '../../../interfaces/responses/listing-response';
import { ServerActions, ServerActionTypes } from '../../actions/server/server.actions';

export interface expertUserInterface {
    _id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    approvedStatus?: string;
    createdAt?: string;
    description?: string;
    expertise?: string[];
    phone?: string;
    pictureUrl?: string;
    weeklyAvailability?: {};
}

export interface customerUserInterface {
    _id?: string;
    firstName?: string;
    lastName?: string;
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
export interface expertDashboardInterface {
    upcomingBookings: bookingInterface[];
    pastBookings: bookingInterface[];
    liveListings: ListingInterface[];
}

export interface ServerStateInterface {
    expertUser: expertUserInterface;
    customerUser?: customerUserInterface;
    customerDashboard?: customerDashboardInterface;
    expertDashboard?: expertDashboardInterface;
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
        case ServerActions.SET_EXPERT_USER:
            return { ...state, expertUser: action.expertUser };
        case ServerActions.LOGOUT_EXPERT_SUCCESS:
            return { ...state, expertUser: {} };
        case ServerActions.SET_EXPERT_DASHBOARD:
            return { ...state, expertDashboard: action.expertDashboard };
        default:
            return state;
    }
};
