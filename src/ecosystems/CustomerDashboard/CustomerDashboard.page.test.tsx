import React from 'react';
import { shallow } from 'enzyme';
import CustomerDashboard from './CustomerDashboard.page';

describe('Customer Dashboard page', () => {
    it('renders without crashing', () => {
        shallow(<CustomerDashboard />);
    });
});
