import React from 'react';
import { shallow } from 'enzyme';
import CustomerProfileUpdate from './CustomerProfileUpdate.page';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store, { history } from '../../redux/store';
import { Router } from 'react-router';

describe('Customer Profile Update page', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Router history={history}>
                    <CustomerProfileUpdate />
                </Router>
            </Provider>,
        );
    });

    it('should match the snapshot', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router history={history}>
                    <CustomerProfileUpdate />
                </Router>
            </Provider>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
