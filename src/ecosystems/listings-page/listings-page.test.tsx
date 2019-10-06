import React from 'react';
import { shallow } from 'enzyme';
import ListingsPage from './listings-page';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Customer Dashboard page', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <ListingsPage />
            </Provider>,
        );
    });
});
