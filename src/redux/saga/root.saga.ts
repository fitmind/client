import weatherSaga from './weather.saga';
import { all, fork } from 'redux-saga/effects';
import serverSaga from './server.saga';

export function* rootSaga() {
    yield all([fork(weatherSaga), fork(serverSaga)]);
}
