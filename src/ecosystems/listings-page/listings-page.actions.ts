import { Action } from 'redux';
import { Listing } from '../../interfaces/listing';
import { MultiSelectValues } from '../../interfaces/multi-select-values';

export interface GetListingsAction extends Action<'GET_LISTINGS'> {
    page: string;
    minPrice: number;
    maxPrice: number;
    expertise: MultiSelectValues;
    size: number;
}

export const getListings = (values): GetListingsAction => ({
    type: 'GET_LISTINGS',
    ...values,
});

export interface SetListingsAction extends Action<'SET_LISTINGS'> {
    listings: Listing[];
}

export const setListingsAction = (listings: Listing[]): SetListingsAction => ({
    type: 'SET_LISTINGS',
    listings,
});
