import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NotFoundPage from './NotFound.page';

describe('NotFoundPage', () => {
    it('renders without crashing', () => {
        shallow(<NotFoundPage />);
    });

    it('should match the snapshot', () => {
        const component = renderer.create(<NotFoundPage />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
