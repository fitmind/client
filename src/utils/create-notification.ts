import { Notification, NotificationType } from '../interfaces/notification';

export const createNotification = (type: NotificationType, body?: string): Notification => {
    return {
        type,
        body,
    };
};
