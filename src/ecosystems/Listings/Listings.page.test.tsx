import React from 'react';
import { shallow } from 'enzyme';
import ListingsPage from './Listings.page';

describe('Customer Dashboard page', () => {
    it('renders without crashing', () => {
        shallow(<ListingsPage />);
    });
});
