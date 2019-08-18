export enum NotificationType {
    positive = 'positive',
    negative = 'negative',
    neutral = 'neutral',
}

export interface NotificationInterface {
    type: NotificationType;
    header?: string;
    body?: string;
}
