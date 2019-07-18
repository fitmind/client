import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Link', () => {
    it('renders without crashing', () => {
        shallow(<Link page={'diego.com'}>diego.com</Link>);
    });

    it('should change class when hovered', () => {
        const component = renderer.create(<Link page="facebook.com">Facebook</Link>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // manually triggering the callback
        tree.props.onMouseEnter();
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // testing the other possible scenario
        tree.props.onMouseLeave();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('setting the href of the link', () => {
        it('should set page props correctly', () => {
            const wrapper = shallow(<Link page={'diego.com'}>diego.com</Link>);
            expect(wrapper.props().href).toBe('diego.com');
        });
        it('should be set to # if not prop is passed', () => {
            const wrapper = shallow(<Link>testing</Link>);
            expect(wrapper.props().href).toBe('#');
        });
    });

    describe('it should set state accordingly', () => {
        const wrapper = shallow(<Link page={'diego.com'}>diego.com</Link>);
        it('should be initialised with an empty class string', () => {
            expect(wrapper.state('class')).toBe('normal');
        });
        it('should update the state class to hovered on mouse enter and on mouse leave back to normal', () => {
            // events that can be simulated can be found here: https://reactjs.org/docs/events.html
            expect(wrapper.state('class')).toBe('normal');
            wrapper.simulate('mouseEnter');
            expect(wrapper.state('class')).toBe('hovered');
            wrapper.simulate('mouseLeave');
            expect(wrapper.state('class')).toBe('normal');
        });
    });
});
