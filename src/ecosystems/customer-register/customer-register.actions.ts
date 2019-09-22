import { Action } from 'redux';

export const REGISTER_CUSTOMER_USER = 'REGISTER_CUSTOMER_USER';

export interface customerRegisterActionInterface extends Action<'REGISTER_CUSTOMER_USER'> {
    name: string;
    email: string;
    description: string;
    password: string;
    interestedInExpertiseAreas: [{ value: string; label: string }];
    pictureUrl: string;
}

export const customerRegisterAction = ({
    name,
    email,
    description,
    password,
    interestedInExpertiseAreas,
    pictureUrl,
}): customerRegisterActionInterface => ({
    type: 'REGISTER_CUSTOMER_USER',
    email,
    name,
    password,
    interestedInExpertiseAreas,
    description,
    pictureUrl,
});
