import { Action } from 'redux';
import { MultiSelectValues } from '../../../interfaces/multi-select-values';

export interface expertRegisterActionInterface extends Action<'REGISTER_EXPERT_USER'> {
    name: string;
    email: string;
    description: string;
    password: string;
    isAnExpertIn: MultiSelectValues[];
    pictureUrl: string;
    weeklyAvailability: {
        monday: string[];
        tuesday: string[];
        wednesday: string[];
        thursday: string[];
        friday: string[];
        saturday: string[];
        sunday: string[];
    };
}

export const expertRegisterAction = (values): expertRegisterActionInterface => ({
    type: 'REGISTER_EXPERT_USER',
    ...values,
});
