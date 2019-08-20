export interface bookingInterface {
    _id: string;
    client?: string;
    time?: string;
    email?: string;
    listing?: string;
    price?: string;
}

export interface CustomerDashboardResponse {
    upcomingBookings: bookingInterface[];
    pastBookings: bookingInterface[];
}
