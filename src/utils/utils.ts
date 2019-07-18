import moment from 'moment';

export const formatDate = (date: string): string => {
    return moment(date).format('MMMM Do YYYY'); // July 11th 2019, 5:03:39 pm
};
