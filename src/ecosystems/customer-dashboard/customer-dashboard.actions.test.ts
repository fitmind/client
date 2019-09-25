import { fetchCustomerUserAction, setCustomerUserAction } from './customer-dashboard.actions';
import CONFIG from '../../config/config';
import { serverActions } from '../../redux/actions/server/server.actions';

describe('fetchCustomerUserAction', () => {
    it('should return the correct type and data', () => {
        const expectedAction = {
            type: serverActions.FETCH_CUSTOMER_USER,
        };
        expect(fetchCustomerUserAction()).toEqual(expectedAction);
    });
});

describe('set Customer Action', () => {
    it('should return the correct type and data', () => {
        const user = {
            id: '5d6fa91a082a80094132a661',
            name: 'an updated name4',
            email: 'diegoromero.audio2@gmail.com',
            description: 'some long string',
            pictureUrl: CONFIG.testingPictureUrl,
            interestedInExpertiseAreas: ['PERSONAL_COACH', 'YOGA_COACH'],
            pastBookings: [
                {
                    _id: '5d6fa930082a80094132a662',
                    time: '2019-09-10T09:00:00.000Z',
                    customer: '5d6fa91a082a80094132a661',
                    listing: '5d6fa64479bbb0088ab1e98d',
                    expert: '5d6f9e05448e9506db043104',
                    __v: 0,
                },
                {
                    _id: '5d6fa974082a80094132a663',
                    time: '2019-09-10T10:00:00.000Z',
                    customer: '5d6fa91a082a80094132a661',
                    listing: '5d6fa64479bbb0088ab1e98d',
                    expert: '5d6f9e05448e9506db043104',
                    __v: 0,
                },
            ],
            futureBookings: [],
        };
        const expectedAction = {
            type: serverActions.SET_CUSTOMER_USER,
            customerUser: user,
        };

        expect(setCustomerUserAction(user)).toEqual(expectedAction);
    });
});
