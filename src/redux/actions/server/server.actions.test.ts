import {
    customerProfileUpdateAction,
    expertSignUpAction,
    fetchCustomerDashboardAction,
    fetchCustomerUserAction,
    ServerActions,
    setCustomerDashboardAction,
    userLoginAction,
    userLogoutAction,
    userLogoutSuccessAction,
} from './server.actions';

describe('server actions', () => {
    describe('userLoginAction', () => {
        it('should return the correct type and data', () => {
            const values = {
                email: 'testing@test.com',
                password: 'testing123',
            };
            const expectedAction = {
                type: ServerActions.LOGIN_CUSTOMER_USER,
                ...values,
            };
            expect(userLoginAction(values)).toEqual(expectedAction);
        });
    });

    describe('customerProfileUpdateAction', () => {
        it('should return the correct type and data', () => {
            const values = {
                _id: '123',
                firstName: 'Fitmind Updated',
                lastName: 'User Updated',
                interestedInExpertiseAreas: ['LIFE_COACH'],
                description: 'blahhhh',
                phone: '12412421',
            };
            const expectedAction = {
                type: ServerActions.PROFILE_UPDATE_CUSTOMER_USER,
                ...values,
            };
            expect(customerProfileUpdateAction(values)).toEqual(expectedAction);
        });
    });

    describe('fetchCustomerDashboardAction', () => {
        it('should return the correct type and data', () => {
            const expectedAction = {
                type: ServerActions.FETCH_CUSTOMER_DASHBOARD,
            };
            expect(fetchCustomerDashboardAction()).toEqual(expectedAction);
        });
    });

    describe('fetchCustomerUserdAction', () => {
        it('should return the correct type and data', () => {
            const expectedAction = {
                type: ServerActions.FETCH_CUSTOMER_USER,
            };
            expect(fetchCustomerUserAction()).toEqual(expectedAction);
        });
    });

    describe('setCustomerDashboardAction', () => {
        it('should return the correct type and data', () => {
            const customerDashboardResponse = {
                upcomingBookings: [
                    {
                        _id: '123',
                        client: 'Diego',
                        time: '3:30 PM, 3 May',
                        email: 'diego@gmail.com',
                        listing: 'Yoga Trainer',
                        price: '30 €',
                    },
                    {
                        _id: '1234',
                        client: 'Mark',
                        time: '5:30 PM, 3 May',
                        email: 'mark@gmail.com',
                        listing: 'Gym PT',
                        price: '50 €',
                    },
                    {
                        _id: '1235',
                        client: 'Ada',
                        time: '8:30 AM, 4 May',
                        email: 'ada@gmail.com',
                        listing: 'HIIT Coach',
                        price: '50 €',
                    },
                ],
                pastBookings: [
                    {
                        _id: '1236',
                        client: 'Adam',
                        time: '1:30 PM, 3 May',
                        email: 'diego@gmail.com',
                        listing: 'Yoga Trainer',
                        price: '30 €',
                    },
                    {
                        _id: '1237',
                        client: 'Smith',
                        time: '2:30 PM, 3 May',
                        email: 'mark@gmail.com',
                        listing: 'Gym PT',
                        price: '50 €',
                    },
                    {
                        _id: '1238',
                        client: 'Ada',
                        time: '4:30 AM, 4 May',
                        email: 'ada@gmail.com',
                        listing: 'HIIT Coach',
                        price: '50 €',
                    },
                ],
            };
            const expectedAction = {
                type: ServerActions.SET_CUSTOMER_DASHBOARD,
                customerDashboard: customerDashboardResponse,
            };
            expect(setCustomerDashboardAction(customerDashboardResponse)).toEqual(expectedAction);
        });
    });
    describe('userLogoutAction', () => {
        it('should return the correct type and data', () => {
            const expectedAction = {
                type: ServerActions.LOGOUT_USER,
            };
            expect(userLogoutAction()).toEqual(expectedAction);
        });
    });

    describe('userLogoutSuccessAction', () => {
        it('should return the correct type and data', () => {
            const expectedAction = {
                type: ServerActions.LOGOUT_USER_SUCCESS,
            };
            expect(userLogoutSuccessAction()).toEqual(expectedAction);
        });
    });
    describe('expertSignUpAction', () => {
        it('should return the correct type and data', () => {
            const values = {
                email: 'fitmindexpert@fitmind.io',
                firstName: 'Fitmind',
                lastName: 'Expert',
                password: 'secret',
                description: 'blahhhh',
                phone: '12412421',
                profilePictureUrl: 'http://asdsa.com/adsad.jpg',
                isAnExpertIn: ['LIFE_COACH'],
                weeklyAvailability: {
                    monday: ['0:00'],
                    tuesday: ['0:00'],
                    wednesday: ['0:00'],
                    thursday: ['0:00'],
                    friday: ['0:00'],
                    saturday: ['0:00'],
                    sunday: ['0:00'],
                },
            };
            const expectedAction = {
                type: ServerActions.SIGNUP_EXPERT_USER,
                ...values,
            };
            expect(expertSignUpAction(values)).toEqual(expectedAction);
        });
    });
});
