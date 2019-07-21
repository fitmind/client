import { UIActions, UiActionTypes } from '../../actions/ui/ui.actions';
import { Reducer } from 'redux';
import { NotificationInterface } from '../../../interfaces/Notification.interface';

export interface UIState {
    loading: boolean;
    errorMessage: string;
    notification?: NotificationInterface;
}

export const emptyNotification = {
    type: '',
    header: '',
    body: '',
};

export const UIInitialState: UIState = {
    loading: false,
    errorMessage: '',
    notification: emptyNotification,
};

export const UIReducer: Reducer<UIState> = (state: UIState = UIInitialState, action: UiActionTypes) => {
    switch (action.type) {
        case UIActions.LOADING_TRUE:
            return { ...state, loading: true };
        case UIActions.LOADING_FALSE:
            return { ...state, loading: false };
        case UIActions.SET_ERROR_MESSAGE:
            return { ...state, errorMessage: action.errorMessage };
        case UIActions.SET_NOTIFICATION:
            return { ...state, notification: action.notification };
        case UIActions.CLEAR_NOTIFICATION:
            return { ...state, notification: emptyNotification };
        default:
            return state;
    }
};
