import { apiSignUpCustomerUser } from './api';
import { CustomerSignUpExampleResponse } from './reducers/server-reducer/server-example-responses/user-signup-example-response';
import { customerSignUpAction } from './actions/server/server.actions';

describe('api', () => {
    // todo: need to write the rest of the api tests
    test('api apiSignUpCustomerUser', done => {
        const mockSignup = customerSignUpAction({
            email: 'hello@fitmind.io',
            firstName: 'Fitmind',
            lastName: 'User',
            password: 'asd@123',
            interestedInExperiseAreas: ['YOGA_TEACHER'],
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
});
