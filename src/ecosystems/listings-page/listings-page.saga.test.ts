import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../redux/actions/ui.actions';
import { apiGetListings, getListingsFailed, getListingsSaga } from './listings-page.saga';
import { getListingsMockResponse } from '../../tests/mock-responses/get-listings';
import { GetListingsAction, setListingsAction } from './listings-page.actions';
import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { throwError } from 'redux-saga-test-plan/providers';

describe('getListingsSaga', () => {
    const values = {
        page: '1',
        size: 20,
        minPrice: 100,
        maxPrice: 200,
        expertise: 'YOGA_TEACHER',
    };
    const action: GetListingsAction = {
        type: 'GET_LISTINGS',
        ...values,
    };
    it('it fetches user data', () => {
        return expectSaga(getListingsSaga, action)
            .provide([[call(apiGetListings, action), { status: OK, json: () => getListingsMockResponse }]])
            .put(setLoadingTrue())
            .put(setListingsAction(getListingsMockResponse))
            .put(setLoadingFalse())
            .run();
    });

    it('it sets a notification if the request failed', () => {
        return expectSaga(getListingsSaga, action)
            .provide([[call(apiGetListings, action), { status: INTERNAL_SERVER_ERROR }]])
            .put(setLoadingTrue())
            .put(setNotification(getListingsFailed))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail if the request fails', () => {
            return expectSaga(getListingsSaga, action)
                .provide([[call(apiGetListings, action), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(getListingsFailed))
                .put(setLoadingFalse())
                .run();
        });
    });
});
