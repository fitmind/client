import React from 'react';
import { shallow } from 'enzyme';
import CustomerSignUpPage from './CustomerSignUp.page';

describe('Customer Dashboard page', () => {
    it('renders without crashing', () => {
        shallow(<CustomerSignUpPage />);
    });
});
