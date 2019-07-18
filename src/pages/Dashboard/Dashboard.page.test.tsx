import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Router } from 'react-router';
import { history } from '../../redux/store';
import DashboardPage from './Dashboard.page';

describe('DashboardPage', () => {
    it('renders without crashing', () => {
        shallow(
            <Router history={history}>
                <DashboardPage />
            </Router>,
        );
    });

    it('should match the snapshot', () => {
        const component = renderer.create(
            <Router history={history}>
                <DashboardPage />
            </Router>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
