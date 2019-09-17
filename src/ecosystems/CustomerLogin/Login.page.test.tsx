import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './Login.page';
import { Router } from 'react-router';
import store, { history } from '../../redux/store';
import { Provider } from 'react-redux';

describe('LoginPage', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Router history={history}>
                    // @ts-ignore
                    <LoginPage />
                </Router>
            </Provider>,
        );
    });
});
