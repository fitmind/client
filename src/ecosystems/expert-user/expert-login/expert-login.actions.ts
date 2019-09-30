import { Action } from 'redux';

export interface ExpertLoginAction extends Action<'LOGIN_EXPERT_USER'> {
    email: string;
    password: string;
}

export const expertUserLoginAction = ({ email, password }): ExpertLoginAction => ({
    type: 'LOGIN_EXPERT_USER',
    email,
    password,
});

export type SetExpertLoggedIn = Action<'SET_EXPERT_LOGGED_IN'>;

export const setExpertLoggedIn = (): SetExpertLoggedIn => ({
    type: 'SET_EXPERT_LOGGED_IN',
});
