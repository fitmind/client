import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import renderer from 'react-test-renderer';
import store, { history } from '../../redux/store';
import ExpertProfileUpdate from './ExpertProfileUpdate.page';

describe('Expert Profile Update page', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Router history={history}>
                    <ExpertProfileUpdate />
                </Router>
            </Provider>,
        );
    });

    it('should match the snapshot', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router history={history}>
                    <ExpertProfileUpdate />
                </Router>
            </Provider>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
