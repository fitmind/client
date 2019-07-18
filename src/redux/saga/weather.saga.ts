import { fork, takeEvery, all, call, put } from 'redux-saga/effects';
import { WEATHER_ACTIONS, setWeatherAction, FetchWeatherActionType } from '../actions/weather/weather.actions';
import { setLoadingTrue, setLoadingFalse, setErrorMessage } from '../actions/ui/ui.actions';

export function* handleFetch(action: FetchWeatherActionType) {
    yield put(setLoadingTrue());
    const res = yield call(action.apiCall);
    if (res.error) {
        yield put(setErrorMessage('error fetching the data'));
    } else {
        yield put(setWeatherAction(res));
    }
    yield put(setLoadingFalse());
}

export function* watchHandleFetch() {
    yield takeEvery(WEATHER_ACTIONS.FETCH_WEATHER, handleFetch);
}

function* weatherSaga() {
    yield all([fork(watchHandleFetch)]);
}

export default weatherSaga;
