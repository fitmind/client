enum approvedStatus {
    APPROVED = 'APPROVED',
    PENDING = 'PENDING',
    DENIED = 'DENIED',
}

const CONFIG = {
    defaultHeaders: { Accept: 'application/json', 'Content-Type': 'application/json' },
    authorizedHeaders: {
        mode: 'cors',
        credentials: 'include',
        headers: { Accept: 'application/json' },
    },
    approvedStatus,
    routes: {
        home: '/',
        listings: '/listings-page',
        listing: '/listing/:id',
        listingId: (id: string) => `/listing/${id}`,
        NavigateToListing: (id: number): string => `/listing/${id}`,
        customerLogin: '/login',
        customerRegister: '/register',
        customerDashboard: '/dashboard',
        customerProfileUpdate: '/edit',
        singleBooking: '/booking/:id',
        NavigateToBooking: (id: string): string => `/booking/${id}`,
        expert: '/expert/:id',
        expertLogin: '/experts-login',
        expertSignUp: '/experts-register',
        expertDashboard: '/experts/dashboard',
        expertProfileUpdate: '/expert/edit',
        expertPublicPage: '/experts/:id',
        expertCreateListing: '/experts/listing/new',
        navigateToExpertPublicPage: (id: string) => `/experts/${id}`,
    },
    expertises: {
        yoga: {
            value: 'YOGA_COACH',
            label: 'Yoga Teacher',
        },
        personalTrainer: {
            value: 'PERSONAL_COACH',
            label: 'Personal Trainer',
        },
        nutritionist: {
            value: 'NUTRITIONIST',
            label: 'Nutritionist',
        },
        lifeCoach: {
            value: 'LIFE_COACH',
            label: 'Life Coach',
        },
    },
    availableHours: [
        { value: '00:00', label: '00:00' },
        { value: '01:00', label: '01:00' },
        { value: '02:00', label: '02:00' },
        { value: '03:00', label: '03:00' },
        { value: '04:00', label: '04:00' },
        { value: '05:00', label: '05:00' },
        { value: '06:00', label: '06:00' },
        { value: '07:00', label: '07:00' },
        { value: '08:00', label: '08:00' },
        { value: '09:00', label: '09:00' },
        { value: '10:00', label: '10:00' },
        { value: '11:00', label: '11:00' },
        { value: '12:00', label: '12:00' },
        { value: '13:00', label: '13:00' },
        { value: '14:00', label: '14:00' },
        { value: '15:00', label: '15:00' },
        { value: '16:00', label: '16:00' },
        { value: '17:00', label: '17:00' },
        { value: '18:00', label: '18:00' },
        { value: '19:00', label: '19:00' },
        { value: '20:00', label: '20:00' },
        { value: '21:00', label: '21:00' },
        { value: '22:00', label: '22:00' },
        { value: '23:00', label: '23:00' },
    ],
    daysOfTheWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    testingPictureUrl: 'https://fitmind-dev.s3.eu-west-2.amazonaws.com/mock-images/daniel_photo.png',
};

export default CONFIG;
