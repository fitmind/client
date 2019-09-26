import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store, { history } from '../../../redux/store';
import { Router } from 'react-router';
import ExpertDashboard from './expert-dashboard';

describe('Customer Dashboard page', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Router history={history}>
                    // @ts-ignore
                    <ExpertDashboard />
                </Router>
            </Provider>,
        );
    });
});
