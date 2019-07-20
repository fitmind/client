import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home.page';

describe('Home page', () => {
    it('renders without crashing', () => {
        shallow(<Home />);
    });
});
