import React from 'react';
import { shallow } from 'enzyme';
import ExpertLoginPage from './ExpertLogin.page';

describe('LoginPage', () => {
    it('renders without crashing', () => {
        shallow(<ExpertLoginPage />);
    });
});
