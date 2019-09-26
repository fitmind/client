import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { clearNotification, setLoadingFalse, setLoadingTrue, setNotification } from '../../../redux/actions/ui.actions';
import { push } from 'connected-react-router';
import CONFIG from '../../../config/config';
import { throwError } from 'redux-saga-test-plan/providers';
import {
    apiRegisterExpertUser,
    emailExpertInUseNotification,
    invalidExpertDataNotification,
    registerExpertNegativeNotification,
    registerExpertPositiveNotification,
    registerExpertSaga,
} from './expert-register.saga';
import { BAD_REQUEST, CONFLICT, CREATED } from 'http-status-codes';

describe('expert register saga', () => {
    it('it signs up', () => {
        return expectSaga(registerExpertSaga)
            .provide([[matchers.call.fn(apiRegisterExpertUser), { status: CREATED }]])
            .put(setLoadingTrue())
            .put(setNotification(registerExpertPositiveNotification))
            .put(push(CONFIG.routes.expertLogin))
            .put(setLoadingFalse())
            .delay(5000)
            .put(clearNotification())
            .run();
    });

    it('it should display an error notification if email already exists', () => {
        return expectSaga(registerExpertSaga)
            .provide([[matchers.call.fn(apiRegisterExpertUser), { status: CONFLICT }]])
            .put(setLoadingTrue())
            .put(setNotification(emailExpertInUseNotification))
            .put(setLoadingFalse())
            .delay(5000)
            .put(clearNotification())
            .run();
    });

    it('it should display an error notification if the data is malformed', () => {
        return expectSaga(registerExpertSaga)
            .provide([[matchers.call.fn(apiRegisterExpertUser), { status: BAD_REQUEST }]])
            .put(setLoadingTrue())
            .put(setNotification(invalidExpertDataNotification))
            .put(setLoadingFalse())
            .delay(5000)
            .put(clearNotification())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        it('should fail when the login response fails', () => {
            return expectSaga(registerExpertSaga)
                .provide([[matchers.call.fn(apiRegisterExpertUser), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(registerExpertNegativeNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
