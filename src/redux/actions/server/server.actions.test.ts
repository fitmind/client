import {
    customerProfileUpdateAction,
    expertLoginAction,
    expertProfileUpdateAction,
    fetchCustomerDashboardAction,
    fetchCustomerUserAction,
    fetchExpertDashboardAction,
    ServerActions,
    setCustomerDashboardAction,
    setExpertUserAction,
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

    describe('expertLoginAction', () => {
        it('should return the correct type and data', () => {
            const values = {
                email: 'testing@test.com',
                password: 'testing123',
            };
            const expectedAction = {
                type: ServerActions.LOGIN_EXPERT_USER,
                ...values,
            };
            expect(expertLoginAction(values)).toEqual(expectedAction);
        });
    });

    describe('setExpertUserAction', () => {
        it('should return the correct type and data', () => {
            const expertUserMeResponse = {
                _id: '123123',
                email: 'expert@fitmind.io',
                firstName: 'Expert1',
                lastName: 'User',
                approvedStatus: 'APPROVED',
                createdAt: new Date().toISOString().slice(0, 10),
                description: 'description',
                expertise: ['PERSONAL_COACH', 'YOGA_COACH'],
                phone: '123123123',
                pictureUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBx76lQwzW2cAsjz5JqgVp_ReTpVji6G_pMO6crXSJn9NETq3F',
                weeklyAvailability: {
                    monday: [{ id: '0:00', label: '12 am to 12:30 am' }],
                    tuesday: [{ id: '0:30', label: '12:30 am to 1 am' }],
                    wednessday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
                    thursday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
                    friday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
                    saturday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
                    sunday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
                },
            };
            const expectedAction = {
                type: ServerActions.SET_EXPERT_USER,
                expertUser: expertUserMeResponse,
            };
            expect(setExpertUserAction(expertUserMeResponse)).toEqual(expectedAction);
        });
    });
    describe('fetchExpertDashboardAction', () => {
        it('should return the correct type and data', () => {
            const expectedAction = {
                type: ServerActions.FETCH_EXPERT_DASHBOARD,
            };
            expect(fetchExpertDashboardAction()).toEqual(expectedAction);
        });
    });

    describe('expertProfileUpdateAction', () => {
        it('should return the correct type and data', () => {
            const values = {
                firstName: 'Fitmind',
                lastName: 'Expert',
                description: 'blahhhh',
                phone: '12412421',
                profilePictureUrl: 'http://asdsa.com/adsad.jpg',
                isAnExpertIn: ['LIFE_COACH'],
                weeklyAvailability: {
                    monday: [{ id: '0:00', label: '12 am to 12:30 am' }],
                    tuesday: [{ id: '0:30', label: '12:30 am to 1 am' }],
                    wednessday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
                    thursday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
                    friday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
                    saturday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
                    sunday: [{ id: '0:30', label: '12:30 am to 1 am' }, { id: '0:00', label: '12 am to 12:30 am' }],
                },
            };
            const expectedAction = {
                type: ServerActions.PROFILE_UPDATE_EXPERT_USER,
                ...values,
            };
            expect(expertProfileUpdateAction(values)).toEqual(expectedAction);
        });
    });
    // describe('setExpertDashboardAction', () => {
    //     it('should return the correct type and data', () => {
    //         const expectedAction = {
    //             type: ServerActions.SET_EXPERT_DASHBOARD,
    //             expertDashboard: expertDashboardResponse,
    //         };
    //         expect(setExpertDashboardAction(ExpertDashboard)).toEqual(expectedAction);
    //     });
    // });
});
