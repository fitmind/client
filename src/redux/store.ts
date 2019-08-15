import { Store, createStore, applyMiddleware } from 'redux';
import { ApplicationState, storeInitialState, createRootReducer } from './reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga/root.saga';
import { History, createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

// We use hash history because this example is going to be hosted statically.
// Normally you would use browser history.
export const history: History = createBrowserHistory();

export const configureStore = (initialState: ApplicationState): Store<ApplicationState> => {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = composeWithDevTools({});
    let store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
    );

    sagaMiddleware.run(rootSaga);
    return store;
};

const store: Store<ApplicationState> = configureStore(storeInitialState);

export default store;
