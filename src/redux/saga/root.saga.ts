import weatherSaga from './weather.saga';
import { all, fork } from 'redux-saga/effects';

export function* rootSaga() {
    yield all([fork(weatherSaga)]);
}
