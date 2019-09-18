import { Reducer } from 'redux';
import { bookingInterface } from '../../../interfaces/responses/customer-dashboard-response';
import { ListingInterface } from '../../../interfaces/responses/listing-response';
import { TimeSlotInterface } from '../../../interfaces/responses/time-slot-response';
import { ServerActions, ServerActionTypes } from '../../actions/server/server.actions';

export interface customerUserInterface {
    _id?: string;
    firstName?: string;
    lastName?: string;
    createdAt?: string;
    description?: string;
    email?: string;
    interestedInExpertiseAreas?: any;
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

export interface expertUserInterface {
    _id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    approvedStatus?: string;
    createdAt?: string;
    description?: string;
    isAnExpertIn?: string[];
    phone?: string;
    profilePictureUrl?: string;
    weeklyAvailability?: {
        monday: TimeSlotInterface[];
        tuesday: TimeSlotInterface[];
        wednesday: TimeSlotInterface[];
        thursday: TimeSlotInterface[];
        friday: TimeSlotInterface[];
        saturday: TimeSlotInterface[];
        sunday: TimeSlotInterface[];
    };
}

export interface ServerStateInterface {
    expertUser?: expertUserInterface;
    customerUser?: customerUserInterface;
    customerDashboard?: customerDashboardInterface;
    expertDashboard?: expertDashboardInterface;
}

export const ServerInitialState: ServerStateInterface = {
    expertUser: {
        weeklyAvailability: {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: [],
        },
    },
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
