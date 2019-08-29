import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store, { history } from '../../redux/store';
import { Router } from 'react-router';
import ExpertSignUpPage from './ExpertSignUp.page';

describe('Expert SignUp page', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Router history={history}>
                    <ExpertSignUpPage />
                </Router>
            </Provider>,
        );
    });

    // it('should match the snapshot', () => {
    //     const component = renderer.create(
    //         <Provider store={store}>
    //             <Router history={history}>
    //                 <ExpertSignUpPage />
    //             </Router>
    //         </Provider>,
    //     );
    //     let tree = component.toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
});
