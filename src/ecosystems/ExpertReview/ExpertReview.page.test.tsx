import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Router } from 'react-router';
import { history } from '../../redux/store';
import ExpertReviewPage from './ExpertReview.page';

describe('ExpertReviewPage', () => {
    it('renders without crashing', () => {
        shallow(
            <Router history={history}>
                <ExpertReviewPage />
            </Router>,
        );
    });

    it('should match the snapshot', () => {
        const component = renderer.create(
            <Router history={history}>
                <ExpertReviewPage />
            </Router>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
