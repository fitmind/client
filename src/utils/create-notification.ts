import { NotificationInterface, NotificationType } from '../interfaces/Notification.interface';

export const createNotification = (type: NotificationType, body?: string): NotificationInterface => {
    return {
        type,
        body,
    };
};
