import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { ServerActions } from '../../redux/actions/server/server.actions';
import { clearNotification, setLoadingFalse, setLoadingTrue, setNotification } from '../../redux/actions/ui/ui.actions';
import CONFIG from '../../config/config';
import { NotificationType } from '../../interfaces/Notification.interface';
import { createNotification } from '../../utils/create-notification';
import { customerRegisterActionInterface } from './customer-register.actions';
import { omit } from 'ramda';

const API_URL = process.env.REACT_APP_SERVER_URL;
const headers = CONFIG.defaultHeaders;

export const registerPositiveNotification = createNotification(NotificationType.positive, `Registration Successful!`);
export const registerNegativeNotification = createNotification(NotificationType.negative, `Registration Failed!`);
const emailInUseNotification = createNotification(NotificationType.negative, `Email is already in use`);
const invalidDataNotification = createNotification(NotificationType.negative, `Data being send is wrong`);

export interface RegisterCustomerRequestBody {
    name: string;
    email: string;
    description: string;
    password: string;
    interestedInExpertiseAreas: string[];
    pictureUrl: string;
}

export async function apiRegisterCustomerUser(data: RegisterCustomerRequestBody) {
    return await fetch(`${API_URL}/user/register`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    });
}

export function* signUpCustomerSaga(action: customerRegisterActionInterface) {
    yield put(setLoadingTrue());
    let interestedInExpertiseAreas;
    if (action && action.interestedInExpertiseAreas) {
        interestedInExpertiseAreas = action.interestedInExpertiseAreas.map(x => x.value);
    }

    const data: RegisterCustomerRequestBody = omit(['type'], { ...action, interestedInExpertiseAreas });

    try {
        const signUpCustomerResponse = yield call(apiRegisterCustomerUser, data);
        const statusCode = signUpCustomerResponse.status;
        if (statusCode === 409) {
            yield put(setNotification(emailInUseNotification));
        }
        if (statusCode === 400) {
            yield put(setNotification(invalidDataNotification));
        }
        if (statusCode === 201) {
            yield put(setNotification(registerPositiveNotification));
            yield put(push(CONFIG.routes.customerLogin));
        }
    } catch (signUpCustomerError) {
        yield put(setNotification(registerNegativeNotification));
    } finally {
        yield put(setLoadingFalse());
        yield delay(2000);
        yield put(clearNotification());
    }
}

export function* watchSignUpUserSaga() {
    yield takeEvery(ServerActions.REGISTER_CUSTOMER_USER, signUpCustomerSaga);
}
