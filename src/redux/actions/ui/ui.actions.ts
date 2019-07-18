import { Action } from 'redux';

export const UIActions = {
    LOADING_FALSE: 'LOADING_FALSE',
    LOADING_TRUE: 'LOADING_TRUE',
    SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
};

export interface UiActionTypes {
    type: string;
    errorMessage?: string;
}

export interface setLoadingFalseAction extends Action<'LOADING_FALSE'> {}
export interface setLoadingTrueAction extends Action<'LOADING_TRUE'> {}

export const setLoadingFalse = (): setLoadingFalseAction => ({
    type: 'LOADING_FALSE',
});

export const setLoadingTrue = (): setLoadingTrueAction => ({
    type: 'LOADING_TRUE',
});

export interface SetErrorMessageType extends Action<'SET_ERROR_MESSAGE'> {
    errorMessage: string;
}

export const setErrorMessage = (errorMessage: string): SetErrorMessageType => ({
    type: 'SET_ERROR_MESSAGE',
    errorMessage,
});
