import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './Navbar';
import { Router } from 'react-router';
import { history } from '../../redux/store';
describe('NavBar', () => {
    it('renders without crashing', () => {
        shallow(
            <Router history={history}>
                <NavBar />
            </Router>,
        );
    });
});
