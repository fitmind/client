import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import renderer from 'react-test-renderer';

const BUTTON_TEXT = 'button name';

const mock = jest.fn();
const BUTTON_FUNC = mock;

describe('button', () => {
    const wrapper = shallow(<Button text={BUTTON_TEXT} action={BUTTON_FUNC} />);
    it('renders without crashing', () => {
        shallow(<Button text={BUTTON_TEXT} action={BUTTON_FUNC} />);
    });

    it('should render the text inside the button', () => {
        expect(wrapper.text()).toBe(BUTTON_TEXT);
    });

    it('it should call the function from inside the button', () => {
        wrapper.simulate('click');
        expect(mock).toHaveBeenCalledTimes(1);
    });

    it('should match the snapshots', () => {
        const component = renderer.create(<Button text={BUTTON_TEXT} action={BUTTON_FUNC} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
