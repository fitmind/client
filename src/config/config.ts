const CONFIG = {
    routes: {
        home: '/',
        listings: '/listings',
        listing: '/listing/:id',
        listingId: (id: string) => `/listing/${id}`,
        NavigateToListing: (id: number): string => `/listing/${id}`,
        customerLogin: '/login',
        customerSignUp: '/register',
        customerDashboard: '/dashboard',
        customerProfileUpdate: '/edit',
        expert: '/expert/:id',
        expertLogin: '/experts-login',
        expertSignUp: '/experts-register',
        expertDashboard: '/experts/dashboard',
        expertPublicPage: '/experts/:id',
        navigateToExpertPublicPage: (id: string) => `/experts/${id}`,
    },
    expertises: {
        yoga: {
            value: 'YOGA_COACH',
            display: 'Yoga Teacher',
        },
        personalTrainer: {
            value: 'PERSONAL_COACH',
            display: 'Personal Trainer',
        },
        nutritionist: {
            value: 'NUTRITIONIST',
            display: 'Nutritionist',
        },
        lifeCoach: {
            value: 'LIFE_COACH',
            display: 'Life Coach',
        },
    },
};

export default CONFIG;
