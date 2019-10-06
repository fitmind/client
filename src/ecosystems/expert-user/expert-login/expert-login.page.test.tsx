import React from 'react';
import { shallow } from 'enzyme';
import ExpertLoginPage from './expert-login.page';

describe('LoginPage', () => {
    it('renders without crashing', () => {
        shallow(<ExpertLoginPage />);
    });
});
