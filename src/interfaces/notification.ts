export enum NotificationType {
    positive = 'positive',
    negative = 'negative',
    neutral = 'neutral',
}

export interface Notification {
    type: NotificationType;
    header?: string;
    body?: string;
}
