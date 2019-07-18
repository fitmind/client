const CONFIG = {
    routes: {
        login: '/',
        dashboard: '/dashboard',
        expert: '/expert/:id',
        NavigateToExpert: (id: number): string => `/expert/${id}`,
        listing: '/listing/:id',
        NavigateToListing: (id: number): string => `/listing/${id}`,
    },
};

export default CONFIG;
