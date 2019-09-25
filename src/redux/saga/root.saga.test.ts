import { all } from 'redux-saga/effects';
import { watchLogoutUserSaga } from '../flows/customer-logout/customer-logout.saga';
import { watchSignUpUserSaga } from '../../ecosystems/customer-register/customer-register.saga';
import { rootSaga } from './root.saga';
import { watchLoginUserSaga } from '../../ecosystems/customer-login/customer-login.saga';
import { watchFetchCustomerUser } from '../../ecosystems/customer-dashboard/customer-dashboard.saga';

describe('root saga', () => {
    it('should react to the actions being called', () => {
        const generator = rootSaga();
        expect(generator.next().value).toEqual(
            all([
                // user
                watchLoginUserSaga(),
                watchLogoutUserSaga(),
                watchSignUpUserSaga(),
                watchFetchCustomerUser(),
            ]),
        );
    });
});
