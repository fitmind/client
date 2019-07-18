import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('App', () => {
    // simple smoke tests - this will pass if the component renders successfully, even when an inner component throws an error
    it('renders without crashing', () => {
        shallow(<App />);
    });
    // example showing how to test that other components live inside a component
    it('should match the snapshot', () => {
        const component = renderer.create(<App />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
