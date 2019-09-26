import { expertRegisterAction, expertRegisterActionInterface } from './expert-register.actions';
import CONFIG from '../../../config/config';

describe('expert register action', () => {
    it('should return the correct type and data', () => {
        const values = {
            name: 'Diego',
            email: 'diegoromero.audio@gmail.com',
            description: 'some long string',
            password: 'ValidPassword123',
            isAnExpertIn: [
                {
                    value: 'YOGA_COACH',
                    label: 'Yoga Teacher',
                },
            ],
            pictureUrl: CONFIG.testingPictureUrl,
            weeklyAvailability: {
                monday: ['08:00', '09:00', '10:00'],
                tuesday: ['07:00', '08:00', '09:00'],
                wednesday: ['06:00', '07:00', '08:00', '09:00'],
                thursday: ['14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
                friday: ['20:00', '21:00', '22:00', '23:00'],
                saturday: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00'],
                sunday: ['00:00'],
            },
        };
        const expectedAction: expertRegisterActionInterface = {
            type: 'REGISTER_EXPERT_USER',
            ...values,
        };
        expect(expertRegisterAction(values)).toEqual(expectedAction);
    });
});
