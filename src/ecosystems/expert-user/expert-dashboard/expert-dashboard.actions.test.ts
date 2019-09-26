import {
    getExpertUserAction,
    getExpertUserActionInterface,
    setExpertUserAction,
    setExpertUserActionInterface,
} from './expert-dashboard.actions';
import { getExpertUserMockResponse } from '../../../tests/mock-responses/get-expert-user';

describe('GET_EXPERT_USER', () => {
    it('should return the correct type and data', () => {
        const expectedAction: getExpertUserActionInterface = {
            type: 'GET_EXPERT_USER',
        };
        expect(getExpertUserAction()).toEqual(expectedAction);
    });
});

describe('SET_EXPERT_USER', () => {
    it('should return the correct type and data', () => {
        const expectedAction: setExpertUserActionInterface = {
            type: 'SET_EXPERT_USER',
            expertUser: getExpertUserMockResponse,
        };

        expect(setExpertUserAction(getExpertUserMockResponse)).toEqual(expectedAction);
    });
});
