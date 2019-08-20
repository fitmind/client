import {
    ServerActions,
    userLoginAction,
    userLogoutAction,
    userLogoutSuccessAction,
    fetchCustomerDashboardAction,
    setCustomerDashboardAction,
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

    describe('fetchCustomerDashboardAction', () => {
        it('should return the correct type and data', () => {
            const expectedAction = {
                type: ServerActions.FETCH_CUSTOMER_DASHBOARD,
            };
            expect(fetchCustomerDashboardAction()).toEqual(expectedAction);
        });
    });

    describe('setCustomerDashboardAction', () => {
        it('should return the correct type and data', () => {
            const customerDashboardResponse = {
                upcomingBookings: [
                    {
                        client: 'Diego',
                        time: '3:30 PM, 3 May',
                        email: 'diego@gmail.com',
                        listing: 'Yoga Trainer',
                        price: '30 €',
                    },
                    {
                        client: 'Mark',
                        time: '5:30 PM, 3 May',
                        email: 'mark@gmail.com',
                        listing: 'Gym PT',
                        price: '50 €',
                    },
                    {
                        client: 'Ada',
                        time: '8:30 AM, 4 May',
                        email: 'ada@gmail.com',
                        listing: 'HIIT Coach',
                        price: '50 €',
                    },
                ],
                pastBookings: [
                    {
                        client: 'Adam',
                        time: '1:30 PM, 3 May',
                        email: 'diego@gmail.com',
                        listing: 'Yoga Trainer',
                        price: '30 €',
                    },
                    {
                        client: 'Smith',
                        time: '2:30 PM, 3 May',
                        email: 'mark@gmail.com',
                        listing: 'Gym PT',
                        price: '50 €',
                    },
                    {
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
});
