import React from 'react';
import AppRouter from './AppRouter';
import { shallow } from 'enzyme';

describe('AppRouter', () => {
    it('renders without crashing', () => {
        shallow(<AppRouter />);
    });
});
