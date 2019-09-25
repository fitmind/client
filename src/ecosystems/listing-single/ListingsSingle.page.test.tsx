import React from 'react';
import { shallow } from 'enzyme';
import ListingSinglePage from './ListingsSingle.page';

describe('Customer Dashboard page', () => {
    it('renders without crashing', () => {
        shallow(<ListingSinglePage />);
    });
});
