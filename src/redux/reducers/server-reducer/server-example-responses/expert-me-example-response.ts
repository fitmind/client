import { ExpertUserResponse } from '../../../../interfaces/responses/expert-user-response';

export const ExpertUserExampleResponse: ExpertUserResponse = {
    _id: '1234',
    firstName: 'Fitmind',
    lastName: 'User',
    createdAt: new Date().toISOString().slice(0, 10),
    approvedStatus: 'APPROVED',
    description:
        'II’m a versatile personal trainer, who has experience in Functional training, wieight training and yoga. I’ve been training people of all ages for over 12 years improving their overall quality of life.',
    email: 'expert1@fitmind.io',
    expertise: ['PERSONAL_COACH', 'YOGA_COACH'],
    phone: '123123132',
    weeklyAvailability: {
        monday: ['00:00'],
        tuesday: ['00:00'],
        wednesday: ['00:00'],
        thursday: ['00:00'],
        friday: ['00:00'],
        saturday: ['00:00'],
        sunday: ['00:00'],
    },
    pictureUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBx76lQwzW2cAsjz5JqgVp_ReTpVji6G_pMO6crXSJn9NETq3F',
};