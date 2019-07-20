import React from 'react';
import { shallow } from 'enzyme';
import LoginPageWithRouter from './Login.page';
import renderer from 'react-test-renderer';
import { Router } from 'react-router';
import { history } from '../../redux/store';

describe('LoginPage', () => {
    it('renders without crashing', () => {
        shallow(
            <Router history={history}>
                <LoginPageWithRouter />
            </Router>,
        );
    });

    it('should match the snapshot', () => {
        const component = renderer.create(
            <Router history={history}>
                <LoginPageWithRouter />
            </Router>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
