const API_URL = process.env.REACT_APP_SERVER_URL;

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
        expertLogin: '/experts-login',
        expertSignUp: '/experts-sign-up',
        expertDashboard: '/experts/dashboard',
    },
};

export default CONFIG;
