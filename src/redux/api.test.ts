import { apiSignUpCustomerUser, apiProfileUpdateCustomerUser, apiSignUpExpertUser } from './api';
import { CustomerSignUpExampleResponse } from './reducers/server-reducer/server-example-responses/user-signup-example-response';
import { customerSignUpAction, customerProfileUpdateAction, expertSignUpAction } from './actions/server/server.actions';
import { CustomerLoginExampleResponse } from './reducers/server-reducer/server-example-responses/user-login-example-response';
import { apiLoginCustomerUser, apiLogoutCustomerUser, apiGetUserMe, apiGetUserDashboard } from './api';
import { userLoginAction } from './actions/server/server.actions';
import { CustomerLogoutExampleResponse } from './reducers/server-reducer/server-example-responses/user-logout-example-response';
import { CustomerUserExampleResponse } from './reducers/server-reducer/server-example-responses/user-me-example-response';
import { CustomerDashboardExampleResponse } from './reducers/server-reducer/server-example-responses/user-dashboard-example-response';
import { CustomerProfileUpdateExampleResponse } from './reducers/server-reducer/server-example-responses/user-profile-update-example-response';
import { ExpertSignUpExampleResponse } from './reducers/server-reducer/server-example-responses/expert-signup-example-response';

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
    test('api apiSignUpExpertUser', done => {
        const mockSignup = expertSignUpAction({
            email: 'hello@fitmind.io',
            firstName: 'Fitmind',
            lastName: 'User',
            password: 'asd@123',
            isAnExpertIn: ['YOGA_TEACHER'],
            description: 'blahblah',
            phone: '123123123',
            weeklyAvailability: {
                monday: ['0:00'],
                tuesday: ['0:00'],
                wednesday: ['0:00'],
                thursday: ['0:00'],
                friday: ['0:00'],
                saturday: ['0:00'],
                sunday: ['0:00'],
            },
        });
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => ExpertSignUpExampleResponse }));
        apiSignUpExpertUser(mockSignup).then(res => {
            expect(res).toEqual(ExpertSignUpExampleResponse);
            done();
        });
    });
});
