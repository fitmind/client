import { rootSaga } from './root.saga';
import { all } from 'redux-saga/effects';
import { watchLogoutUserSaga } from './customer-logout/customer-logout.saga';
import { watchLoginUserSaga } from './customer-login/customer-login.saga';

describe('root saga', () => {
    it('should react to the actions being called', () => {
        const generator = rootSaga();
        expect(generator.next().value).toEqual(all([watchLoginUserSaga(), watchLogoutUserSaga()]));
    });
});
