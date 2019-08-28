import React from 'react';
import { shallow } from 'enzyme';
import ExpertDashboard from './ExpertDashboard.page';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store, { history } from '../../redux/store';
import { Router } from 'react-router';

describe('Expert Dashboard page', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Router history={history}>
                    <ExpertDashboard />
                </Router>
            </Provider>,
        );
    });

    it('should match the snapshot', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router history={history}>
                    <ExpertDashboard />
                </Router>
            </Provider>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
