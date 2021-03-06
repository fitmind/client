import { Booking } from './booking';

export interface CustomerUser {
    id: string;
    name: string;
    description: string;
    email: string;
    interestedInExpertiseAreas: string[];
    pastBookings: Booking[];
    futureBookings: Booking[];
    pictureUrl?: string;
}
