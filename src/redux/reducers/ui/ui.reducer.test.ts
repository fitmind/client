import { UIReducer, UIInitialState } from './ui.reducer';
import { setLoadingTrue, setLoadingFalse, setErrorMessage } from '../../actions/ui/ui.actions';

describe('UI reducer', () => {
    const initialReducer = UIReducer(UIInitialState, { type: '' });
    it('should have an initial state', () => {
        expect(initialReducer).toEqual(UIInitialState);
    });

    it('should handle set ui loading to true', () => {
        expect(UIReducer(UIInitialState, setLoadingTrue())).toEqual({
            loading: true,
            errorMessage: '',
        });
    });

    it('should handle set ui loading to false', () => {
        expect(UIReducer(UIInitialState, setLoadingFalse())).toEqual(UIInitialState);
    });

    it('should handle set error message', () => {
        expect(UIReducer(UIInitialState, setErrorMessage('error happened'))).toEqual({
            loading: false,
            errorMessage: 'error happened',
        });
    });
});
