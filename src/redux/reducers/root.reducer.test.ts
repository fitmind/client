import { ApplicationState, storeInitialState } from './root.reducer';
import { configureStore } from '../store';
import { Store } from 'redux';
import { weatherInitialState } from './weather/weather.reducer';

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

    it('should return the initial state from the weather reducer', () => {
        expect(store.getState().weather).toEqual(weatherInitialState);
    });
});
