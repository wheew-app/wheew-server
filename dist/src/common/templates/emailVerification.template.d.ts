declare const otpEmailTemplate: (data: {
    name?: string;
    otp: string;
}) => string;
export default otpEmailTemplate;
