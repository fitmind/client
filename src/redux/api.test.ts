import { CustomerLoginExampleResponse } from './reducers/server-reducer/server-example-responses/user-login-example-response';
import { apiLoginCustomerUser, apiLogoutCustomerUser, apiGetUserMe, apiGetUserDashboard } from './api';
import { userLoginAction } from './actions/server/server.actions';
import { CustomerLogoutExampleResponse } from './reducers/server-reducer/server-example-responses/user-logout-example-response';
import { CustomerUserExampleResponse } from './reducers/server-reducer/server-example-responses/user-me-example-response';
describe('api', () => {
    // todo: need to write the rest of the api tests
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
        const mockLogin = userLoginAction({
            email: 'test@fitmind.io',
            password: 'asd@123',
        });
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => CustomerUserExampleResponse }));
        apiGetUserMe(mockLogin).then(res => {
            expect(res).toEqual(CustomerUserExampleResponse);
            done();
        });
    });

    test('api apiGetUserDashboard', done => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => CustomerUserExampleResponse }));
        apiGetUserDashboard().then(res => {
            expect(res).toEqual(CustomerUserExampleResponse);
            done();
        });
    });
});
