import { Booking } from './booking';

export interface ExpertUser {
    id: string;
    name: string;
    description: string;
    email: string;
    isAnExpertIn: string[];
    pastBookings: Booking[];
    futureBookings: Booking[];
    pictureUrl?: string;
    weeklyAvailability: {
        monday: string[];
        tuesday: string[];
        wednesday: string[];
        thursday: string[];
        friday: string[];
        saturday: string[];
        sunday: string[];
    };
    approvedStatus: string;
}
