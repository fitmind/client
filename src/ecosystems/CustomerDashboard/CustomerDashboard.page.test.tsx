import React from 'react';
import { shallow } from 'enzyme';
import CustomerDashboard from './CustomerDashboard.page';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store, { history } from '../../redux/store';
import { Router } from 'react-router';

describe('Customer Dashboard page', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Router history={history}>
                    <CustomerDashboard />
                </Router>
            </Provider>,
        );
    });

    it('should match the snapshot', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router history={history}>
                    <CustomerDashboard />
                </Router>
            </Provider>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
