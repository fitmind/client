import { customerRegisterAction } from './customer-register.actions';
import CONFIG from '../../../config/config';
import { serverActions } from '../../../redux/actions/server.actions';

describe('customer register action', () => {
    it('should return the correct type and data', () => {
        const values = {
            email: 'fitmindexpert@fitmind.io',
            name: 'Fitmind',
            password: 'Testing123!',
            description: 'blahhhh blaaah',
            pictureUrl: CONFIG.testingPictureUrl,
            interestedInExpertiseAreas: [
                {
                    value: 'YOGA_COACH',
                    label: 'Yoga Teacher',
                },
            ],
        };
        const expectedAction = {
            type: serverActions.REGISTER_CUSTOMER_USER,
            ...values,
        };
        expect(customerRegisterAction(values)).toEqual(expectedAction);
    });
});
