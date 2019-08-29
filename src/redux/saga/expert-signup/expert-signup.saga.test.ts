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
        const signUpData = {
            description: 'adasda',
            email: 'hemal.pandya1122.hp@gmail.com',
            expertise: ['YOGA_COACH'],
            firstName: 'asdas',
            lastName: 'asdad',
            password: 'asd@123',
            phone: '21312312',
            weeklyAvailability: {
                monday: [{ id: '0:00', label: '12 am to 12:30 am' }],
                tuesday: [],
                wednessday: [],
                thursday: [],
                friday: [],
                saturday: [],
                sunday: [],
            },
        };
        return expectSaga(signUpExpertSaga, signUpData)
            .provide([[matchers.call.fn(apiSignUpExpertUser), ExpertSignUpExampleResponse]])
            .put(setLoadingTrue())
            .put(setNotification(expertSignUpPositiveNotification))
            .put(push(CONFIG.routes.expertLogin))
            .put(setLoadingFalse())
            .run();
    });

    describe('it should handle errors', () => {
        const error = new Error('error');
        const signUpData = {
            description: 'adasda',
            email: 'hemal.pandya1122.hp@gmail.com',
            isAnExpertIn: ['YOGA_COACH'],
            firstName: 'asdas',
            lastName: 'asdad',
            password: 'asd@123',
            phone: '21312312',
            weeklyAvailability: {
                monday: [{ id: '0:00', label: '12 am to 12:30 am' }],
                tuesday: [],
                wednessday: [],
                thursday: [],
                friday: [],
                saturday: [],
                sunday: [],
            },
        };
        it('should fail when the login response fails', () => {
            return expectSaga(signUpExpertSaga, signUpData)
                .provide([[matchers.call.fn(apiSignUpExpertUser), throwError(error)]])
                .put(setLoadingTrue())
                .put(setNotification(expertSignUpFailedNotification))
                .put(setLoadingFalse())
                .run();
        });
    });
});
