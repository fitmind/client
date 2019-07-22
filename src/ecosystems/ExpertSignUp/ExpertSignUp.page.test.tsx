import React from 'react';
import { shallow } from 'enzyme';
import ExpertSignUpPage from './ExpertSignUp.page';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Customer Dashboard page', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <ExpertSignUpPage />
            </Provider>,
        );
    });
});
