import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';
import CONFIG from '../../../config/config';
import { NotificationInterface, NotificationType } from '../../../interfaces/Notification.interface';
import { ExpertSignUpActionInterface, ServerActions } from '../../actions/server/server.actions';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiSignUpExpertUser } from '../../api';

export const expertSignUpPositiveNotification: NotificationInterface = {
    type: NotificationType.positive,
    body: `Registration Successful!`,
};
export const expertSignUpFailedNotification: NotificationInterface = {
    type: NotificationType.negative,
    body: 'Could not SignUp with entered details',
};

export function getTransformedAvailibility(action: ExpertSignUpActionInterface, day: string) {
    let transformedAvailibility = action.weeklyAvailability[day].map(availibility => {
        return availibility.id;
    });
    return transformedAvailibility;
}

export function* signUpExpertSaga(action: ExpertSignUpActionInterface) {
    yield put(setLoadingTrue());
    let transformedAvailibility = {};
    transformedAvailibility['monday'] = getTransformedAvailibility(action, 'monday');
    transformedAvailibility['tuesday'] = getTransformedAvailibility(action, 'tuesday');
    transformedAvailibility['wednessday'] = getTransformedAvailibility(action, 'wednessday');
    transformedAvailibility['thursday'] = getTransformedAvailibility(action, 'thursday');
    transformedAvailibility['friday'] = getTransformedAvailibility(action, 'friday');
    transformedAvailibility['saturday'] = getTransformedAvailibility(action, 'saturday');
    transformedAvailibility['sunday'] = getTransformedAvailibility(action, 'sunday');
    action.weeklyAvailability = transformedAvailibility;
    try {
        const signUpExpertResponse = yield call(apiSignUpExpertUser, action);
        if (signUpExpertResponse) {
            yield put(setNotification(expertSignUpPositiveNotification));
            yield put(push(CONFIG.routes.expertLogin));
        }
    } catch (signUpExpertError) {
        console.log(signUpExpertError);
        yield put(setNotification(expertSignUpFailedNotification));
    } finally {
        yield put(setLoadingFalse());
    }
}

export function* watchSignUpExpertSaga() {
    yield takeEvery(ServerActions.SIGNUP_EXPERT_USER, signUpExpertSaga);
}
