import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { serverActions } from '../../../redux/actions/server.actions';
import { clearNotification, setLoadingFalse, setLoadingTrue, setNotification } from '../../../redux/actions/ui.actions';
import CONFIG from '../../../config/config';
import { NotificationType } from '../../../interfaces/notification';
import { createNotification } from '../../../utils/create-notification';
import { omit } from 'ramda';
import { expertRegisterActionInterface } from './expert-register.actions';
import { getValuesFromMultiSelect } from '../../../utils/get-values-from-multiselect';
import { BAD_REQUEST, CONFLICT, CREATED } from 'http-status-codes';

const API_URL = process.env.REACT_APP_SERVER_URL;
const headers = CONFIG.defaultHeaders;

export const registerExpertPositiveNotification = createNotification(
    NotificationType.positive,
    `Registration Successful, please login here`,
);
export const registerExpertNegativeNotification = createNotification(NotificationType.negative, `Registration Failed!`);
export const emailExpertInUseNotification = createNotification(NotificationType.negative, `Email is already in use`);
export const invalidExpertDataNotification = createNotification(NotificationType.negative, `Data being send is wrong`);

export interface RegisterExpertRequestBody {
    name: string;
    email: string;
    description: string;
    password: string;
    isAnExpertIn: string[];
    pictureUrl: string;
    weeklyAvailability: {
        monday: string[];
        tuesday: string[];
        wednesday: string[];
        thursday: string[];
        friday: string[];
        saturday: string[];
        sunday: string[];
    };
}

export async function apiRegisterExpertUser(data: RegisterExpertRequestBody) {
    return await fetch(`${API_URL}/expert/register`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    });
}

export function* registerExpertSaga(action: expertRegisterActionInterface) {
    yield put(setLoadingTrue());

    let isAnExpertIn: string[] = [];
    if (action && action.isAnExpertIn) {
        isAnExpertIn = getValuesFromMultiSelect(action.isAnExpertIn);
    }

    const data: RegisterExpertRequestBody = omit(['type'], { ...action, isAnExpertIn });
    try {
        const signUpExpertResponse = yield call(apiRegisterExpertUser, data);
        const statusCode = signUpExpertResponse.status;
        if (statusCode === CONFLICT) {
            yield put(setNotification(emailExpertInUseNotification));
        }
        if (statusCode === BAD_REQUEST) {
            yield put(setNotification(invalidExpertDataNotification));
        }
        if (statusCode === CREATED) {
            yield put(setNotification(registerExpertPositiveNotification));
            yield put(push(CONFIG.routes.expertLogin));
        }
    } catch (signUpCustomerError) {
        yield put(setNotification(registerExpertNegativeNotification));
    } finally {
        yield put(setLoadingFalse());
        if (process.env.NODE_ENV !== 'test') {
            yield delay(5000);
        }
        yield put(clearNotification());
    }
}

export function* watchRegisterExpertSaga() {
    yield takeEvery(serverActions.REGISTER_EXPERT_USER, registerExpertSaga);
}
