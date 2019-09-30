import CONFIG from '../../../config/config';
import { listingCreateAction, ListingCreateAction } from './listing-create.actions';

describe('CREATE_LISTING action', () => {
    it('should return the correct type and data', () => {
        const values: ListingCreateAction = {
            type: 'CREATE_LISTING',
            name: 'Diego',
            description: 'some long string',
            price: '100.00',
            expertiseArea: {
                value: 'YOGA_COACH',
                label: 'Yoga Teacher',
            },
            pictureUrl: CONFIG.testingPictureUrl,
            postCode: 'nw13lr',
        };
        const expectedAction: ListingCreateAction = {
            type: 'CREATE_LISTING',
            ...values,
        };
        expect(listingCreateAction(values)).toEqual(expectedAction);
    });
});
