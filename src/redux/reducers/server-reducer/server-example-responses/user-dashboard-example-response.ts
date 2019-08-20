import { CustomerDashboardResponse } from '../../../../interfaces/responses/customer-dashboard-response';

export const CustomerDashboardExampleResponse: CustomerDashboardResponse = {
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
};
