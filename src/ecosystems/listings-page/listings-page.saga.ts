import { call, put, takeEvery } from 'redux-saga/effects';
import { GetListingsAction, setListingsAction } from './listings-page.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../redux/actions/ui.actions';
import { serverActions } from '../../redux/actions/server.actions';
import queryString from 'querystring';
import { createNotification } from '../../utils/create-notification';
import { NotificationType } from '../../interfaces/notification';
import { Listing } from '../../interfaces/listing';
import { OK } from 'http-status-codes';

const API_URL = process.env.REACT_APP_SERVER_URL;

export const getListingsFailed = createNotification(
    NotificationType.negative,
    'Sorry we could not retrieve the listings at this time',
);

export async function apiGetListings({ page, size, minPrice, maxPrice, expertise }: GetListingsAction) {
    let params = { page, size };

    if (minPrice) params['min_price'] = minPrice;
    if (maxPrice) params['max_price'] = maxPrice;
    if (expertise) params['expertise'] = expertise;

    const query = queryString.stringify(params);

    const url = `${API_URL}/listings?${query}`;
    console.log(url);

    return await fetch(url, {
        method: 'GET',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
}

export function* getListingsSaga(action: GetListingsAction) {
    yield put(setLoadingTrue());
    try {
        const listingsRes = yield call(apiGetListings, action);
        const { status } = listingsRes;
        if (status === OK) {
            const listings: Listing[] = yield listingsRes.json();
            yield put(setListingsAction(listings));
        } else {
            yield put(setNotification(getListingsFailed));
        }
    } catch (e) {
        yield put(setNotification(getListingsFailed));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchGetListingsSaga() {
    yield takeEvery(serverActions.GET_LISTINGS, getListingsSaga);
}
