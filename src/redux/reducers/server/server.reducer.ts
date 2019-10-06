import { Reducer } from 'redux';
import { serverActions, ServerActionTypes } from '../../actions/server.actions';
import { CustomerUser } from '../../../interfaces/customer-user';
import { ExpertUser } from '../../../interfaces/expert-user';
import { Listing } from '../../../interfaces/listing';

export interface ServerStateInterface {
    expertUser?: ExpertUser;
    customerUser?: CustomerUser;
    expertLoggedIn: boolean;
    customerLoggedIn: boolean;
    listings?: Listing[];
}

export const initialCustomerUser: CustomerUser = {
    id: '',
    name: '',
    description: '',
    email: '',
    interestedInExpertiseAreas: [],
    pastBookings: [],
    futureBookings: [],
    pictureUrl: '',
};

export const initialExpert: ExpertUser = {
    id: '',
    name: '',
    description: '',
    email: '',
    isAnExpertIn: [],
    pastBookings: [],
    futureBookings: [],
    pictureUrl: '',
    weeklyAvailability: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
    },
    approvedStatus: '',
};

export const ServerInitialState: ServerStateInterface = {
    expertUser: initialExpert,
    customerUser: initialCustomerUser,
    expertLoggedIn: false,
    customerLoggedIn: false,
    listings: [],
};

export const ServerReducer: Reducer<ServerStateInterface> = (
    state: ServerStateInterface = ServerInitialState,
    action: ServerActionTypes,
) => {
    switch (action.type) {
        case serverActions.SET_CUSTOMER_USER:
            return { ...state, customerUser: action.customerUser };
        case serverActions.SET_CUSTOMER_LOGGED_IN:
            return { ...state, customerLoggedIn: true };
        case serverActions.SET_CUSTOMER_LOGGED_OUT:
            return { ...state, customerLoggedIn: false };
        case serverActions.DELETE_CUSTOMER_USER:
            return { ...state, customerUser: initialCustomerUser };
        case serverActions.SET_EXPERT_USER:
            return { ...state, expertUser: action.expertUser };
        case serverActions.SET_EXPERT_LOGGED_IN:
            return { ...state, expertLoggedIn: true };
        case serverActions.SET_EXPERT_LOGGED_OUT:
            return { ...state, expertLoggedIn: false };
        case serverActions.DELETE_EXPERT_USER:
            return { ...state, expertUser: initialExpert };
        case serverActions.SET_LISTINGS:
            return { ...state, listings: action.listings };
        default:
            return state;
    }
};
