import React from 'react';
import { shallow } from 'enzyme';
import CustomerDashboard from './CustomerDashboard.page';
import { Provider } from 'react-redux';
import store, { history } from '../../redux/store';
import { Router } from 'react-router';

describe('Customer Dashboard page', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Router history={history}>
                    // @ts-ignore
                    <CustomerDashboard />
                </Router>
            </Provider>,
        );
    });
});
