const CONFIG = {
    routes: {
        home: '/',
        listings: '/listings',
        listing: '/listing/:id',
        NavigateToListing: (id: number): string => `/listing/${id}`,
        customerLogin: '/login',
        customerSignUp: '/register',
        customerDashboard: '/dashboard',
        expert: '/expert/:id',
        expertLogin: '/experts-login',
        expertSignUp: '/experts-register',
        expertDashboard: '/experts/dashboard',
    },
    expertises: {
        yoga: {
            value: 'YOGA_COACH',
            display: 'yoga coach',
        },
        personalTrainer: {
            value: 'PERSONAL_COACH',
            display: 'personal coach',
        },
        nutritionist: {
            value: 'NUTRITIONIST',
            display: 'nutritionist',
        },
        lifeCoach: {
            value: 'LIFE_COACH',
            display: 'life coach',
        },
    },
};

export default CONFIG;
