import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Router } from 'react-router';
import { history } from '../../redux/store';
import ListingReviewPage from './ListingReview.page';

describe('ListingReviewPage', () => {
    it('renders without crashing', () => {
        shallow(
            <Router history={history}>
                <ListingReviewPage />
            </Router>,
        );
    });

    it('should match the snapshot', () => {
        const component = renderer.create(
            <Router history={history}>
                <ListingReviewPage />
            </Router>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
