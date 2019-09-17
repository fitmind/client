import React from 'react';
import { shallow } from 'enzyme';
import CustomerSignUpPage from './CustomerSignUp.page';
import { Provider } from 'react-redux';
import store, { history } from '../../redux/store';
import { Router } from 'react-router';

describe('Customer SignUp page', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Router history={history}>
                    // @ts-ignore
                    <CustomerSignUpPage />
                </Router>
            </Provider>,
        );
    });
});
