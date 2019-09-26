import { Reducer } from 'redux';
import { serverActions, ServerActionTypes } from '../../actions/server.actions';
import { CustomerUser } from '../../../interfaces/customer-user';
import { ExpertUser } from '../../../interfaces/expert-user';

export interface ServerStateInterface {
    expertUser?: ExpertUser;
    customerUser?: CustomerUser;
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
        case serverActions.SET_EXPERT_USER:
            return { ...state, expertUser: action.expertUser };
        case serverActions.DELETE_EXPERT_USER:
            return { ...state, expertUser: initialExpert };
        default:
            return state;
    }
};
