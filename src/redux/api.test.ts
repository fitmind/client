import { CustomerLoginExampleResponse } from './reducers/server-reducer/server-example-responses/user-login-example-response';
import { apiLoginCustomerUser } from './api';
import { userLoginAction } from './actions/server/server.actions';

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
});
