import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { clearNotification, setLoadingFalse, setLoadingTrue, setNotification } from '../../../redux/actions/ui.actions';
import { push } from 'connected-react-router';
import CONFIG from '../../../config/config';
import { throwError } from 'redux-saga-test-plan/providers';
import { BAD_REQUEST, CREATED } from 'http-status-codes';
import {
    apiCreateListing,
    createListingSaga,
    invalidListingDataNotification,
    listingCreateFailed,
    listingCreateSuccess,
} from './listing-create.saga';
import { ListingCreateAction } from './listing-create.actions';

describe('listing create saga', () => {
    const action: ListingCreateAction = {
        type: 'CREATE_LISTING',
        name: 'Diego',
        description: 'some long string',
        price: '100',
        expertiseArea: {
            value: 'YOGA_COACH',
            label: 'Yoga Teacher',
        },
        pictureUrl: CONFIG.testingPictureUrl,
        postCode: 'nw13lr',
    };
    it('it should create the listing', () => {
        return expectSaga(createListingSaga, action)
            .provide([[matchers.call.fn(apiCreateListing), { status: CREATED }]])
            .put(setLoadingTrue())
            .put(setNotification(listingCreateSuccess))
            .put(push(CONFIG.routes.expertDashboard))
            .put(setLoadingFalse())
            .put(clearNotification())
            .run();
    });

    it('it should display an error notification if the data is wrong', () => {
        return expectSaga(createListingSaga, action)
            .provide([[matchers.call.fn(apiCreateListing), { status: BAD_REQUEST }]])
            .put(setLoadingTrue())
            .put(setNotification(invalidListingDataNotification))
            .put(setLoadingFalse())
            .put(clearNotification())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the login response fails', () => {
            return expectSaga(createListingSaga, action)
                .provide([[matchers.call.fn(apiCreateListing), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(listingCreateFailed))
                .put(setLoadingFalse())
                .put(clearNotification())
                .run();
        });
    });
});
