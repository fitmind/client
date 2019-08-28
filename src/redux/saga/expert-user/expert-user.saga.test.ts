import { push } from 'connected-react-router';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import CONFIG from '../../../config/config';
import { setExpertUserAction } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiGetExpertMe } from '../../api';
import { ExpertUserExampleResponse } from '../../reducers/server-reducer/server-example-responses/expert-me-example-response';
import { fetchExpertUserSaga, userFetchFailedNotification } from './expert-user.saga';

describe('expert user saga', () => {
    it('it fetches user', () => {
        return expectSaga(fetchExpertUserSaga)
            .provide([[call(apiGetExpertMe), { json: () => ExpertUserExampleResponse, status: 200 }]])
            .put(setLoadingTrue())
            .put(setExpertUserAction(ExpertUserExampleResponse))
            .put(setLoadingFalse())
            .run();
    });

    it('it should handle error 401', () => {
        return expectSaga(fetchExpertUserSaga)
            .provide([[call(apiGetExpertMe), { json: () => ExpertUserExampleResponse, status: 401 }]])
            .put(setLoadingTrue())
            .put(push(CONFIG.routes.expertLogin))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the expert user response fails', () => {
            return expectSaga(fetchExpertUserSaga)
                .provide([[call(apiGetExpertMe), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(userFetchFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
