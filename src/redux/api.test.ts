import {
    customerProfileUpdateAction,
    customerSignUpAction,
    expertLoginAction,
    userLoginAction,
} from './actions/server/server.actions';
import {
    apiGetExpertMe,
    apiGetUserDashboard,
    apiGetUserMe,
    apiLoginCustomerUser,
    apiLoginExpertUser,
    apiLogoutCustomerUser,
    apiProfileUpdateCustomerUser,
    apiSignUpCustomerUser,
} from './api';
import { ExpertLoginExampleResponse } from './reducers/server-reducer/server-example-responses/expert-login-example-response';
import { ExpertUserExampleResponse } from './reducers/server-reducer/server-example-responses/expert-me-example-response';
import { CustomerDashboardExampleResponse } from './reducers/server-reducer/server-example-responses/user-dashboard-example-response';
import { CustomerLoginExampleResponse } from './reducers/server-reducer/server-example-responses/user-login-example-response';
import { CustomerLogoutExampleResponse } from './reducers/server-reducer/server-example-responses/user-logout-example-response';
import { CustomerUserExampleResponse } from './reducers/server-reducer/server-example-responses/user-me-example-response';
import { CustomerProfileUpdateExampleResponse } from './reducers/server-reducer/server-example-responses/user-profile-update-example-response';
import { CustomerSignUpExampleResponse } from './reducers/server-reducer/server-example-responses/user-signup-example-response';

describe('api', () => {
    test('api apiLoginCustomerUser', done => {
        const mockLogin = userLoginAction({
            email: 'test@fitmind.io',
            password: 'asd@123',
        });
        window.fetch = jest
            .fn()
            .mockImplementation(() => Promise.resolve({ json: () => CustomerLoginExampleResponse }));
        apiLoginCustomerUser(mockLogin).then(res => {
            expect(res).toEqual(CustomerLoginExampleResponse);
            done();
        });
    });

    test('api apiLogoutCustomerUser', done => {
        window.fetch = jest
            .fn()
            .mockImplementation(() => Promise.resolve({ json: () => CustomerLogoutExampleResponse }));
        apiLogoutCustomerUser().then(res => {
            expect(res).toEqual(CustomerLogoutExampleResponse);
            done();
        });
    });

    test('api apiGetUserMe', done => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => CustomerUserExampleResponse }));
        apiGetUserMe().then(res => {
            expect(res.json()).toEqual(CustomerUserExampleResponse);
            done();
        });
    });

    test('api apiGetUserDashboard', done => {
        window.fetch = jest
            .fn()
            .mockImplementation(() => Promise.resolve({ json: () => CustomerDashboardExampleResponse }));
        apiGetUserDashboard().then(res => {
            expect(res.json()).toEqual(CustomerDashboardExampleResponse);
            done();
        });
    });

    test('api apiSignUpCustomerUser', done => {
        const mockSignup = customerSignUpAction({
            email: 'hello@fitmind.io',
            firstName: 'Fitmind',
            lastName: 'User',
            password: 'asd@123',
            interestedInExpertiseAreas: ['YOGA_TEACHER'],
            description: 'blahblah',
            phone: '123123123',
        });
        window.fetch = jest
            .fn()
            .mockImplementation(() => Promise.resolve({ json: () => CustomerSignUpExampleResponse }));
        apiSignUpCustomerUser(mockSignup).then(res => {
            expect(res).toEqual(CustomerSignUpExampleResponse);
            done();
        });
    });
    test('api apiProfileUpdateCustomerUser', done => {
        const mockSignup = customerProfileUpdateAction({
            _id: '12312',
            firstName: 'Fitmind',
            lastName: 'User',
            interestedInExpertiseAreas: ['YOGA_TEACHER'],
            description: 'blahblah',
            phone: '123123123',
        });
        window.fetch = jest
            .fn()
            .mockImplementation(() => Promise.resolve({ json: () => CustomerProfileUpdateExampleResponse }));
        apiProfileUpdateCustomerUser(mockSignup).then(res => {
            expect(res.json()).toEqual(CustomerProfileUpdateExampleResponse);
            done();
        });
    });

    test('api apiLoginExpertUser', done => {
        const mockLogin = expertLoginAction({
            email: 'test@fitmind.io',
            password: 'asd@123',
        });
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => ExpertLoginExampleResponse }));
        apiLoginExpertUser(mockLogin).then(res => {
            expect(res).toEqual(ExpertLoginExampleResponse);
            done();
        });
    });
    test('api apiGetExpertMe', done => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => ExpertUserExampleResponse }));
        apiGetExpertMe().then(res => {
            expect(res.json()).toEqual(ExpertUserExampleResponse);
            done();
        });
    });
});
