import React from 'react';
import AppRouter from './AppRouter';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('AppRouter', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <AppRouter />
            </Provider>,
        );
    });
});
