import React from 'react';
import { shallow } from 'enzyme';
import store, { configureStore } from '../../redux/store';
import { Provider } from 'react-redux';
import Notification from './Notification';
import { storeInitialState } from '../../redux/reducers/root.reducer';
import { mergeDeepRight } from 'ramda';
import renderer from 'react-test-renderer';

describe('Loading Component', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Notification />
            </Provider>,
        );
    });
    it('should match the snapshot when the notification is positive', () => {
        const mergedProps = mergeDeepRight(storeInitialState, {
            ui: { notification: { type: 'positive', header: `Welcome Diego`, body: 'some body in the text' } },
        });
        const storeWithNotificationPositive = configureStore(mergedProps);
        const component = renderer.create(
            <Provider store={storeWithNotificationPositive}>
                <Notification />
            </Provider>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should match the snapshot when the notification is error', () => {
        const mergedProps = mergeDeepRight(storeInitialState, {
            ui: { notification: { type: 'error', header: `Welcome Diego`, body: 'some body in the text' } },
        });
        const storeWithNotificationNegative = configureStore(mergedProps);
        const component = renderer.create(
            <Provider store={storeWithNotificationNegative}>
                <Notification />
            </Provider>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should match the snapshot when the notification is blank', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Notification />
            </Provider>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
