import React from 'react';
import { shallow } from 'enzyme';
import CustomerProfileUpdate from './CustomerProfileUpdate.page';
import { Provider } from 'react-redux';
import store, { history } from '../../redux/store';
import { Router } from 'react-router';

describe('Customer Profile Update page', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Router history={history}>
                    // @ts-ignore
                    <CustomerProfileUpdate />
                </Router>
            </Provider>,
        );
    });
});
