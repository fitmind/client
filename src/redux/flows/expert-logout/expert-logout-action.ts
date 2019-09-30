import { Action } from 'redux';

export type ExpertUserLogoutActionInterface = Action<'LOGOUT_EXPERT'>;

export const expertUserLogoutAction = (): ExpertUserLogoutActionInterface => ({
    type: 'LOGOUT_EXPERT',
});

export type DeleteExpertUser = Action<'DELETE_EXPERT_USER'>;

export const deleteExpertUser = (): DeleteExpertUser => ({
    type: 'DELETE_EXPERT_USER',
});

export type SetExpertLoggedOut = Action<'SET_EXPERT_LOGGED_OUT'>;

export const SetExpertLoggedOut: SetExpertLoggedOut = {
    type: 'SET_EXPERT_LOGGED_OUT',
};
