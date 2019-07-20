const CONFIG = {
    routes: {
        home: '/',
        listings: '/listings',
        listing: '/listing/:id',
        NavigateToListing: (id: number): string => `/listing/${id}`,
        customerLogin: '/login',
        customerSignUp: '/sign-up',
        customerDashboard: '/dashboard',
        expert: '/expert/:id',
        expertLogin: '/expert-login',
        expertSignUp: '/expert-sign-up',
        expertDashboard: '/expert/dashboard',
    },
};

export default CONFIG;
