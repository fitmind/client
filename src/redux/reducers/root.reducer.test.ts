import { ApplicationState, storeInitialState } from './root.reducer';
import { configureStore } from '../store';
import { Store } from 'redux';

describe('root reducer', () => {
    let store: Store<ApplicationState> = configureStore(storeInitialState);
    const initialRouter = {
        router: {
            action: 'POP',
            location: {
                hash: '',
                pathname: '/',
                search: '',
                state: undefined,
            },
        },
    };
    it('should return an initial state with all the reducers combined', () => {
        expect(store.getState()).toEqual({
            ...storeInitialState,
            ...initialRouter,
        });
    });
});
