declare const locationNotificationEmailTemplate: (data: {
    userName?: string;
    title: string;
    message: string;
    location?: string;
}) => string;
export default locationNotificationEmailTemplate;
