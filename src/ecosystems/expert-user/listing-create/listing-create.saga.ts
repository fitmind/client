import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { serverActions } from '../../../redux/actions/server.actions';
import { clearNotification, setLoadingFalse, setLoadingTrue, setNotification } from '../../../redux/actions/ui.actions';
import CONFIG from '../../../config/config';
import { NotificationType } from '../../../interfaces/notification';
import { createNotification } from '../../../utils/create-notification';
import { omit } from 'ramda';
import { BAD_REQUEST, CREATED } from 'http-status-codes';
import { ListingCreateAction } from './listing-create.actions';

const API_URL = process.env.REACT_APP_SERVER_URL;

export const listingCreateSuccess = createNotification(
    NotificationType.positive,
    `Listing has now gone to be reviewed`,
);
export const listingCreateFailed = createNotification(
    NotificationType.negative,
    `Sorry could not create a listing at this time!`,
);
export const invalidListingDataNotification = createNotification(NotificationType.negative, `Data being send is wrong`);

export interface ListingRequestBody {
    name: string;
    description: string;
    price: string;
    postCode: string;
    expertiseArea: string;
    pictureUrl: string;
}

export async function apiCreateListing(data: ListingRequestBody) {
    return await fetch(`${API_URL}/listings/new`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: { accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
}

export function* createListingSaga(action: ListingCreateAction) {
    yield put(setLoadingTrue());

    const price = action.price + '.00';
    const data: ListingRequestBody = omit(['type'], { ...action, expertiseArea: action.expertiseArea.value, price });
    try {
        const response = yield call(apiCreateListing, data);
        const statusCode = response.status;
        if (statusCode === BAD_REQUEST) {
            yield put(setNotification(invalidListingDataNotification));
        }
        if (statusCode === CREATED) {
            yield put(setNotification(listingCreateSuccess));
            yield put(push(CONFIG.routes.expertDashboard));
        }
    } catch (signUpCustomerError) {
        yield put(setNotification(listingCreateFailed));
    } finally {
        yield put(setLoadingFalse());
        if (process.env.NODE_ENV !== 'test') {
            yield delay(5000);
        }
        yield put(clearNotification());
    }
}

export function* watchCreateListing() {
    yield takeEvery(serverActions.CREATE_LISTING, createListingSaga);
}
