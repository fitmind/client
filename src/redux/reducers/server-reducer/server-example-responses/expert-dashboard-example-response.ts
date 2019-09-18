import { ExpertDashboardResponse } from '../../../../interfaces/responses/expert-dashboard-response';
export const ExpertDashboardExampleResponse: ExpertDashboardResponse = {
    upcomingBookings: [
        {
            _id: '100',
            client: 'Diego',
            time: '3:30 PM, 3 May',
            email: 'diego@gmail.com',
            listing: 'Yoga Trainer',
            price: '30 €',
        },
        {
            _id: '101',
            client: 'Mark',
            time: '5:30 PM, 3 May',
            email: 'mark@gmail.com',
            listing: 'Gym PT',
            price: '50 €',
        },
        {
            _id: '104',
            client: 'Ada',
            time: '8:30 AM, 4 May',
            email: 'ada@gmail.com',
            listing: 'HIIT Coach',
            price: '50 €',
        },
    ],
    pastBookings: [
        {
            _id: '130',
            client: 'Adam',
            time: '1:30 PM, 3 May',
            email: 'diego@gmail.com',
            listing: 'Yoga Trainer',
            price: '30 €',
        },
        {
            _id: '140',
            client: 'Smith',
            time: '2:30 PM, 3 May',
            email: 'mark@gmail.com',
            listing: 'Gym PT',
            price: '50 €',
        },
        {
            _id: '108',
            client: 'Ada',
            time: '4:30 AM, 4 May',
            email: 'ada@gmail.com',
            listing: 'HIIT Coach',
            price: '50 €',
        },
    ],
    liveListings: [
        {
            _id: '123132',
            name: 'Gym',
            listingPictureUrl: 'https://placeholder.com/',
            description: 'Blah BLah listing',
            price: '50 €',
            createdAt: '2019-08-28',
            createdByExpert: {
                _id: '123',
                firstName: 'Adam',
                lastName: 'Gil',
                pictureUrl: 'https://placeholder.com/',
                description: 'Tony Stark',
                createdAt: '2019-08-28',
                approvedStatus: 'APPROVED',
                email: 'tony@fitmind.io',
                expertise: ['PERSONAL_COACH'],
                weeklyAvailability: {
                    monday: [{ value: '0:00', label: '12 am to 12:30 am' }],
                    tuesday: [{ value: '0:30', label: '12:30 am to 1 am' }],
                    wednesday: [
                        { value: '0:30', label: '12:30 am to 1 am' },
                        { value: '0:00', label: '12 am to 12:30 am' },
                    ],
                    thursday: [
                        { value: '0:30', label: '12:30 am to 1 am' },
                        { value: '0:00', label: '12 am to 12:30 am' },
                    ],
                    friday: [
                        { value: '0:30', label: '12:30 am to 1 am' },
                        { value: '0:00', label: '12 am to 12:30 am' },
                    ],
                    saturday: [
                        { value: '0:30', label: '12:30 am to 1 am' },
                        { value: '0:00', label: '12 am to 12:30 am' },
                    ],
                    sunday: [
                        { value: '0:30', label: '12:30 am to 1 am' },
                        { value: '0:00', label: '12 am to 12:30 am' },
                    ],
                },
                phone: '12312312',
            },
            expertiseArea: 'PERSONAL_COACH',
        },
        {
            _id: '1223132',
            name: 'Swim',
            listingPictureUrl: 'https://placeholder.com/',
            description: 'Blah BLah listing',
            price: '50 €',
            createdAt: '2019-08-28',
            createdByExpert: {
                _id: '1232',
                firstName: 'Scan',
                lastName: 'Asa',
                pictureUrl: 'https://placeholder.com/',
                description: 'Tony Stark',
                createdAt: '2019-08-28',
                approvedStatus: 'APPROVED',
                email: 'adam@fitmind.io',
                expertise: ['PERSONAL_COACH'],
                weeklyAvailability: {
                    monday: [{ value: '0:00', label: '12 am to 12:30 am' }],
                    tuesday: [{ value: '0:30', label: '12:30 am to 1 am' }],
                    wednesday: [
                        { value: '0:30', label: '12:30 am to 1 am' },
                        { value: '0:00', label: '12 am to 12:30 am' },
                    ],
                    thursday: [
                        { value: '0:30', label: '12:30 am to 1 am' },
                        { value: '0:00', label: '12 am to 12:30 am' },
                    ],
                    friday: [
                        { value: '0:30', label: '12:30 am to 1 am' },
                        { value: '0:00', label: '12 am to 12:30 am' },
                    ],
                    saturday: [
                        { value: '0:30', label: '12:30 am to 1 am' },
                        { value: '0:00', label: '12 am to 12:30 am' },
                    ],
                    sunday: [
                        { value: '0:30', label: '12:30 am to 1 am' },
                        { value: '0:00', label: '12 am to 12:30 am' },
                    ],
                },
                phone: '12312312',
            },
            expertiseArea: 'PERSONAL_COACH',
        },
    ],
};
