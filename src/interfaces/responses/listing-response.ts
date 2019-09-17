import { ExpertUserResponse } from './expert-user-response';

export interface ListingInterface {
    _id: string;
    name: string;
    listingPictureUrl: string;
    description: string;
    price: string;
    createdAt: string;
    createdByExpert: ExpertUserResponse;
    expertiseArea: string;
}
