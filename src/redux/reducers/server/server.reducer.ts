import { Reducer } from 'redux';
import { serverActions, ServerActionTypes } from '../../actions/server.actions';
import { customerUser } from '../../../interfaces/customer-user';
import { expertUser } from '../../../interfaces/expert-user';

export interface ServerStateInterface {
    expertUser?: expertUser;
    customerUser?: customerUser;
}

export const initialCustomerUser: customerUser = {
    id: '',
    name: '',
    description: '',
    email: '',
    interestedInExpertiseAreas: [],
    pastBookings: [],
    futureBookings: [],
    pictureUrl: '',
};

export const initialExpert: expertUser = {
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
};

export const ServerReducer: Reducer<ServerStateInterface> = (
    state: ServerStateInterface = ServerInitialState,
    action: ServerActionTypes,
) => {
    switch (action.type) {
        case serverActions.SET_CUSTOMER_USER:
            return { ...state, customerUser: action.customerUser };
        case serverActions.DELETE_CUSTOMER_USER:
            return { ...state, customerUser: initialCustomerUser };
        default:
            return state;
    }
};
