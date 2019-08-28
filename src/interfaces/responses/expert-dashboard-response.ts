import { ListingInterface } from './listing-response';

export interface bookingInterface {
    _id: string;
    client?: string;
    time?: string;
    email?: string;
    listing?: string;
    price?: string;
}

export interface ExpertDashboardResponse {
    upcomingBookings: bookingInterface[];
    pastBookings: bookingInterface[];
    liveListings: ListingInterface[];
}
