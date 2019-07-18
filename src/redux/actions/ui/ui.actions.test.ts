import { setLoadingFalse, setLoadingTrue, SetErrorMessageType, setErrorMessage } from './ui.actions';

describe('UI actions', () => {
    describe('set loading false', () => {
        it('should return the correct type when called', () => {
            const expectedAction = {
                type: 'LOADING_FALSE',
            };
            expect(setLoadingFalse()).toEqual(expectedAction);
        });
    });

    describe('set loading true', () => {
        it('should return the correct type when called', () => {
            const expectedAction = {
                type: 'LOADING_TRUE',
            };
            expect(setLoadingTrue()).toEqual(expectedAction);
        });
    });

    describe('set error message', () => {
        it('should return the correct type and message', () => {
            const errorMessage = 'error';
            const expectedAction: SetErrorMessageType = {
                type: 'SET_ERROR_MESSAGE',
                errorMessage: errorMessage,
            };
            expect(setErrorMessage(errorMessage)).toEqual(expectedAction);
        });
    });
});
