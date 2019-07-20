import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store, { history } from '../redux/store';
import AppRouter from './AppRouter/AppRouter';
import { ConnectedRouter } from 'connected-react-router';

const theme = {
    main: 'mediumseagreen',
};

const App: React.FC = (): JSX.Element => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ThemeProvider theme={theme}>
                    <AppRouter />
                </ThemeProvider>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
