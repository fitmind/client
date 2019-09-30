import { Action } from 'redux';
import { MultiSelectValues } from '../../../interfaces/multi-select-values';

export interface ListingCreateAction extends Action<'CREATE_LISTING'> {
    name: string;
    description: string;
    price: string;
    postCode: string;
    expertiseArea: MultiSelectValues;
    pictureUrl: string;
}

export const listingCreateAction = (values): ListingCreateAction => ({
    type: 'CREATE_LISTING',
    ...values,
});
