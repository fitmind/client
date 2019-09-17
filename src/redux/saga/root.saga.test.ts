import { all } from 'redux-saga/effects';
import { watchCustomerDashboardSaga } from './customer-dashboard/customer-dashboard.saga';
import { watchLoginUserSaga } from './customer-login/customer-login.saga';
import { watchLogoutUserSaga } from './customer-logout/customer-logout.saga';
import { watchProfileUpdateUserSaga } from './customer-profile-update/customer-profile-update.saga';
import { watchSignUpUserSaga } from './customer-signup/customer-signup.saga';
import { watchCustomerUserSaga } from './customer-user/customer-user.saga';
import { watchLoginExpertSaga } from './expert-login/expert-login.saga';
import { rootSaga } from './root.saga';
import { watchLogoutExpertSaga } from './expert-logout/expert-logout.saga';
import { watchSignUpExpertSaga } from './expert-signup/expert-signup.saga';
import { rootSaga } from './root.saga';
import { watchExpertDashboardSaga } from './expert-dashboard/expert-dashboard.saga';
import { watchExpertUserSaga } from './expert-user/expert-user.saga';

describe('root saga', () => {
    it('should react to the actions being called', () => {
        const generator = rootSaga();
        expect(generator.next().value).toEqual(
            all([
                watchLoginUserSaga(),
                watchLogoutUserSaga(),
                watchCustomerDashboardSaga(),
                watchSignUpUserSaga(),
                watchCustomerUserSaga(),
                watchProfileUpdateUserSaga(),
                watchSignUpExpertSaga(),
                watchLoginExpertSaga(),
                watchLogoutExpertSaga(),
                watchExpertDashboardSaga(),
                watchExpertUserSaga(),
            ]),
        );
    });
});
