export declare const StripeConfig: () => {
    stripe_key: string | undefined;
    webhook_key: string | undefined;
};
declare const _default: (() => {
    stripe_key: string | undefined;
    webhook_key: string | undefined;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    stripe_key: string | undefined;
    webhook_key: string | undefined;
}>;
export default _default;
