import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store, { history } from '../../redux/store';
import { ExpertProfileUpdate } from './ExpertProfileUpdate.page';

describe('Expert Profile Update page', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Router history={history}>
                    // @ts-ignore
                    <ExpertProfileUpdate />
                </Router>
            </Provider>,
        );
    });
});
