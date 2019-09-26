import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home.page';

describe('home page', () => {
    it('renders without crashing', () => {
        shallow(<Home />);
    });
});
