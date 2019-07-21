import { rootSaga } from './root.saga';
import { fork, takeEvery, all } from 'redux-saga/effects';
import weatherSaga, { watchHandleFetch } from './weather.saga';
import serverSaga from './server.saga';

describe('root saga', () => {
    it('should react to the actions being called', () => {
        const generator = rootSaga();
        expect(generator.next().value).toEqual(all([fork(weatherSaga), fork(serverSaga)]));
    });
});
