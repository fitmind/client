import { push } from 'connected-react-router';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import CONFIG from '../../../config/config';
import { setExpertDashboardAction } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiGetExpertDashboard } from '../../api';
import { ExpertDashboardExampleResponse } from '../../reducers/server-reducer/server-example-responses/expert-dashboard-example-response';
import { expertDashboardFetchFailedNotification, fetchExpertDashboardSaga } from './expert-dashboard.saga';

describe('expert dashboard saga', () => {
    it('it fetches dashboard', () => {
        return expectSaga(fetchExpertDashboardSaga)
            .provide([[call(apiGetExpertDashboard), { json: () => ExpertDashboardExampleResponse, status: 200 }]])
            .put(setLoadingTrue())
            .put(setExpertDashboardAction(ExpertDashboardExampleResponse))
            .put(setLoadingFalse())
            .run();
    });

    it('it should handle error 401', () => {
        return expectSaga(fetchExpertDashboardSaga)
            .provide([[call(apiGetExpertDashboard), { json: () => ExpertDashboardExampleResponse, status: 401 }]])
            .put(setLoadingTrue())
            .put(push(CONFIG.routes.expertLogin))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the expert dashboard response fails', () => {
            return expectSaga(fetchExpertDashboardSaga)
                .provide([[call(apiGetExpertDashboard), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(expertDashboardFetchFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
