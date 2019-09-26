interface BookingCustomer {
    createdTimeStamp: string;
    description: string;
    email: string;
    name: string;
    pictureUrl: string;
    _id: string;
}

interface BookingExpert {
    approvedStatus: string;
    createdTimeStamp: string;
    description: string;
    email: string;
    name: string;
    pictureUrl: string;
    _id: string;
}

interface BookingListing {
    approvedStatus: string;
    createdTimeStamp: string;
    description: string;
    expertiseArea: string;
    name: string;
    pictureUrl: string;
    postCode: string;
    price: string;
    _id: string;
}

export interface Booking {
    _id: string;
    time: string;
    customer: BookingCustomer;
    listing: BookingListing;
    expert: BookingExpert;
    __v: number;
}
