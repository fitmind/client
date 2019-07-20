import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NavBar from './Navbar';
import { Router } from 'react-router';
import store, { history, configureStore } from '../../redux/store';
import { ServerInitialState } from '../../redux/reducers/server-reducer/server.reducer';
import { Provider } from 'react-redux';
import { storeInitialState } from '../../redux/reducers/root.reducer';
import { merge, mergeDeepRight } from 'ramda';

describe('NavBar', () => {
    it('renders without crashing', () => {
        shallow(
            <Router history={history}>
                <NavBar />
            </Router>,
        );
    });

    describe('should match the snapshots', () => {
        it('should match when no one is logged in', () => {
            const component = renderer.create(
                <Provider store={store}>
                    <Router history={history}>
                        <NavBar />
                    </Router>
                </Provider>,
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should match when the expert is logged in', () => {
            const mergedProps = mergeDeepRight(storeInitialState, {
                server: { customerUser: {}, expert: { _id: '123' } },
            });
            const storeWithExpert = configureStore(mergedProps);
            const component = renderer.create(
                <Provider store={storeWithExpert}>
                    <Router history={history}>
                        <NavBar />
                    </Router>
                </Provider>,
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should match when the customer is logged in', () => {
            const mergedProps = mergeDeepRight(storeInitialState, {
                server: { customerUser: { _id: '123' }, expert: {} },
            });
            const storeWithExpert = configureStore(mergedProps);
            const component = renderer.create(
                <Provider store={storeWithExpert}>
                    <Router history={history}>
                        <NavBar />
                    </Router>
                </Provider>,
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    // needs snapshot for when the expert is logged in, the normal customer is logged in
});
