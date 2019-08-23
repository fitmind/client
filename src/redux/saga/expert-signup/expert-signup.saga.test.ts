import { push } from 'connected-react-router';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import CONFIG from '../../../config/config';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiSignUpExpertUser } from '../../api';
import { ExpertSignUpExampleResponse } from '../../reducers/server-reducer/server-example-responses/expert-signup-example-response';
import {
    expertSignUpPositiveNotification,
    signUpExpertSaga,
    expertSignUpFailedNotification,
} from './expert-signup.saga';

describe('Expert Signup saga', () => {
    it('it signs up', () => {
        return expectSaga(signUpExpertSaga)
            .provide([[matchers.call.fn(apiSignUpExpertUser), ExpertSignUpExampleResponse]])
            .put(setLoadingTrue())
            .put(setNotification(expertSignUpPositiveNotification))
            .put(push(CONFIG.routes.expertLogin))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the login response fails', () => {
            return expectSaga(signUpExpertSaga)
                .provide([[matchers.call.fn(apiSignUpExpertUser), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(expertSignUpFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
