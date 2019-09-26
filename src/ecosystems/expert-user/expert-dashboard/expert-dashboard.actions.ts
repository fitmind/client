import { Action } from 'redux';
import { ExpertUser } from '../../../interfaces/expert-user';

export type getExpertUserActionInterface = Action<'GET_EXPERT_USER'>;

export const getExpertUserAction = (): getExpertUserActionInterface => ({
    type: 'GET_EXPERT_USER',
});

export interface setExpertUserActionInterface extends Action<'SET_EXPERT_USER'> {
    expertUser: ExpertUser;
}

export const setExpertUserAction = (expertUser: ExpertUser): setExpertUserActionInterface => ({
    type: 'SET_EXPERT_USER',
    expertUser,
});
