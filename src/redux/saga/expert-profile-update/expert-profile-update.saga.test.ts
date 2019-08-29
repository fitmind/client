import { push } from 'connected-react-router';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import CONFIG from '../../../config/config';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiProfileUpdateExpertUser } from '../../api';
import { ExpertProfileUpdateExampleResponse } from '../../reducers/server-reducer/server-example-responses/expert-profile-update-example-response';
import {
    profileUpdateExpertSaga,
    userProfileUpdatePositiveNotification,
    userProfileUpdateFailedNotification,
} from './expert-profile-update.saga';
import { throwError } from 'redux-saga-test-plan/providers';

describe('expert Profile Update saga', () => {
    it('it updates profile', () => {
        return expectSaga(profileUpdateExpertSaga)
            .provide([
                [
                    matchers.call.fn(apiProfileUpdateExpertUser),
                    { json: () => ExpertProfileUpdateExampleResponse, status: 201 },
                ],
            ])
            .put(setLoadingTrue())
            .put(setNotification(userProfileUpdatePositiveNotification))
            .put(push(CONFIG.routes.home))
            .put(setLoadingFalse())
            .run();
    });

    it('it should handle error 401', () => {
        return expectSaga(profileUpdateExpertSaga)
            .provide([
                [
                    matchers.call.fn(apiProfileUpdateExpertUser),
                    { json: () => ExpertProfileUpdateExampleResponse, status: 401 },
                ],
            ])
            .put(setLoadingTrue())
            .put(push(CONFIG.routes.expertLogin))
            .put(setNotification(userProfileUpdateFailedNotification))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the expert dashboard response fails', () => {
            return expectSaga(profileUpdateExpertSaga)
                .provide([[matchers.call.fn(apiProfileUpdateExpertUser), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(userProfileUpdateFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
