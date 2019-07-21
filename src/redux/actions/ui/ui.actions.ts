import { Action } from 'redux';
import { NotificationInterface } from '../../../interfaces/Notification.interface';

export const UIActions = {
    LOADING_FALSE: 'LOADING_FALSE',
    LOADING_TRUE: 'LOADING_TRUE',
    SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
    SET_NOTIFICATION: 'SET_NOTIFICATION',
    CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION',
};

export interface UiActionTypes {
    type: string;
    errorMessage?: string;
    notification?: NotificationInterface;
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

export interface SetNotificationInterface extends Action<'SET_NOTIFICATION'> {
    notification: NotificationInterface;
}

export const setNotification = (notification: NotificationInterface): SetNotificationInterface => ({
    type: 'SET_NOTIFICATION',
    notification,
});

export const clearNotification = (): Action<'CLEAR_NOTIFICATION'> => ({
    type: 'CLEAR_NOTIFICATION',
});
