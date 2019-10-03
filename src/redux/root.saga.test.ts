import { all } from 'redux-saga/effects';
import { watchLogoutUserSaga } from './flows/customer-logout/customer-logout.saga';
import { watchSignUpUserSaga } from '../ecosystems/customer-user/customer-register/customer-register.saga';
import { rootSaga } from './root.saga';
import { watchLoginUserSaga } from '../ecosystems/customer-user/customer-login/customer-login.saga';
import { watchFetchCustomerUser } from '../ecosystems/customer-user/customer-dashboard/customer-dashboard.saga';
import { watchExpertLoginSaga } from '../ecosystems/expert-user/expert-login/expert-login.saga';
import { watchRegisterExpertSaga } from '../ecosystems/expert-user/expert-register/expert-register.saga';
import { watchGetExpertUser } from '../ecosystems/expert-user/expert-dashboard/expert-dashboard.saga';
import { watchLogoutExpertSaga } from './flows/expert-logout/expert-logout.saga';
import { watchCreateListing } from '../ecosystems/expert-user/listing-create/listing-create.saga';
import { watchGetListingsSaga } from '../ecosystems/listings-page/listings-page.saga';

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

                // expert
                watchExpertLoginSaga(),
                watchRegisterExpertSaga(),
                watchGetExpertUser(),
                watchLogoutExpertSaga(),

                // listings-page
                watchCreateListing(),

                // get listings
                watchGetListingsSaga(),
            ]),
        );
    });
});
