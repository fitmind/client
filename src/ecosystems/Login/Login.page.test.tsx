import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './Login.page';
import renderer from 'react-test-renderer';
import { Router } from 'react-router';
import store, { history } from '../../redux/store';
import { Provider } from 'react-redux';

describe('LoginPage', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Router history={history}>
                    <LoginPage />
                </Router>
            </Provider>,
        );
    });

    it('should match the snapshot', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router history={history}>
                    <LoginPage />
                </Router>
            </Provider>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
