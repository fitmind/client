import React from 'react';
import AppRouter from './AppRouter';
import { shallow } from 'enzyme';
import store from '../../redux/store';
import { Provider } from 'react-redux';

describe('AppRouter', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <AppRouter />
            </Provider>,
        );
    });
});
