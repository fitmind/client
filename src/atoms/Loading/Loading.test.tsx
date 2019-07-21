import React from 'react';
import { shallow } from 'enzyme';
import store, { configureStore } from '../../redux/store';
import { Provider } from 'react-redux';
import Loading from './Loading';
import { storeInitialState } from '../../redux/reducers/root.reducer';
import { mergeDeepRight } from 'ramda';
import renderer from 'react-test-renderer';

describe('Loading Component', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Loading />
            </Provider>,
        );
    });
    it('should match the snapshot when the loading state is true', () => {
        const mergedProps = mergeDeepRight(storeInitialState, {
            ui: { loading: true },
        });
        const storeWithLoadingTrue = configureStore(mergedProps);
        const component = renderer.create(
            <Provider store={storeWithLoadingTrue}>
                <Loading />
            </Provider>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should match the snapshot when the loading state is fakse', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Loading />
            </Provider>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
