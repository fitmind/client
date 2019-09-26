import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { clearNotification, setLoadingFalse, setLoadingTrue, setNotification } from '../../../redux/actions/ui.actions';
import { throwError } from 'redux-saga-test-plan/providers';
import {
    apiGetExpert,
    expertFetchFailedNotification,
    getExpertMe,
    notAuthorizedExpertPageNotification,
} from './expert-dashboard.saga';
import { setExpertUserAction } from './expert-dashboard.actions';
import { getExpertUserMockResponse } from '../../../tests/mock-responses/get-expert-user';
import { UNAUTHORIZED } from 'http-status-codes';
import { push } from 'connected-react-router';
import CONFIG from '../../../config/config';

describe('customer dashboard saga', () => {
    it('it fetches user data', () => {
        return expectSaga(getExpertMe)
            .provide([[call(apiGetExpert), { status: 200, json: () => getExpertUserMockResponse }]])
            .put(setLoadingTrue())
            .put(setExpertUserAction(getExpertUserMockResponse))
            .put(setLoadingFalse())
            .put(clearNotification())
            .run();
    });

    it('should redirect to login if UNAUTHORIZED ', () => {
        return expectSaga(getExpertMe)
            .provide([[call(apiGetExpert), { status: UNAUTHORIZED }]])
            .put(setLoadingTrue())
            .put(setNotification(notAuthorizedExpertPageNotification))
            .put(push(CONFIG.routes.expertLogin))
            .put(setLoadingFalse())
            .put(clearNotification())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail if the request fails', () => {
            return expectSaga(getExpertMe)
                .provide([[call(apiGetExpert), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(expertFetchFailedNotification))
                .put(setLoadingFalse())
                .put(clearNotification())
                .run();
        });
    });
});
