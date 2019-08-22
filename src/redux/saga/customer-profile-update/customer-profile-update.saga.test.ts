import { push } from 'connected-react-router';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import CONFIG from '../../../config/config';
import { setLoadingFalse, setLoadingTrue, setNotification } from '../../actions/ui/ui.actions';
import { apiProfileUpdateCustomerUser } from '../../api';
import { CustomerProfileUpdateExampleResponse } from '../../reducers/server-reducer/server-example-responses/user-profile-update-example-response';
import { profileUpdateCustomerSaga, userProfileUpdatePositiveNotification } from './customer-profile-update.saga';

describe('customer Profile Update saga', () => {
    it('it updates profile', () => {
        return expectSaga(profileUpdateCustomerSaga)
            .provide([
                [
                    matchers.call.fn(apiProfileUpdateCustomerUser),
                    { json: () => CustomerProfileUpdateExampleResponse, status: 200 },
                ],
            ])
            .put(setLoadingTrue())
            .put(setNotification(userProfileUpdatePositiveNotification))
            .put(push(CONFIG.routes.home))
            .put(setLoadingFalse())
            .run();
    });
});
