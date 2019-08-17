import { rootSaga } from './root.saga';
import { fork, all } from 'redux-saga/effects';
import customerLogoutSaga from './customer-logout/customer-logout.saga';
import customerLoginSaga from './customer-login/customer-login';

describe('root saga', () => {
    it('should react to the actions being called', () => {
        const generator = rootSaga();
        expect(generator.next().value).toEqual(all([fork(customerLoginSaga), fork(customerLogoutSaga)]));
    });
});
