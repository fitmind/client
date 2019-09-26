import { Action } from 'redux';

export type ExpertUserLogoutActionInterface = Action<'LOGOUT_EXPERT'>;

export const expertUserLogoutAction = (): ExpertUserLogoutActionInterface => ({
    type: 'LOGOUT_EXPERT',
});

export type DeleteExpertUser = Action<'DELETE_EXPERT_USER'>;

export const deleteExpertUser = (): DeleteExpertUser => ({
    type: 'DELETE_EXPERT_USER',
});
