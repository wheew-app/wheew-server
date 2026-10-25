export declare const MailerConfig: () => {
    host: string | undefined;
    port: string | undefined;
    user: string | undefined;
    password: string | undefined;
    service: string | undefined;
};
declare const _default: (() => {
    host: string | undefined;
    port: string | undefined;
    user: string | undefined;
    password: string | undefined;
    service: string | undefined;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    host: string | undefined;
    port: string | undefined;
    user: string | undefined;
    password: string | undefined;
    service: string | undefined;
}>;
export default _default;
