import { TimeSlotInterface } from './time-slot-response';

export interface ExpertUserResponse {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    approvedStatus: string;
    createdAt: string;
    description: string;
    isAnExpertIn: any;
    phone: string;
    pictureUrl: string;
    weeklyAvailability?: {
        monday: TimeSlotInterface[];
        tuesday: TimeSlotInterface[];
        wednesday: TimeSlotInterface[];
        thursday: TimeSlotInterface[];
        friday: TimeSlotInterface[];
        saturday: TimeSlotInterface[];
        sunday: TimeSlotInterface[];
    };
}
