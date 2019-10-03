interface ListingExpert {
    approvedStatus: string;
    _id: string;
    name: string;
    email: string;
    description: string;
    pictureUrl: string;
    createdTimeStamp: string;
}

export interface Listing {
    _id: string;
    name: string;
    price: string;
    description: string;
    pictureUrl: string;
    expertiseArea: string;
    postCode: string;
    createdByExpert: ListingExpert;
    createdTimeStamp: string;
    __v: number;
}
