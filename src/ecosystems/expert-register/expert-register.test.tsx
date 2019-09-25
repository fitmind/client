import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store, { history } from '../../redux/store';
import { Router } from 'react-router';
import ExpertSignUpPage from './expert-register';

describe('Expert SignUp page', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Router history={history}>
                    // @ts-ignore
                    <ExpertSignUpPage />
                </Router>
            </Provider>,
        );
    });
});
