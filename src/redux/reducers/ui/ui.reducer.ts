import { UIActions, UiActionTypes } from '../../actions/ui/ui.actions';
import { Reducer } from 'redux';

export interface UIState {
    loading: boolean;
    errorMessage: string;
}

export const UIInitialState: UIState = {
    loading: false,
    errorMessage: '',
};

export const UIReducer: Reducer<UIState> = (state: UIState = UIInitialState, action: UiActionTypes) => {
    switch (action.type) {
        case UIActions.LOADING_TRUE:
            return { ...state, loading: true };
        case UIActions.LOADING_FALSE:
            return { ...state, loading: false };
        case UIActions.SET_ERROR_MESSAGE:
            return { ...state, errorMessage: action.errorMessage };
        default:
            return state;
    }
};
