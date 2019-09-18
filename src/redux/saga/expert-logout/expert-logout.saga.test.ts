import { push } from 'connected-react-router';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import CONFIG from '../../../config/config';
import { expertLogoutSuccessAction } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiLogoutExpertUser } from '../../api';
import { ExpertLogoutExampleResponse } from '../../reducers/server-reducer/server-example-responses/expert-logout-example-response';
import { expertLogoutNegativeNotification, logoutExpertSaga } from './expert-logout.saga';

describe('customer logout saga', () => {
    it('it logs out successfully', () => {
        return expectSaga(logoutExpertSaga, apiLogoutExpertUser)
            .provide([[call(apiLogoutExpertUser), ExpertLogoutExampleResponse]])
            .put(setLoadingTrue())
            .put(push(CONFIG.routes.expertLogin))
            .put(expertLogoutSuccessAction())
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the logout response fails', () => {
            return expectSaga(logoutExpertSaga, apiLogoutExpertUser)
                .provide([[matchers.call.fn(apiLogoutExpertUser), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(expertLogoutNegativeNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
