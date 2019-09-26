import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../../redux/actions/ui.actions';
import { throwError } from 'redux-saga-test-plan/providers';
import CONFIG from '../../../config/config';
import { apiGetuser, fetchCustomerUser, userFetchFailedNotification } from './customer-dashboard.saga';
import { setCustomerUserAction } from './customer-dashboard.actions';

const mockUser = {
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

describe('customer dashboard saga', () => {
    it('it fetches user data', () => {
        return expectSaga(fetchCustomerUser)
            .provide([[call(apiGetuser), { status: 200, json: () => mockUser }]])
            .put(setLoadingTrue())
            .put(setCustomerUserAction(mockUser))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail if the request fails', () => {
            return expectSaga(fetchCustomerUser)
                .provide([[call(apiGetuser), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(userFetchFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
