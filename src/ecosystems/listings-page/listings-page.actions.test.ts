import { getListings, GetListingsAction, setListingsAction, SetListingsAction } from './listings-page.actions';
import { getListingsMockResponse } from '../../tests/mock-responses/get-listings';

describe('GET_LISTINGS action', () => {
    it('should return the correct type and data', () => {
        const values = {
            page: '1',
            size: 20,
            minPrice: 100,
            maxPrice: 200,
            expertise: 'YOGA_TEACHER',
        };
        const expectedAction: GetListingsAction = {
            type: 'GET_LISTINGS',
            ...values,
        };
        expect(getListings(values)).toEqual(expectedAction);
    });
});

describe('SET_LISTINGS action', () => {
    it('should return the correct type and data', () => {
        const expectedAction: SetListingsAction = {
            type: 'SET_LISTINGS',
            listings: getListingsMockResponse,
        };
        expect(setListingsAction(getListingsMockResponse)).toEqual(expectedAction);
    });
});
