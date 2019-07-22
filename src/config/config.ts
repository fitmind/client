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
};

export default CONFIG;
